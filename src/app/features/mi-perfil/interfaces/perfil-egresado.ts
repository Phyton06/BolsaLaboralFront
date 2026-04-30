import { TrayectoriaEntry } from './trayectoria-entry';
import { HabilidadesEgresado } from './habilidades-egresado';

/**
 * Datos de contacto del egresado (almacenados como JSONB en la DB).
 */
export interface ContactoEgresado {
  telefono: string | null;
  correo_personal: string | null;
  linkedin: string | null;
}

/**
 * Estadísticas del dashboard del egresado.
 */
export interface StatsEgresado {
  postulaciones_activas: number;
  match_promedio: number;
  pruebas_completadas: number;
  vistas_perfil: number;
}

/**
 * Resultado de la optimización de biografía con IA.
 */
export interface BiografiaOptimizada {
  biografia_optimizada: string;
  longitud_original: number;
  longitud_optimizada: number;
}

/**
 * Recomendaciones IA para mejorar el perfil.
 */
export interface RecomendacionesIA {
  puntos_fuertes: string[];
  puntos_debiles: string[];
  cursos_sugeridos: {
    titulo: string;
    descripcion: string;
    prioridad: 'alta' | 'media' | 'info';
  }[];
  resumen: {
    puntaje_tecnico: number;
    puntaje_cognitivo: number;
    total_habilidades: number;
    total_postulaciones: number;
    evaluaciones_completadas: number;
  };
}

/**
 * Perfil completo del egresado — respuesta de GET /egresado/perfil.
 */
export interface PerfilEgresado {
  id: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  carrera: string | null;
  division: string | null;
  periodo_egreso: string;
  foto_url: string | null;
  contacto: ContactoEgresado | null;
  biografia_ia: string | null;
  trayectoria: TrayectoriaEntry[] | null;
  habilidades: HabilidadesEgresado | null;
  vistas_perfil: number;
}
