import { Injectable } from '@angular/core';

export interface JobOffer {
  id: number;
  match: number;
  title: string;
  company: string;
  loc: string;
  tags: string[];
  sal: string;
  src: 'Convenio UT' | 'API OCC';
  isNew?: boolean;
}

@Injectable({ providedIn: 'root' })
export class OfertasService {
  getOfertas(): JobOffer[] {
    return [
      { id:1, match:92, title:'Desarrollador Full-Stack Jr.', company:'Soluciones Pacífico', loc:'Tepic, Nay.', tags:['Angular','Node.js','PostgreSQL'], sal:'$18,000 - 22,000', src:'Convenio UT', isNew:true },
      { id:2, match:86, title:'Analista de Datos', company:'Banorte Digital', loc:'Remoto · Nacional', tags:['SQL','Power BI','Python'], sal:'$16,500 - 20,000', src:'API OCC', isNew:false },
      { id:3, match:81, title:'Ing. de Mantenimiento', company:'Aeropuertos GAP', loc:'Tepic, Nay.', tags:['Eléctrico','PLC','Hidráulica'], sal:'$15,000 - 18,000', src:'Convenio UT', isNew:false },
      { id:4, match:78, title:'QA Automation Trainee', company:'Tequila Software', loc:'Compostela, Nay.', tags:['Cypress','Jest','CI/CD'], sal:'$14,000 - 16,000', src:'Convenio UT', isNew:true },
      { id:5, match:74, title:'Desarrollador Frontend', company:'Vidanta Tech', loc:'Bahía de Banderas', tags:['React','Tailwind','TypeScript'], sal:'$17,000 - 21,000', src:'API OCC', isNew:false },
      { id:6, match:69, title:'Coord. Tecnologías Hotel', company:'Hard Rock Riviera', loc:'Bahía de Banderas', tags:['Redes','Soporte','ERP'], sal:'$19,000 - 24,000', src:'Convenio UT', isNew:false },
    ];
  }
}
