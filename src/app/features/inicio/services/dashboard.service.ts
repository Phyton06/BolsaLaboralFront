import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiEnvelope } from '../../../features/auth/interfaces/ApiEnvelope';

// ─── Backend response interfaces (lo que devuelve el API real) ──────

/** GET /egresado/stats */
export interface BackendStats {
  postulaciones_activas: number;
  match_promedio: number;
  pruebas_completadas: number;
  vistas_perfil: number;
}

/** GET /evaluaciones/radar */
export interface BackendRadar {
  labels: string[];
  alumno: number[];
  promedio_carrera: number[];
}

/** GET /evaluaciones/catalogo — item del catálogo */
export interface BackendEvaluacion {
  id: number;
  nombre: string;
  tipo: string;
  minutos: number;
  cantidad_preguntas: number;
  completada: boolean;
  en_progreso: boolean;
  ultimo_puntaje: number | null;
  bloqueada: boolean;
  mensaje_bloqueo: string | null;
  disponible_en: string | null;
}

/** GET /vacantes — response envuelta */
export interface BackendVacantesResponse {
  vacantes: BackendVacante[];
  meta: { total: number; page: number; limit: number; pages: number };
}

export interface BackendVacante {
  id: number;
  titulo: string;
  empresa: string;
  ubicacion: string;
  modalidad: string;
  estatus_convenio: string;
  es_externa: boolean;
  match: number | null;
  fecha_publicacion: string;
}

/** GET /egresado/postulaciones — item */
export interface BackendPostulacion {
  id_postulacion: number;
  vacante_id: number;
  vacante_titulo: string;
  empresa: string;
  estatus: string;
  match: number;
  fecha: string;
}

// ─── Frontend interfaces (normalizadas para el componente) ──────────

export interface RadarData {
  ejes: string[];
  perfil_actual: number[];
  perfil_ideal: number[];
}

export interface EvaluacionPendiente {
  id: number;
  tipo_prueba: string;
  titulo: string;
  duracion_min: number;
  vence_en: string;
  warn: boolean;
}

export interface VacanteRecomendada {
  id: number;
  titulo: string;
  empresa: string;
  ubicacion: string;
  salario_min?: number;
  salario_max?: number;
  match_porcentaje: number;
  tags: string[];
  es_externa: boolean;
}

export interface PostulacionEstado {
  id: number;
  vacante_id: number;
  titulo_vacante: string;
  empresa: string;
  estatus: string;
  match_porcentaje: number;
  fecha_postulacion: string;
}

export interface DashboardData {
  stats: BackendStats | null;
  radar: RadarData | null;
  evaluacionesPendientes: EvaluacionPendiente[];
  vacantesRecomendadas: VacanteRecomendada[];
  postulaciones: PostulacionEstado[];
}

/**
 * Servicio que agrega todos los datos necesarios para el dashboard de inicio.
 * Normaliza las respuestas del backend a interfaces de frontend.
 */
