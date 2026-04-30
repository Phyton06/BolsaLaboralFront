import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiEnvelope } from '../../../features/auth/interfaces/ApiEnvelope';
import {
  PerfilEgresado,
  ContactoEgresado,
  StatsEgresado,
  BiografiaOptimizada,
  RecomendacionesIA,
} from '../interfaces/perfil-egresado';
import { TrayectoriaEntry } from '../interfaces/trayectoria-entry';
import { HabilidadesEgresado } from '../interfaces/habilidades-egresado';

/**
 * Capa HTTP para todas las llamadas API relacionadas al perfil del egresado.
 * Sigue el patrón de VacantesApiService: desenvelopa ApiEnvelope<T> internamente.
 */
@Injectable({ providedIn: 'root' })
export class EgresadoApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  // ─── Perfil ───────────────────────────────────────────────────────

  getPerfil(): Observable<PerfilEgresado | null> {
    return this.http
      .get<ApiEnvelope<PerfilEgresado>>(`${this.apiUrl}/egresado/perfil`)
      .pipe(
        map((env) => env.data),
        catchError((err) => {
          console.error('[EgresadoApi] Error fetching perfil:', err);
          return of(null);
        })
      );
  }

  // ─── Stats ────────────────────────────────────────────────────────

  getStats(): Observable<StatsEgresado | null> {
    return this.http
      .get<ApiEnvelope<StatsEgresado>>(`${this.apiUrl}/egresado/stats`)
      .pipe(
        map((env) => env.data),
        catchError((err) => {
          console.error('[EgresadoApi] Error fetching stats:', err);
          return of(null);
        })
      );
  }

  // ─── Contacto ─────────────────────────────────────────────────────

  updateContacto(contacto: ContactoEgresado): Observable<ContactoEgresado> {
    return this.http
      .put<ApiEnvelope<ContactoEgresado>>(
        `${this.apiUrl}/egresado/perfil/contacto`,
        contacto
      )
      .pipe(map((env) => env.data));
  }

  // ─── Foto ─────────────────────────────────────────────────────────

  uploadFoto(file: File): Observable<{ foto_url: string }> {
    const formData = new FormData();
    formData.append('foto', file, file.name);
    return this.http
      .post<ApiEnvelope<{ foto_url: string }>>(
        `${this.apiUrl}/egresado/foto`,
        formData
      )
      .pipe(map((env) => env.data));
  }

  // ─── Biografía ────────────────────────────────────────────────────

  updateBiografia(biografia: string): Observable<void> {
    return this.http
      .put<ApiEnvelope<void>>(`${this.apiUrl}/egresado/perfil/biografia`, {
        biografia,
      })
      .pipe(map(() => undefined));
  }

  optimizarBiografia(textoActual: string): Observable<BiografiaOptimizada> {
    return this.http
      .post<ApiEnvelope<BiografiaOptimizada>>(
        `${this.apiUrl}/ia/cv/optimizar-biografia`,
        { texto_actual: textoActual }
      )
      .pipe(map((env) => env.data));
  }

  // ─── Trayectoria ──────────────────────────────────────────────────

  updateTrayectoria(trayectoria: TrayectoriaEntry[]): Observable<void> {
    return this.http
      .put<ApiEnvelope<void>>(`${this.apiUrl}/egresado/perfil/trayectoria`, {
        trayectoria,
      })
      .pipe(map(() => undefined));
  }

  // ─── Habilidades ──────────────────────────────────────────────────

  updateHabilidades(habilidades: HabilidadesEgresado): Observable<void> {
    return this.http
      .put<ApiEnvelope<void>>(
        `${this.apiUrl}/egresado/perfil/habilidades`,
        habilidades
      )
      .pipe(map(() => undefined));
  }

  // ─── Recomendaciones IA ───────────────────────────────────────────

  getRecomendaciones(): Observable<RecomendacionesIA | null> {
    return this.http
      .get<ApiEnvelope<RecomendacionesIA>>(`${this.apiUrl}/ia/cv/recomendaciones`)
      .pipe(
        map((env) => env.data),
        catchError((err) => {
          console.error('[EgresadoApi] Error fetching recomendaciones:', err);
          return of(null);
        })
      );
  }
}
