import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, of, forkJoin } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface EmpresaStats {
  vacantes_activas: number;
  total_postulantes: number;
  entrevistas_pendientes: number;
  postulaciones_por_estatus: {
    pendiente: number;
    revisada: number;
    aceptada: number;
    rechazada: number;
  };
  promedio_match: number;
}

export interface EmpresaVacante {
  id: number;
  titulo: string;
  descripcion: string;
  ubicacion: string;
  postulantes_count: number;
  mejor_match: number;
  fecha_pub: string;
}

export interface Postulante {
  id_postulacion: number;
  egresado_id: number;
  alumno_nombre: string;
  match: number;
  estatus: 'pendiente' | 'revisada' | 'aceptada' | 'rechazada';
  carrera: string;
  fecha: string;
}

@Injectable({ providedIn: 'root' })
export class EmpresaService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private headers() {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // ─── GET /empresa/dashboard/stats ────────────────────────
  getDashboardStats(): Observable<EmpresaStats> {
    return this.http.get<any>(`${this.apiUrl}/empresa/dashboard/stats`, { headers: this.headers() }).pipe(
      tap(resp => console.log('[EMPRESA] Stats:', resp.data)),
      catchError(err => {
        console.error('[EMPRESA] Error stats:', err);
        return of({
          vacantes_activas: 0,
          total_postulantes: 0,
          entrevistas_pendientes: 0,
          postulaciones_por_estatus: { pendiente: 0, revisada: 0, aceptada: 0, rechazada: 0 },
          promedio_match: 0,
        });
      })
    );
  }

  // ─── GET /empresa/mis-vacantes ───────────────────────────
  getMisVacantes(): Observable<EmpresaVacante[]> {
    return this.http.get<any>(`${this.apiUrl}/empresa/mis-vacantes`, { headers: this.headers() }).pipe(
      tap(resp => console.log('[EMPRESA] Vacantes:', resp.data)),
      catchError(err => {
        console.error('[EMPRESA] Error vacantes:', err);
        return of([]);
      })
    );
  }

  // ─── GET /empresa/vacantes/:id/postulantes ───────────────
  getPostulantes(vacanteId: number): Observable<Postulante[]> {
    return this.http.get<any>(`${this.apiUrl}/empresa/vacantes/${vacanteId}/postulantes`, { headers: this.headers() }).pipe(
      tap(resp => console.log('[EMPRESA] Postulantes:', resp.data)),
      catchError(err => {
        console.error('[EMPRESA] Error postulantes:', err);
        return of([]);
      })
    );
  }

  // ─── PATCH /postulaciones/:id/estatus ────────────────────
  cambiarEstatus(postulacionId: number, nuevoEstatus: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/postulaciones/${postulacionId}/estatus`, 
      { nuevo_estatus: nuevoEstatus }, 
      { headers: this.headers() }
    );
  }
}
