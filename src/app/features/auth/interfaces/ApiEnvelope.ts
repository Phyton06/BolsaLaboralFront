/**
 * Envelope genérico que devuelve el backend para respuestas exitosas.
 * Todos los endpoints del back usan este formato:
 *   { success: true, message: string, data: T }
 */
export interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * Formato de error del backend:
 *   { success: false, error: string, ticket?: string }
 */
export interface ApiError {
  success: false;
  error: string;
  ticket?: string;
}
