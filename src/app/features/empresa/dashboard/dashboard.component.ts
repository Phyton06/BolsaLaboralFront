import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from '../../../shared/components/stat/stat.component';
import { BarChartComponent } from '../../../shared/components/charts/bar-chart.component';
import { FunnelComponent } from '../../../shared/components/funnel/funnel.component';
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-empresa-dashboard',
  standalone: true,
  imports: [CommonModule, StatComponent, BarChartComponent, FunnelComponent, ChipComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-head">
      <div>
        <div class="crumbs">SOLUCIONES PACÍFICO · PANEL</div>
        <h1>Panel de reclutamiento</h1>
        <div class="desc">Visión general de tus procesos de selección activos</div>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn ghost"><app-icon name="download" [size]="13" /> Exportar</button>
        <button class="btn primary"><app-icon name="plus" [size]="13" /> Nueva vacante</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:14px;margin-bottom:14px;">
      <app-stat label="Vacantes activas" value="8" delta="+2 este mes" />
      <app-stat label="Postulaciones recibidas" value="142" delta="+38 esta semana" />
      <app-stat label="Candidatos idóneos" value="14" suffix="≥80%" />
      <app-stat label="Tiempo promedio cobertura" value="22" suffix="días" delta="3 días menos" />
    </div>

    <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:14px;margin-bottom:14px;">
      <div class="card">
        <div class="card-h">
          <h3>Postulaciones por vacante (últimos 30 días)</h3>
          <app-chip color="outline">Activas</app-chip>
        </div>
        <app-bar-chart
          [height]="170"
          [data]="barData"
        ></app-bar-chart>
      </div>

      <div class="card">
        <div class="card-h">
          <h3>Embudo de selección</h3>
          <div class="sub">Q1 2026</div>
        </div>
        <app-funnel [stages]="funnelStages"></app-funnel>
      </div>
    </div>

    <div class="card">
      <div class="card-h">
        <h3>Tus vacantes</h3>
        <button class="btn ghost sm">Ver todas →</button>
      </div>
      <table class="t">
        <thead>
          <tr>
            <th>Puesto</th>
            <th>Publicada</th>
            <th>Postulantes</th>
            <th>Idóneos</th>
            <th>Tiempo activo</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (r of vacantesTable; track r[0]) {
            <tr>
              <td><b>{{ r[0] }}</b></td>
              <td style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--ink-500);">{{ r[1] }}</td>
              <td>{{ r[2] }}</td>
              <td><app-chip color="ok" style="font-size:10.5px;">{{ r[3] }}</app-chip></td>
              <td>{{ r[4] }}</td>
              <td><span class="chip {{ r[6] }}">{{ r[5] }}</span></td>
              <td><app-icon name="chevR" [size]="14" color="var(--ink-400)" /></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class EmpresaDashboardComponent {
  readonly user = { name: 'Roberto Salazar', initials: 'RS' };

  readonly barData = [
    { l: 'Full-Stack Jr.', v: 42 },
    { l: 'QA Trainee', v: 28 },
    { l: 'DevOps', v: 18 },
    { l: 'UX/UI', v: 24 },
    { l: 'Data Analyst', v: 19 },
    { l: 'Soporte', v: 11 },
  ];

  readonly funnelStages = [
    { l: 'Postulados', v: 142, p: 100 },
    { l: 'Pasaron filtro automático', v: 98, p: 69 },
    { l: 'Pruebas completadas', v: 64, p: 45 },
    { l: 'Match ≥ 80%', v: 23, p: 16 },
    { l: 'Entrevistados', v: 11, p: 8 },
    { l: 'Contratados', v: 4, p: 3 },
  ];

  readonly vacantesTable = [
    ['Desarrollador Full-Stack Jr.', '2026-04-12', 42, 8, '17 días', 'Activa', 'ok'],
    ['QA Automation Trainee', '2026-04-08', 28, 4, '21 días', 'Activa', 'ok'],
    ['DevOps Engineer', '2026-04-01', 18, 2, '28 días', 'Activa', 'ok'],
    ['UX/UI Designer', '2026-03-25', 24, 3, '35 días', 'En revisión', 'warn'],
    ['Data Analyst', '2026-04-15', 19, 5, '14 días', 'Activa', 'ok'],
  ];
}
