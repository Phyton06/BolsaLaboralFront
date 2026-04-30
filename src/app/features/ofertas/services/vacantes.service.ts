import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of, forkJoin } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { VacantesApiService } from './vacantes-api.service';

export interface VacanteDisplay {
  id: number;
  match: number;
  titulo: string;
  empresa: string;
  ubicacion: string;
  tags: string[];
  sal?: string;
  fuente: string;
  esNueva?: boolean;
  url_externa?: string;
  company?: string;
  title?: string;
  loc?: string;
  src?: string;
  isNew?: boolean;
}

@Injectable({ providedIn: 'root' })
export class VacantesService {
  
  vacantes = signal<VacanteDisplay[]>([]);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);
  
  ubicaciones = signal<string[]>(['Sin preferencia', 'Remoto', 'Presencial']);
  modalidades = signal<string[]>(['Sin preferencia', 'Presencial', 'Remoto']);
  
  filtros = signal({
    search: '',
    ubicacion: 'Sin preferencia',
    modalidad: 'Sin preferencia',
    minMatch: 0,
    incluirConvenio: true,
    incluirDenue: true,
    pagina: 1
  });

  constructor(
    private http: HttpClient,
    private vacantesApi: VacantesApiService
  ) {}

  cargarFiltrosYPerfil(): void {
    this.vacantesApi.getFiltros().subscribe({
      next: (data) => {
        if (data.ubicaciones?.length) {
          this.ubicaciones.set(['Sin preferencia', ...data.ubicaciones]);
        }
        if (data.modalidades?.length) {
          this.modalidades.set(data.modalidades);
        }
      },
      error: (err) => console.error('Error cargando filtros:', err)
    });
  }

  cargarVacantes(): void {
    this.cargando.set(true);
    this.error.set(null);
    
    const f = this.filtros();
    const requests: Observable<any>[] = [];
    
    // Load from backend (Convenio UT)
    if (f.incluirConvenio) {
      requests.push(
        this.vacantesApi.listar({
          search: '',
          ubicacion: '',
          page: 1,
          limit: 50
        }).pipe(
          map(response => ({
            source: 'backend',
            data: response.vacantes.map((v: any) => ({
              id: v.id,
              match: 75,
              titulo: v.titulo || 'Sin título',
              empresa: v.empresa || 'Empresa',
              ubicacion: v.ubicacion || 'Nayarit',
              tags: [],
              sal: 'A consultar',
              fuente: 'Convenio UT',
              esNueva: false,
              company: v.empresa,
              title: v.titulo,
              loc: v.ubicacion,
              src: 'Convenio UT',
              isNew: false
            }))
          }))
        )
      );
    }
    
    // Load from Jooble
    if (f.incluirDenue) {
      requests.push(
        this.vacantesApi.buscarExternas({
          q: 'desarrollador',
          location: 'Mexico',
          page: 1,
          limit: 20
        }).pipe(
          map(response => ({
            source: 'jooble',
            data: response.vacantes.map((v: any) => ({
              id: v.id,
              match: 75,
              titulo: v.titulo || 'Sin título',
              empresa: v.empresa || 'Empresa',
              ubicacion: v.ubicacion || 'Remoto',
              tags: v.tags || [],
              sal: v.sal || 'A consultar',
              fuente: 'Jooble',
              esNueva: false,
              company: v.empresa,
              title: v.titulo,
              loc: v.ubicacion,
              src: 'Jooble',
              isNew: false
            }))
          })),
          catchError(err => {
            console.error('Jooble error:', err);
            return of({ source: 'jooble', data: [] });
          })
        )
      );
    }

    if (requests.length === 0) {
      this.vacantes.set([]);
      this.cargando.set(false);
      return;
    }

    forkJoin(requests).subscribe({
      next: (results) => {
        let todas: any[] = [];
        
        for (const result of results) {
          if (result.data && result.data.length > 0) {
            todas = [...todas, ...result.data];
          }
        }
        
        this.vacantes.set(todas);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error:', err);
        this.error.set('Error al cargar vacantes');
        this.cargando.set(false);
      }
    });
  }

  aplicarFiltros(filtros: any): void {
    this.filtros.update(f => ({ ...f, ...filtros }));
    this.cargarVacantes();
  }

  limpiarFiltros(): void {
    this.filtros.set({
      search: '',
      ubicacion: 'Sin preferencia',
      modalidad: 'Sin preferencia',
      minMatch: 0,
      incluirConvenio: true,
      incluirDenue: true,
      pagina: 1
    });
    this.cargarVacantes();
  }
}