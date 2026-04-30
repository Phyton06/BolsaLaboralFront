import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiEnvelope } from '../../../features/auth/interfaces/ApiEnvelope';
import {
  EvaluacionCatalogo,
  ExamenActivo,
  ResultadoExamen,
  RadarData,
  RespuestaEnvio,
} from '../interfaces/evaluacion';

/**
 * Capa HTTP para el módulo de evaluaciones.
 */
@Injectable({ providedIn: 'root' })
export class EvaluacionApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  // ─── Catálogo ─────────────────────────────────────────────────────

  getCatalogo(): Observable<EvaluacionCatalogo[]> {
    return this.http
      .get<ApiEnvelope<EvaluacionCatalogo[]>>(
        `${this.apiUrl}/evaluaciones/catalogo`
      )
      .pipe(
        map((env) => env.data ?? []),
        catchError((err) => {
          console.error('[EvaluacionApi] Error fetching catalogo:', err);
          return of([]);
        })
      );
  }

  // ─── Iniciar examen ───────────────────────────────────────────────

  iniciar(tipoPrueba: string): Observable<ExamenActivo | null> {
    return this.http
      .post<ApiEnvelope<ExamenActivo>>(
        `${this.apiUrl}/evaluaciones/iniciar`,
        { tipo_prueba: tipoPrueba }
      )
      .pipe(
        map((env) => env.data),
        catchError((err) => {
          console.error('[EvaluacionApi] Error iniciando examen:', err);
          return of(null);
        })
      );
  }

  // ─── Enviar respuesta ─────────────────────────────────────────────

  enviarRespuesta(respuesta: RespuestaEnvio): Observable<boolean> {
    return this.http
      .post<ApiEnvelope<{ status: string }>>(
        `${this.apiUrl}/evaluaciones/respuesta`,
        respuesta
      )
      .pipe(
        map((env) => env.success),
        catchError(() => of(false))
      );
  }

  // ─── Finalizar examen ─────────────────────────────────────────────

  finalizar(evaluacionId: number): Observable<ResultadoExamen | null> {
    return this.http
      .post<ApiEnvelope<ResultadoExamen>>(
        `${this.apiUrl}/evaluaciones/finalizar`,
        { evaluacion_id: evaluacionId }
      )
      .pipe(
        map((env) => env.data),
        catchError((err) => {
          console.error('[EvaluacionApi] Error finalizando examen:', err);
          return of(null);
        })
      );
  }

  // ─── Radar ────────────────────────────────────────────────────────

  getRadar(): Observable<RadarData | null> {
    return this.http
      .get<ApiEnvelope<RadarData>>(`${this.apiUrl}/evaluaciones/radar`)
      .pipe(
        map((env) => env.data),
        catchError(() => of(null))
      );
  }
}
