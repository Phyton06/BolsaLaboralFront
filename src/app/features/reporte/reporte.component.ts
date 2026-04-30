import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarChartComponent } from '../../shared/components/charts/radar-chart.component';
import { CategoryScoreComponent } from '../../shared/components/score/category-score.component';
import { GaussCurveComponent } from '../../shared/components/charts/gauss-curve.component';
import { ChipComponent } from '../../shared/components/chip/chip.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [CommonModule, RadarChartComponent, CategoryScoreComponent, GaussCurveComponent, ChipComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-head">
      <div>
        <div class="crumbs">MI PERFIL · RADAR DE COMPETENCIAS</div>
        <h1>Reporte de idoneidad</h1>
        <div class="desc">Resumen cuantitativo de tus 4 evaluaciones aplicadas</div>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn ghost"><app-icon name="download" [size]="13" /> PDF</button>
        <button class="btn ghost"><app-icon name="download" [size]="13" /> Excel</button>
      </div>
    </div>

    <!-- Score banner -->
    <div class="card" style="margin-bottom:14px;padding:18px 22px;background:linear-gradient(90deg, var(--brand-100) 0%, #fff 70%);">
      <div style="display:flex;align-items:center;gap:24px;">
        <div>
          <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:0.06em;color:var(--ink-500);font-weight:700;">PUNTAJE GLOBAL</div>
          <div style="font-family:'IBM Plex Serif',serif;font-size:48px;font-weight:500;color:var(--ink-900);line-height:1;letter-spacing:-0.02em;">
            78<span style="font-size:22px;color:var(--ink-400);"> / 100</span>
          </div>
          <div style="margin-top:6px;">
            <app-chip color="ok">Percentil 84</app-chip>
            <app-chip color="outline">Carrera: TI</app-chip>
          </div>
        </div>
        <div style="height:60px;width:1px;background:var(--ink-200);"></div>
        <div style="flex:1;display:grid;grid-template-columns:repeat(4, 1fr);gap:12px;">
          <app-category-score label="Psicométrica" [score]="82" cat="brand" />
          <app-category-score label="Cognitiva" [score]="74" cat="viz4" />
          <app-category-score label="Técnica" [score]="91" cat="ok" />
          <app-category-score label="Proyectiva" [score]="66" cat="gold" />
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:14px;margin-bottom:14px;">
      <div class="card">
        <div class="card-h">
          <h3>Radar comparativo</h3>
          <div style="display:flex;gap:14px;font-size:11px;">
            <span style="color:var(--brand-700);">● Tú</span>
            <span style="color:var(--gold-600);">● Promedio carrera</span>
            <span style="color:var(--ok-600);">● Top 10%</span>
          </div>
        </div>
        <div style="display:grid;place-items:center;">
          <app-radar-chart
            [size]="340"
            [axes]="['Personalidad', 'Trabajo equipo', 'Lógica', 'Verbal', 'Conocim. técn.', 'Estabilidad', 'Liderazgo', 'Adaptabilidad']"
            [datasets]="[
              { values:[0.82,0.78,0.74,0.74,0.91,0.66,0.58,0.72], color:'var(--brand-700)' },
              { values:[0.65,0.7,0.65,0.65,0.7,0.65,0.55,0.6], color:'var(--gold-600)', fillOpacity:0 },
              { values:[0.85,0.85,0.88,0.88,0.92,0.82,0.85,0.82], color:'var(--ok-600)', fillOpacity:0 },
            ]"
          ></app-radar-chart>
        </div>
      </div>

      <div>
        <div class="card" style="margin-bottom:14px;">
          <div class="card-h">
            <h3>Distribución · Cognitiva</h3>
            <app-chip color="outline">N=312 · TI 2025</app-chip>
          </div>
          <app-gauss-curve [score]="74" [mean]="62" label="0 ───────── 50 ───────── 100" />
        </div>

        <div class="card">
          <div class="card-h" style="margin-top:0;">
            <h3>Distribución · Técnica</h3>
            <app-chip color="outline">N=312 · TI 2025</app-chip>
          </div>
          <app-gauss-curve [score]="91" [mean]="66" label="0 ───────── 50 ───────── 100" />
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-h">
        <h3>Reporte técnico — Fortalezas y áreas de oportunidad</h3>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">
        <div>
          <div style="font-size:11px;text-transform:uppercase;color:var(--ok-600);font-weight:700;letter-spacing:0.06em;margin-bottom:8px;">◆ FORTALEZAS</div>
          <ul style="font-size:12.5px;line-height:1.65;color:var(--ink-700);padding-left:18px;margin:0;">
            <li><b>Conocimiento técnico (91)</b> — Percentil 91 en pruebas de programación, BD y arquitectura.</li>
            <li><b>Trabajo en equipo (78)</b> — Resultados consistentes en simulaciones grupales.</li>
            <li><b>Estabilidad emocional (82)</b> — Alta tolerancia al estrés en pruebas proyectivas.</li>
          </ul>
        </div>
        <div>
          <div style="font-size:11px;text-transform:uppercase;color:var(--warn-600);font-weight:700;letter-spacing:0.06em;margin-bottom:8px;">◇ ÁREAS DE OPORTUNIDAD</div>
          <ul style="font-size:12.5px;line-height:1.65;color:var(--ink-700);padding-left:18px;margin:0;">
            <li><b>Liderazgo (58)</b> — Recomendamos talleres de comunicación asertiva.</li>
            <li><b>Razonamiento numérico (66)</b> — Practicar series y secuencias.</li>
            <li><b>Adaptabilidad (72)</b> — Exponerse a entornos multidisciplinarios.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class ReporteComponent {}
