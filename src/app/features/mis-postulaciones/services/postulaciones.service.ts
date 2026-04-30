import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Postulacion {
  id_postulacion: number;
  vacante_id: number;
  vacante_titulo: string;
  empresa: string;
  estatus: 'pendiente' | 'revisada' | 'aceptada' | 'rechazada';
  match: number;
  fecha: string;
}

export const statusConfig: Record<Postulacion['estatus'], { label: string; chipClass: string }> = {
  pendiente:   { label: 'Postulado',    chipClass: 'outline' },
  revisada:    { label: 'En revisión',  chipClass: 'info' },
  aceptada:    { label: 'Aceptada',     chipClass: 'ok' },
  rechazada:   { label: 'Rechazada',    chipClass: 'err' },
};

@Injectable({ providedIn: 'root' })
export class PostulacionesService {
  private apiUrl = environment.apiUrl;

  postulaciones: Postulacion[] = [];
  cargando = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  cargarPostulaciones(): Observable<Postulacion[]> {
    this.cargando = true;
    this.error = null;
    console.log('[POSTULACIONES] Cargando desde:', `${this.apiUrl}/egresado/postulaciones`);

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`${this.apiUrl}/egresado/postulaciones`, { headers }).pipe(
      tap(resp => {
        console.log('[POSTULACIONES] Response completo:', resp);
        console.log('[POSTULACIONES] Data:', resp.data);
        this.postulaciones = resp.data || [];
        this.cargando = false;
      }),
      catchError(err => {
        console.error('[POSTULACIONES] ERROR:', err);
        console.error('[POSTULACIONES] Status:', err.status);
        console.error('[POSTULACIONES] Error body:', err.error);
        this.error = err.status === 401 ? 'Debes iniciar sesión' : 'Error al cargar postulaciones';
        this.cargando = false;
        this.postulaciones = [];
        return of([]);
      })
    );
  }

  cancelarPostulacion(vacanteId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/vacantes/${vacanteId}/cancelar-postulacion`, { headers });
  }
}
