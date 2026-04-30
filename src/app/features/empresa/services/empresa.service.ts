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
    const hardcodedStats: EmpresaStats = {
      vacantes_activas: 4,
      total_postulantes: 42,
      entrevistas_pendientes: 5,
      postulaciones_por_estatus: { pendiente: 12, revisada: 20, aceptada: 6, rechazada: 4 },
      promedio_match: 85,
    };
    return of(hardcodedStats).pipe(tap(resp => console.log('[EMPRESA] Stats (Hardcoded):', resp)));
  }

  // ─── GET /empresa/mis-vacantes ───────────────────────────
  getMisVacantes(): Observable<EmpresaVacante[]> {
    const hardcodedVacantes: EmpresaVacante[] = [
      { id: 1, titulo: 'Desarrollador Frontend Angular', descripcion: 'Buscamos un desarrollador Angular Sr.', ubicacion: 'Remoto', postulantes_count: 15, mejor_match: 95, fecha_pub: '2026-04-01' },
      { id: 2, titulo: 'Analista de Datos', descripcion: 'Analista SQL y PowerBI.', ubicacion: 'CDMX', postulantes_count: 20, mejor_match: 88, fecha_pub: '2026-04-10' },
      { id: 3, titulo: 'Backend Node.js', descripcion: 'Desarrollador Node.', ubicacion: 'Guadalajara', postulantes_count: 7, mejor_match: 75, fecha_pub: '2026-04-15' },
      { id: 4, titulo: 'Diseñador UX/UI', descripcion: 'Diseñador en Figma.', ubicacion: 'Remoto', postulantes_count: 0, mejor_match: 0, fecha_pub: '2026-04-20' },
    ];
    return of(hardcodedVacantes).pipe(tap(resp => console.log('[EMPRESA] Vacantes (Hardcoded):', resp)));
  }

  // ─── GET /empresa/vacantes/:id/postulantes ───────────────
  getPostulantes(vacanteId: number): Observable<Postulante[]> {
    const hardcodedPostulantes: Postulante[] = [
      { id_postulacion: 101, egresado_id: 201, alumno_nombre: 'Juan Pérez', match: 95, estatus: 'pendiente', carrera: 'Ing. Sistemas', fecha: '2026-04-05' },
      { id_postulacion: 102, egresado_id: 202, alumno_nombre: 'Ana Gómez', match: 88, estatus: 'revisada', carrera: 'Ing. Informática', fecha: '2026-04-06' },
      { id_postulacion: 103, egresado_id: 203, alumno_nombre: 'Carlos López', match: 72, estatus: 'rechazada', carrera: 'Lic. Administración', fecha: '2026-04-07' },
      { id_postulacion: 104, egresado_id: 204, alumno_nombre: 'María Fernández', match: 90, estatus: 'aceptada', carrera: 'Ing. Sistemas', fecha: '2026-04-08' },
    ];
    return of(hardcodedPostulantes).pipe(tap(resp => console.log('[EMPRESA] Postulantes (Hardcoded):', resp)));
  }

  // ─── PATCH /postulaciones/:id/estatus ────────────────────
  cambiarEstatus(postulacionId: number, nuevoEstatus: string): Observable<any> {
    console.log(`[EMPRESA] Cambiando estatus de postulacion ${postulacionId} a ${nuevoEstatus} (Hardcoded)`);
    return of({ success: true, message: 'Estatus actualizado correctamente' });
  }
}
