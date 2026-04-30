import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map, catchError, of, delay } from 'rxjs';
import { environment } from '../../../../environments/environment';

// ─── Interfaces ──────────────────────────────────────────────

export interface Vacante {
  id: number;
  empresa_id?: number;
  empresa: string;
  titulo: string;
  descripcion?: string;
  ubicacion: string;
  division_destino?: string | null;
  perfil_idoneo?: any;
  analisis_gemini?: any;
  es_externa?: boolean;
  url_externa?: string | null;
  fecha_publicacion?: string;
  estatus_convenio?: string;
  match?: number | null;
  // Campos de vacantes externas (Jooble)
  tags?: string[];
  fuente?: string;
  url?: string;
  sal?: string;
}

export interface PerfilIdoneo {
  habilidades_requeridas?: string[];
  nivel_ingles?: string;
  experiencia_minima?: string;
  educacion_minima?: string;
}

export interface VacanteListResponse {
  vacantes: Vacante[];
  total: number;
  pagina: number;
  paginas: number;
}

export interface ApiEnvelope<T> {
  success: boolean;
  message?: string;
  data: T;
}

// ─── VacantesApiService ──────────────────────────────────

@Injectable({ providedIn: 'root' })
export class VacantesApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ─── GET /vacantes ─────────────────────────────────────
  // Lista vacantes con filtros y paginación
  listar(params?: {
    search?: string;
    ubicacion?: string;
    division_id?: number;
    solo_convenio?: boolean;
    page?: number;
    limit?: number;
  }): Observable<VacanteListResponse> {
    const queryParams = new URLSearchParams();
    
    if (params?.search) queryParams.append('search', params.search);
    if (params?.ubicacion) queryParams.append('ubicacion', params.ubicacion);
    if (params?.division_id) queryParams.append('division_id', params.division_id.toString());
    if (params?.solo_convenio) queryParams.append('solo_convenio', 'true');
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());

    const url = `${this.apiUrl}/vacantes${queryParams.toString() ? '?' + queryParams.toString() : ''}`;

    return this.http.get<ApiEnvelope<{ vacantes: Vacante[]; meta: { total: number; pagina: number; paginas: number } }>>(url).pipe(
      map(envelope => ({
        vacantes: envelope.data.vacantes.map(v => this.mapVacante(v)),
        total: envelope.data.meta.total,
        pagina: envelope.data.meta.pagina,
        paginas: envelope.data.meta.paginas
      })),
      catchError(err => {
        console.error('Error fetching vacantes:', err);
        return of({ vacantes: [], total: 0, pagina: 1, paginas: 0 });
      })
    );
  }

  // ─── GET /vacantes/:id ─────────────────────────────────
  // Obtiene detalle de una vacante
  getDetalle(id: number): Observable<Vacante | null> {
    return this.http.get<ApiEnvelope<Vacante>>(`${this.apiUrl}/vacantes/${id}`).pipe(
      map(envelope => this.mapVacante(envelope.data)),
      catchError(err => {
        console.error('Error fetching vacante detail:', err);
        return of(null);
      })
    );
  }

  // ─── GET /vacantes/externas ───────────────────────────────
  // Busca vacantes externas via Jooble API
  buscarExternas(params?: {
    q?: string;
    location?: string;
    page?: number;
    limit?: number;
  }): Observable<VacanteListResponse> {
    const queryParams = new URLSearchParams();
    
    if (params?.q) queryParams.append('q', params.q);
    if (params?.location) queryParams.append('location', params.location);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());

    const url = `${this.apiUrl}/vacantes/externas${queryParams.toString() ? '?' + queryParams.toString() : ''}`;

    return this.http.get<ApiEnvelope<{ vacantes: Vacante[]; meta: { total: number; pagina: number; paginas: number } }>>(url).pipe(
      map(envelope => ({
        vacantes: envelope.data.vacantes.map(v => this.mapVacante(v)),
        total: envelope.data.meta.total,
        pagina: envelope.data.meta.pagina,
        paginas: envelope.data.meta.paginas
      })),
      catchError(err => {
        console.error('Error fetching vacantes externas:', err);
        return of({ vacantes: [], total: 0, pagina: 1, paginas: 0 });
      })
    );
  }

  // ─── HELPERS ───────────────────────────────────────────

  private mapVacante(v: any): Vacante {
    return {
      id: v.id,
      empresa: v.empresa,
      titulo: v.titulo,
      descripcion: v.descripcion || '',
      ubicacion: v.ubicacion,
      es_externa: v.es_externa || false,
      url_externa: v.url_externa || v.url || null,
      fecha_publicacion: v.fecha_publicacion,
      match: v.match || null,
      // Campos de externas
      tags: v.tags || [],
      fuente: v.fuente || 'Jooble',
      sal: v.salario || v.sal || 'A consultar'
    };
  }
}