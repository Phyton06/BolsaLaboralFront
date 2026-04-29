export interface RegisterRequest {
  nombre: string;
  email: string;
  password: string;
  confirm_password: string;
  tipo: 'candidato' | 'empresa';
  // Campos adicionales seg&uacute;n tipo
  telefono?: string;
  nombre_empresa?: string;
  giro?: string;
}
