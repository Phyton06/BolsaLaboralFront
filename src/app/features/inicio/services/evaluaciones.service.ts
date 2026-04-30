import { Injectable } from '@angular/core';

export interface Evaluacion {
  id: number;
  cat: 'Psicométrica' | 'Cognitiva' | 'Técnica' | 'Proyectiva';
  title: string;
  mins: number;
  due: string;
  warn?: boolean;
  status: 'pendiente' | 'en progreso' | 'completada';
}

@Injectable({ providedIn: 'root' })
export class EvaluacionesService {
  getEvaluaciones(): Evaluacion[] {
    return [
      { id:1, cat:'Cognitiva', title:'Razonamiento lógico-verbal', mins:35, due:'Vence en 2 días', warn:false, status:'pendiente' },
      { id:2, cat:'Proyectiva', title:'Test de Wartegg adaptado', mins:20, due:'Vence en 5 días', warn:false, status:'pendiente' },
      { id:3, cat:'Técnica', title:'Desarrollo Backend - Node.js', mins:60, due:'Asignado por Soluciones Pacífico', warn:true, status:'en progreso' },
      { id:4, cat:'Psicométrica', title:'Inventario de personalidad', mins:30, due:'Completado', warn:false, status:'completada' },
    ];
  }
}
