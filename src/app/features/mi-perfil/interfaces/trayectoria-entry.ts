/**
 * Tipos posibles de trayectoria laboral.
 */
export type TipoTrayectoria = 'practicas' | 'trabajo' | 'voluntariado' | 'otro';

/**
 * Entrada de experiencia laboral/trayectoria.
 */
export interface TrayectoriaEntry {
  tipo: TipoTrayectoria;
  empresa: string;
  descripcion: string;
  fecha: string; // formato YYYY-MM
}