@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  // ─── Stats ────────────────────────────────────────────────────────

  getStats(): Observable<BackendStats | null> {
    return this.http
      .get<ApiEnvelope<BackendStats>>(`${this.apiUrl}/egresado/stats`)
      .pipe(
        map((env) => {
          console.log('[Dashboard] Stats response:', env);
          return env.data;
        }),
        catchError((err) => {
          console.error('[Dashboard] Stats error:', err);
          return of(null);
        })
      );
  }

  // ─── Radar ────────────────────────────────────────────────────────

  getRadar(): Observable<RadarData | null> {
    return this.http
      .get<ApiEnvelope<BackendRadar>>(`${this.apiUrl}/evaluaciones/radar`)
      .pipe(
        map((env) => {
          console.log('[Dashboard] Radar response:', env);
          const d = env.data;
          if (!d || !d.labels.length) return null;
          return {
            ejes: d.labels,
            perfil_actual: d.alumno,
            perfil_ideal: d.promedio_carrera,
          };
        }),
        catchError((err) => {
          console.error('[Dashboard] Radar error:', err);
          return of(null);
        })
      );
  }

  // ─── Evaluaciones pendientes ──────────────────────────────────────

  getEvaluacionesPendientes(): Observable<EvaluacionPendiente[]> {
    return this.http
      .get<ApiEnvelope<BackendEvaluacion[]>>(
        `${this.apiUrl}/evaluaciones/catalogo`
      )
      .pipe(
        map((env) => {
          console.log('[Dashboard] Evaluaciones response:', env);
          const items = env.data ?? [];
          // Filtrar solo las que NO están completadas y están disponibles
          return items
            .filter((e) => !e.completada && !e.bloqueada)
            .map((e) => ({
              id: e.id,
              tipo_prueba: e.tipo,
              titulo: e.nombre,
              duracion_min: e.minutos,
              vence_en: e.en_progreso
                ? 'En progreso — continuar'
                : e.disponible_en
                  ? `Disponible en ${e.disponible_en}`
                  : 'Disponible',
              warn: e.en_progreso,
            }));
        }),
        catchError((err) => {
          console.error('[Dashboard] Evaluaciones error:', err);
          return of([]);
        })
      );
  }

  // ─── Vacantes recomendadas ────────────────────────────────────────

  getVacantesRecomendadas(limit = 5): Observable<VacanteRecomendada[]> {
    return this.http
      .get<ApiEnvelope<BackendVacantesResponse>>(`${this.apiUrl}/vacantes`)
      .pipe(
        map((env) => {
          console.log('[Dashboard] Vacantes response:', env);
          const vacantes = env.data?.vacantes ?? [];
          // Ordenar por match (las que tienen match primero) y tomar las primeras
          const sorted = vacantes
            .filter((v) => v.match !== null)
            .sort((a, b) => (b.match ?? 0) - (a.match ?? 0))
            .slice(0, limit);

          // Si no hay vacantes con match, tomar las más recientes
          if (!sorted.length) {
            return vacantes.slice(0, limit).map(mapVacante);
          }
          return sorted.map(mapVacante);
        }),
        catchError((err) => {
          console.error('[Dashboard] Vacantes error:', err);
          return of([]);
        })
      );
  }

  // ─── Postulaciones ────────────────────────────────────────────────

  getPostulaciones(): Observable<PostulacionEstado[]> {
    return this.http
      .get<ApiEnvelope<BackendPostulacion[]>>(
        `${this.apiUrl}/egresado/postulaciones`
      )
      .pipe(
        map((env) => {
          console.log('[Dashboard] Postulaciones response:', env);
          const items = env.data ?? [];
          return items.map((p) => ({
            id: p.id_postulacion,
            vacante_id: p.vacante_id,
            titulo_vacante: p.vacante_titulo,
            empresa: p.empresa,
            estatus: p.estatus,
            match_porcentaje: p.match,
            fecha_postulacion: p.fecha,
          }));
        }),
        catchError((err) => {
          console.error('[Dashboard] Postulaciones error:', err);
          return of([]);
        })
      );
  }

  // ─── Dashboard completo (llamada paralela) ────────────────────────

  getDashboardData(): Observable<DashboardData> {
    return forkJoin({
      stats: this.getStats(),
      radar: this.getRadar(),
      evaluacionesPendientes: this.getEvaluacionesPendientes(),
      vacantesRecomendadas: this.getVacantesRecomendadas(3),
      postulaciones: this.getPostulaciones(),
    });
  }
}

// ─── Helpers ────────────────────────────────────────────────────────

function mapVacante(v: BackendVacante): VacanteRecomendada {
  return {
    id: v.id,
    titulo: v.titulo,
    empresa: v.empresa,
    ubicacion: v.ubicacion,
    match_porcentaje: v.match ?? 0,
    tags: [v.modalidad],
    es_externa: v.es_externa,
  };
}
