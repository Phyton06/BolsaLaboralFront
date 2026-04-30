import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of, forkJoin } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { VacantesApiService } from './vacantes-api.service';
import { AuthService } from '../../../core/services/auth/auth.service';

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
  url?: string;
  company?: string;
  title?: string;
  loc?: string;
  src?: string;
  isNew?: boolean;
  yaPostulado?: boolean;
}

@Injectable({ providedIn: 'root' })
export class VacantesService {
  
  vacantes = signal<VacanteDisplay[]>([]);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);
  
  // Ubicaciones: se cargan del backend (32 estados + Sin preferencia)
  ubicaciones = signal<string[]>(['Sin preferencia']);
  
  filtros = signal({
    search: '',
    ubicacion: 'Sin preferencia',
    minMatch: 0,
    incluirConvenio: true,
    incluirExternas: true,
    pagina: 1
  });

  constructor(
    private http: HttpClient,
    private vacantesApi: VacantesApiService,
    private authService: AuthService
  ) {}

  cargarFiltrosYPerfil(): void {
    this.vacantesApi.getFiltros().subscribe({
      next: (data) => {
        if (data.ubicaciones?.length) {
          this.ubicaciones.set(data.ubicaciones);
        }
      },
      error: (err) => {
        console.error('Error cargando filtros:', err);
        // Fallback con todos los estados
        this.ubicaciones.set([
          'Sin preferencia', 'Nayarit', 'Aguascalientes', 'Baja California',
          'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua',
          'Ciudad de México', 'Coahuila', 'Colima', 'Durango', 'Guanajuato',
          'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán',
          'Morelos', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro',
          'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora',
          'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán',
          'Zacatecas', 'Remoto'
        ]);
      }
    });
  }

  cargarVacantes(joobleLocation?: string): void {
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
              url_externa: v.url_externa,
              src: 'Convenio UT',
              isNew: false
            }))
          })),
          catchError(err => {
            console.error('Error cargando vacantes DB:', err);
            return of({ source: 'backend', data: [] });
          })
        )
      );
    }
    
    // Load from Jooble (externas)
    if (f.incluirExternas) {
      const location = joobleLocation || 'Mexico';
      requests.push(
        this.vacantesApi.buscarExternas({
          q: 'software developer',
          location: location,
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
              ubicacion: v.ubicacion || location,
              tags: v.tags || [],
              sal: v.sal || 'A consultar',
              fuente: 'Jooble',
              esNueva: false,
              company: v.empresa,
              title: v.titulo,
              loc: v.ubicacion,
              url_externa: v.url_externa || v.url,
              src: 'Jooble',
              isNew: false
            }))
          })),
          catchError(err => {
            console.error('Error cargando vacantes Jooble:', err);
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
        let todas: VacanteDisplay[] = [];
        
        for (const result of results) {
          if (result.data && result.data.length > 0) {
            todas = [...todas, ...result.data];
          }
        }
        
        // Marcar vacantes ya postuladas (solo Convenio UT)
        if (this.authService.isAuthenticated() && this.authService.hasRole('egresado')) {
          this.http.get<{ success: boolean; data: { id_postulacion: number; vacante_id: number }[] }>(
            `${environment.apiUrl}/egresado/postulaciones`
          ).pipe(
            map(resp => resp.data || []),
            catchError(() => of([]))
          ).subscribe(postulaciones => {
            const vacantesIds = new Set(postulaciones.map(p => p.vacante_id));
            todas = todas.map(v => ({
              ...v,
              yaPostulado: v.src === 'Convenio UT' && vacantesIds.has(v.id)
            }));
            this.vacantes.set(todas);
            this.cargando.set(false);
          });
        } else {
          this.vacantes.set(todas);
          this.cargando.set(false);
        }
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
      minMatch: 0,
      incluirConvenio: true,
      incluirExternas: true,
      pagina: 1
    });
    this.cargarVacantes();
  }
}