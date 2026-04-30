/**
 * Item del catálogo de evaluaciones — respuesta de GET /evaluaciones/catalogo
 */
export interface EvaluacionCatalogo {
  id: number;
  nombre: string;
  tipo: 'tecnica' | 'psico' | 'cogni' | 'proy';
  minutos: number;
  cantidad_preguntas: number;
  completada: boolean;
  en_progreso: boolean;
  ultimo_puntaje: number | null;
  bloqueada: boolean;
  mensaje_bloqueo: string | null;
  disponible_en: string | null;
}

/**
 * Pregunta individual del examen — respuesta de POST /evaluaciones/iniciar
 */
export interface PreguntaExamen {
  id: number;
  pregunta: string;
  opciones: Record<string, string>;
}

/**
 * Examen activo — respuesta de POST /evaluaciones/iniciar
 */
export interface ExamenActivo {
  evaluacion_id: number;
  tipo_prueba: string;
  duracion_minutos: number;
  expira_en: string;
  preguntas: PreguntaExamen[];
}

/**
 * Resultado del examen — respuesta de POST /evaluaciones/finalizar
 */
export interface ResultadoExamen {
  puntaje_global: number | null;
  detalle_resultados: {
    correctas?: number;
    incorrectas?: number;
    categorias?: Record<string, number>;
    respuestas?: number;
    completada: boolean;
  };
  match_actualizado: boolean;
}

/**
 * Datos del radar — respuesta de GET /evaluaciones/radar
 */
export interface RadarData {
  labels: string[];
  alumno: number[];
  promedio_carrera: number[];
}

/**
 * Respuesta individual — body de POST /evaluaciones/respuesta
 */
export interface RespuestaEnvio {
  evaluacion_id: number;
  pregunta_id: number;
  opcion: string; // 'a' | 'b' | 'c' | 'd' | 'e'
}

/**
 * Metadata de prueba para UI del catálogo
 */
export interface PruebaMeta {
  icono: string;
  color: string;
  descripcion: string;
  regla: string;
  etiqueta: string;
}

export const PRUEBA_META: Record<string, PruebaMeta> = {
  psico: {
    icono: 'users',
    color: 'var(--brand-700)',
    descripcion:
      'Rasgos de personalidad, comportamiento bajo presión y trabajo en equipo.',
    regla: 'Solo se realiza una vez',
    etiqueta: 'Psicométrica',
  },
  cogni: {
    icono: 'radar',
    color: 'var(--viz-4)',
    descripcion:
      'Potencial de aprendizaje, agilidad mental y razonamiento lógico-verbal.',
    regla: 'Solo se realiza una vez',
    etiqueta: 'Cognitiva',
  },
  tecnica: {
    icono: 'target',
    color: 'var(--ok-600)',
    descripcion:
      'Conocimientos específicos del área, generados según tendencias del mercado laboral.',
    regla: 'Se puede repetir cada 6 meses',
    etiqueta: 'Técnica',
  },
  proy: {
    icono: 'chart',
    color: 'var(--gold-600)',
    descripcion:
      'Identificación de rasgos profundos y estabilidad emocional.',
    regla: 'Solo se realiza una vez',
    etiqueta: 'Proyectiva',
  },
};
