import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from '../../../shared/components/stat/stat.component';
import { BarChartComponent } from '../../../shared/components/charts/bar-chart.component';
import { LineChartComponent } from '../../../shared/components/charts/line-chart.component';
import { HBarListComponent } from '../../../shared/components/charts/hbar-list.component';
import { MapPlaceholderComponent } from '../../../shared/components/charts/map-placeholder.component';
import { ConvStatComponent } from '../../../shared/components/conv-stat.component';
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, StatComponent, BarChartComponent, LineChartComponent, HBarListComponent, MapPlaceholderComponent, ConvStatComponent, ChipComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-head">
      <div>
        <div class="crumbs">DIRECCIÓN ACADÉMICA · BOLSA DE TRABAJO</div>
        <h1>Panel institucional</h1>
        <div class="desc">Indicadores de inserción laboral y gestión de convenios — Cuatrimestre Mayo-Agosto 2026</div>
      </div>
      <div style="display:flex;gap:8px;">
        <select class="btn ghost sm"><option>Periodo: 2026 acumulado</option></select>
        <button class="btn ghost"><app-icon name="download" [size]="13" /> PDF</button>
        <button class="btn primary"><app-icon name="download" [size]="13" /> Excel</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:14px;">
      <app-stat label="Egresados registrados" value="1,432" delta="+186 generación 2025" />
      <app-stat label="Tasa de inserción" value="68" suffix="%" delta="+4.2 pp" />
      <app-stat label="Empresas con convenio" value="87" delta="+12 nuevas" />
      <app-stat label="Vacantes activas (red)" value="284" delta="63 vía API nacional" />
    </div>

    <!-- Inserción laboral por carrera -->
    <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:14px;margin-bottom:14px;">
      <div class="card">
        <div class="card-h">
          <div>
            <h3>Inserción laboral por carrera</h3>
            <div class="sub" style="margin-top:2px;">% de egresados contratados / total registrados</div>
          </div>
          <app-chip color="outline">N=1,432</app-chip>
        </div>
        <app-bar-chart
          [height]="170"
          [format]="formatPct"
          [max]="100"
          [data]="barData"
        ></app-bar-chart>
      </div>

      <div class="card">
        <div class="card-h">
          <h3>Tendencia anual de inserción</h3>
          <div class="sub">2022 – 2026</div>
        </div>
        <app-line-chart
          [height]="170"
          [data]="lineData"
        ></app-line-chart>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px;">
          <div style="padding:10px 12px;background:var(--ok-100);border-radius:6px;">
            <div style="font-size:10px;color:var(--ok-600);font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">↑ Mayor crecimiento</div>
            <div style="font-size:13px;font-weight:600;margin-top:2px;">TI · Desarrollo</div>
            <div style="font-size:11px;color:var(--ink-600);">+12 pp en 4 años</div>
          </div>
          <div style="padding:10px 12px;background:var(--warn-100);border-radius:6px;">
            <div style="font-size:10px;color:var(--warn-600);font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">◇ Atención</div>
            <div style="font-size:13px;font-weight:600;margin-top:2px;">Administración</div>
            <div style="font-size:11px;color:var(--ink-600);">Estable bajo el promedio</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mapa + ranking -->
    <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:14px;margin-bottom:14px;">
      <div class="card">
        <div class="card-h">
          <h3>Mapa de calor de convenios</h3>
          <div style="display:flex;gap:6px;">
            <app-chip color="brand">Regional · 47</app-chip>
            <app-chip color="outline">Nacional · 40</app-chip>
          </div>
        </div>
        <app-map-placeholder [pins]="mapPins"></app-map-placeholder>
        <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:11px;color:var(--ink-500);">
          <span><b style="color:var(--brand-700);">◆ Nayarit:</b> 47 convenios · 78% del talento contratado</span>
          <span>Cobertura nacional: 14 estados</span>
        </div>
      </div>

      <div class="card">
        <div class="card-h">
          <h3>Ranking de competencias demandadas</h3>
          <app-chip color="outline">Top 8 de 32</app-chip>
        </div>
        <app-hbar-list
          [data]="hbarData"
        ></app-hbar-list>
      </div>
    </div>

    <!-- Convenios + estatus -->
    <div class="card">
      <div class="card-h">
        <h3>Estatus de convenios</h3>
        <button class="btn sm ghost">Ver todos →</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:14px;">
        <app-conv-stat l="Activos" [v]="87" c="var(--ok-600)" />
        <app-conv-stat l="Por vencer (90 días)" [v]="6" c="var(--warn-600)" />
        <app-conv-stat l="Pendiente formalización" [v]="4" c="var(--info-600)" sub="vía API nacional" />
        <app-conv-stat l="Inactivos" [v]="11" c="var(--ink-400)" />
      </div>
      <table class="t">
        <thead>
          <tr><th>Empresa</th><th>Sector</th><th>Convenio</th><th>Inicio</th><th>Vence</th><th>Egresados contratados</th><th>Estatus</th></tr>
        </thead>
        <tbody>
          @for (r of conveniosTable; track r[0]) {
            <tr>
              <td><b>{{ r[0] }}</b></td>
              <td style="font-size:11px;">{{ r[1] }}</td>
              <td class="mono" style="font-size:11px;color:var(--ink-500);">{{ r[2] }}</td>
              <td class="mono" style="font-size:11px;">{{ r[3] }}</td>
              <td class="mono" style="font-size:11px;">{{ r[4] }}</td>
              <td>{{ r[5] }}</td>
              <td><span class="chip {{ r[7] }}">{{ r[6] }}</span></td>
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
export class AdminDashboardComponent {
  readonly user = { name: 'Dra. Elena Vázquez', initials: 'EV' };

  readonly barData = [
    { l: 'TI · Desarrollo', v: 78, color: 'var(--brand-700)' },
    { l: 'TI · Redes', v: 71, color: 'var(--brand-700)' },
    { l: 'Mecatrónica', v: 69, color: 'var(--brand-700)' },
    { l: 'Procesos', v: 64, color: 'var(--brand-700)' },
    { l: 'Turismo', v: 58, color: 'var(--brand-700)' },
    { l: 'Admin.', v: 52, color: 'var(--brand-700)' },
    { l: 'Manten.', v: 74, color: 'var(--brand-700)' },
  ];

  readonly lineData = [
    { l: '2022', v: 48 },
    { l: '2023', v: 54 },
    { l: '2024', v: 61 },
    { l: '2025', v: 64 },
    { l: '2026', v: 68 },
  ];

  readonly mapPins = [
    { x: 18, y: 45, n: 24, name: 'Tepic' },
    { x: 25, y: 55, n: 8, name: 'Compostela' },
    { x: 38, y: 38, n: 6, name: 'Bahía' },
    { x: 52, y: 30, n: 5, name: 'Nayarit' },
    { x: 60, y: 42, n: 9, name: 'Jalisco' },
    { x: 72, y: 55, n: 7, name: 'Durango' },
    { x: 80, y: 68, n: 4, name: 'CDMX' },
  ];

  readonly hbarData = [
    { l: 'Programación web (Angular/React)', v: 142 },
    { l: 'Bases de datos · SQL', v: 128 },
    { l: 'Inglés intermedio-avanzado', v: 118 },
    { l: 'Trabajo en equipo', v: 104 },
    { l: 'Análisis de datos', v: 97 },
    { l: 'Mantenimiento eléctrico', v: 74 },
    { l: 'Manejo de ERP', v: 62 },
    { l: 'Atención al cliente', v: 58 },
  ];

  readonly conveniosTable = [
    ['Soluciones Pacífico', 'Tecnología', 'UT-2023-014', '2023-02-14', '2026-02-14', 12, 'Activo', 'ok'],
    ['Aeropuertos GAP', 'Transporte', 'UT-2022-007', '2022-08-01', '2026-08-01', 8, 'Activo', 'ok'],
    ['Vidanta Tech', 'Turismo Tech', 'UT-2024-003', '2024-01-10', '2026-07-10', 4, 'Por vencer', 'warn'],
    ['Banorte Digital', 'Banca', '—', '—', '—', 1, 'Pend. formalizar', 'info'],
    ['Hard Rock Riviera', 'Turismo', 'UT-2021-022', '2021-11-30', '2025-11-30', 6, 'Renovación', 'warn'],
  ];

  formatPct(v: number): string {
    return `${v}%`;
  }
}
