import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StatComponent } from '../../shared/components/stat/stat.component';
import { RadarChartComponent } from '../../shared/components/charts/radar-chart.component';
import { ChipComponent } from '../../shared/components/chip/chip.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [StatComponent, RadarChartComponent, ChipComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  readonly role = 'egresado';
  readonly stats = [
    { label:'Postulaciones activas', value:'7', delta:'+2 esta semana' },
    { label:'Coincidencia promedio', value:'74', suffix:'%', delta:'+6%' },
    { label:'Pruebas completadas', value:'3', suffix:'/ 4' },
    { label:'Vistas a tu perfil', value:'42', delta:'+18 vs. mes ant.' },
  ];

  readonly radarAxes = ['Psicométr.', 'Cognitivo', 'Técnico', 'Proyectivo', 'Trabajo eq.', 'Liderazgo'];

  readonly radarDatasets = [
    { values:[0.82, 0.74, 0.91, 0.66, 0.78, 0.58], color:'var(--brand-700)' },
    { values:[0.7, 0.7, 0.85, 0.7, 0.75, 0.7], color:'var(--gold-600)', fillOpacity:0 },
  ];

  readonly pendingTests = [
    { cat:'Cognitiva', title:'Razonamiento lógico-verbal', mins:35, due:'Vence en 2 días', warn:false },
    { cat:'Proyectiva', title:'Test de Wartegg adaptado', mins:20, due:'Vence en 5 días', warn:false },
    { cat:'Técnica', title:'Desarrollo Backend - Node.js', mins:60, due:'Asignado por Soluciones Pacífico', warn:true },
  ];

  readonly recommendedJobs = [
    { match:92, title:'Desarrollador Full-Stack Jr.', company:'Soluciones Pacífico', loc:'Tepic, Nay.', sal:'$18,000 - 22,000' },
    { match:86, title:'Analista de Datos', company:'Banorte Digital', loc:'Remoto · Nacional', sal:'$16,500 - 20,000' },
    { match:78, title:'QA Automation Trainee', company:'Tequila Software', loc:'Compostela, Nay.', sal:'$14,000 - 16,000' },
  ];

  readonly postulacionesTable: { empresa: string; puesto: string; etapa: string; etapaClass: 'ok' | 'warn' | 'err' | 'info' | 'brand' | 'gold' | 'outline' | ''; match: number }[] = [
    { empresa:'Pacífico Industrial', puesto:'Ing. Procesos', etapa:'Entrevista', etapaClass:'ok', match:88 },
    { empresa:'Banorte Digital', puesto:'Analista Datos', etapa:'En revisión', etapaClass:'info', match:86 },
    { empresa:'Grupo Vidanta', puesto:'Ing. Sistemas', etapa:'Pruebas pend.', etapaClass:'warn', match:71 },
    { empresa:'Aeropuertos GAP', puesto:'Mantenimiento', etapa:'Postulado', etapaClass:'outline', match:68 },
  ];

  readonly user = { name:'Mariana Cárdenas', initials:'MC' };

  getCompanyInitials(company: string): string {
    return company.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
  }
}
