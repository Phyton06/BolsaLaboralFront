import { Injectable } from '@angular/core';

export interface PerfilEgresado {
  id: number;
  name: string;
  initials: string;
  completitud: number;
  stats: {
    postulacionesActivas: number;
    coincidenciaPromedio: number;
    pruebasCompletadas: string;
    vistasPerfil: number;
  };
}

@Injectable({ providedIn: 'root' })
export class PerfilService {
  getPerfil(): PerfilEgresado {
    return {
      id:1,
      name:'Mariana Cárdenas',
      initials:'MC',
      completitud:87,
      stats: { postulacionesActivas:7, coincidenciaPromedio:74, pruebasCompletadas:'3/4', vistasPerfil:42 }
    };
  }
}
