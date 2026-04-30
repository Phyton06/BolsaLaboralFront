import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map, catchError, of, delay, forkJoin } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { VacantesApiService, Vacante, VacanteListResponse } from './vacantes-api.service';

// ─── Interfaces ──────────────────────────────────────────────

export interface VacanteDisplay {
  // Propiedades principales (del backend y mock)
  id: number;
  match: number;
  titulo: string;
  empresa: string;
  ubicacion: string;
  tags: string[];
  salario: string;
  fuente: 'Convenio UT' | 'DENUE' | 'Externo';
  esNueva?: boolean;
  url_externa?: string;
  descripcion?: string;
  
  // Alias para compatibilidad con template (JobOffer original)
  // Estas son las propiedades que el template espera
  title?: string;    // alias de titulo
  company?: string;   // alias de empresa
  loc?: string;      // alias de ubicacion
  sal?: string;       // alias de salario
  src?: 'Convenio UT' | 'DENUE' | 'Externo';  // alias de fuente
  isNew?: boolean;   // alias de esNueva
}

// Vacantes externas via Jooble (ya no hay mockups)
// Los datos ahora vienen del backend que llama a Jooble API

@Injectable({ providedIn: 'root' })
export class VacantesService {
  
  // Estado
  vacantes = signal<VacanteDisplay[]>([]);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);
  
  // Filtros actuales
  filtros = signal({
    search: '',
    ubicacion: '',
    minMatch: 70,
    incluirConvenio: true,
    incluirDenue: true,
    pagina: 1
  });

  constructor(
    private http: HttpClient,
    private vacantesApi: VacantesApiService
  ) {}

  // ─── CARGAR VACANTES ─────────────────────────────────
  
  cargarVacantes(): void {
    this.cargando.set(true);
    this.error.set(null);
    
    const f = this.filtros();
    
    // Cargar vacantes del backend (convenio UT) y externas (Jooble) en parallel
    const requests: Observable<any>[] = [];
    
    // Backend local (convenio UT)
    if (f.incluirConvenio) {
      requests.push(
        this.vacantesApi.listar({
          search: f.search,
          ubicacion: f.ubicacion,
          page: f.pagina,
          limit: 20
        }).pipe(
          map(response => ({
            source: 'backend',
            data: response.vacantes.map((v: any) => ({
              id: v.id,
              match: v.match || Math.floor(Math.random() * 30) + 60,
              titulo: v.titulo,
              empresa: v.empresa,
              ubicacion: v.ubicacion,
              sal: 'A consultar',
              tags: [],
              fuente: v.estatus_convenio === 'activo' ? 'Convenio UT' : 'Externo',
              esNueva: this.esReciente(v.fecha_publicacion),
              descripcion: v.descripcion || '',
              url_externa: v.url_externa || undefined,
              company: v.empresa,
              title: v.titulo,
              loc: v.ubicacion,
              src: v.estatus_convenio === 'activo' ? 'Convenio UT' : 'Externo' as const,
              isNew: this.esReciente(v.fecha_publicacion)
            }))
          }))
        )
      );
    }
    
    // Jooble (vacantes externas)
    if (f.incluirDenue) {
      requests.push(
        this.vacantesApi.buscarExternas({
          q: f.search || 'desarrollador',
          location: f.ubicacion || 'Mexico',
          page: f.pagina,
          limit: 20
        }).pipe(
          map(response => ({
            source: 'jooble',
            data: response.vacantes.map((v: any) => ({
              id: v.id,
              match: v.match || Math.floor(Math.random() * 30) + 60,
              titulo: v.titulo,
              empresa: v.empresa,
              ubicacion: v.ubicacion,
              tags: v.tags || [],
              sal: v.sal || v.salario || 'A consultar',
              fuente: v.fuente || 'Jooble',
              esNueva: this.esReciente(v.fecha_publicacion),
              url_externa: v.url_externa,
              company: v.empresa,
              title: v.titulo,
              loc: v.ubicacion,
              src: 'Externas' as const
            }))
          }))
        )
      );
    }

    if (requests.length === 0) {
      this.vacantes.set([]);
      this.cargando.set(false);
      return;
    }

    // Ejecutar todas las requests en paralelo
    forkJoin(requests).subscribe({
      next: (results) => {
        // Combinar todos los resultados
        let todasLasVacantes: any[] = [];
        
        for (const result of results) {
          if (result.data && result.data.length > 0) {
            // Filtrar por minMatch
            const filtradas = result.data.filter((v: any) => 
              v.match >= f.minMatch
            );
            todasLasVacantes = [...todasLasVacantes, ...filtradas];
          }
        }

        // Ordenar por match (mayor primero)
        this.vacantes.set(
          todasLasVacantes.sort((a, b) => b.match - a.match)
        );
        
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error cargando vacantes:', err);
        this.error.set('Error al cargar vacantes. Intenta de nuevo.');
        this.cargando.set(false);
      }
    });
  }

  // ─── FILTROS ───────────────────────────────────────────

  setFiltro<K extends keyof ReturnType<typeof this.filtros>>(
    key: K, 
    value: ReturnType<typeof this.filtros>[K]
  ): void {
    this.filtros.update(f => ({ ...f, [key]: value }));
    this.cargarVacantes(); // Recargar con nuevos filtros
  }

  aplicarFiltros(filtros: {
    search?: string;
    ubicacion?: string;
    minMatch?: number;
    incluirConvenio?: boolean;
    incluirDenue?: boolean;
  }): void {
    this.filtros.update(f => ({ ...f, ...filtros }));
    this.cargarVacantes();
  }

  limpiarFiltros(): void {
    this.filtros.set({
      search: '',
      ubicacion: '',
      minMatch: 70,
      incluirConvenio: true,
      incluirDenue: true,
      pagina: 1
    });
    this.cargarVacantes();
  }

  // ─── HELPERS ─────────────────────────────────────────

  private esReciente(fecha: string): boolean {
    if (!fecha) return false;
    const fechaVacante = new Date(fecha);
    const hoy = new Date();
    const dias = Math.floor((hoy.getTime() - fechaVacante.getTime()) / (1000 * 60 * 60 * 24));
    return dias <= 7;
  }

  getStats() {
    const v = this.vacantes();
    return {
      total: v.length,
      conveniencia: v.filter(x => x.fuente === 'Convenio UT').length,
      denue: v.filter(x => x.fuente === 'DENUE').length
    };
  }
}