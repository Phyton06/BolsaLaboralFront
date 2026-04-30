import { Injectable } from '@angular/core';

export interface Postulacion {
  id: number;
  empresa: string;
  puesto: string;
  etapa: 'Entrevista' | 'En revisión' | 'Pruebas pend.' | 'Postulado';
  match: number;
}

@Injectable({ providedIn: 'root' })
export class PostulacionesService {
  getPostulaciones(): Postulacion[] {
    return [
      { id:1, empresa:'Pacífico Industrial', puesto:'Ing. Procesos', etapa:'Entrevista', match:88 },
      { id:2, empresa:'Banorte Digital', puesto:'Analista Datos', etapa:'En revisión', match:86 },
      { id:3, empresa:'Grupo Vidanta', puesto:'Ing. Sistemas', etapa:'Pruebas pend.', match:71 },
      { id:4, empresa:'Aeropuertos GAP', puesto:'Mantenimiento', etapa:'Postulado', match:68 },
    ];
  }
}
