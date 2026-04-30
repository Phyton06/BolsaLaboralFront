export interface User {
  id: number;
  nombre: string;
  rol: 'egresado' | 'empresa' | 'admin';
  primer_ingreso: boolean;
}
