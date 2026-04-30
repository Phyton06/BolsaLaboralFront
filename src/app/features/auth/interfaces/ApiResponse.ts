/**
 * Respuesta genérica de operaciones simples (logout, cambio de password, etc.)
 * El backend devuelve: { success: true, message: string, data: {} }
 * Esta interfaz representa el data interno cuando está vacío.
 */
export interface ApiResponse {
  success: boolean;
  message: string;
}
