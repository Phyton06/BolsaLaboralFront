import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutComponent } from '../../shared/components/charts/donut.component';
import { RadarChartComponent } from '../../shared/components/charts/radar-chart.component';
import { BenchRowComponent } from '../../shared/components/bench/bench-row.component';
import { ChipComponent } from '../../shared/components/chip/chip.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-ofertas-detail',
  standalone: true,
  imports: [CommonModule, DonutComponent, RadarChartComponent, BenchRowComponent, ChipComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="font-size:11.5px;color:var(--ink-400);margin-bottom:6px;">VACANTES · SOLUCIONES PACÍFICO · FULL-STACK JR.</div>

    <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:18px;">
      <!-- Left column -->
      <div>
        <div class="card" style="margin-bottom:14px;">
          <div style="display:flex;gap:14px;align-items:flex-start;">
            <div style="width:60px;height:60px;border-radius:8px;background:var(--brand-100);display:grid;place-items:center;color:var(--brand-700);font-weight:700;font-family:'IBM Plex Serif',serif;font-size:22px;">SP</div>
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                <app-chip color="gold">◆ Convenio UT</app-chip>
                <app-chip color="ok">Activa</app-chip>
                <span style="font-size:11px;color:var(--ink-400);">Publicada hace 3 días · 12 postulantes</span>
              </div>
              <h2 style="font-family:'IBM Plex Serif',serif;font-size:22px;font-weight:500;margin:0;letter-spacing:-0.01em;">Desarrollador Full-Stack Jr.</h2>
              <div style="font-size:13px;color:var(--ink-600);">Soluciones Pacífico · Tepic, Nay.</div>
              <div style="display:flex;gap:14px;margin-top:10px;font-size:12px;color:var(--ink-700);">
                <span><app-icon name="money" [size]="13" /> $18,000 - $22,000 / mes</span>
                <span><app-icon name="clock" [size]="13" /> Tiempo completo</span>
                <span><app-icon name="location" [size]="13" /> Híbrido</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card" style="margin-bottom:14px;">
          <h3 style="font-size:14px;font-weight:600;margin-top:0;">Descripción</h3>
          <p style="font-size:12.5px;color:var(--ink-700);line-height:1.6;margin-top:0;">
            Buscamos un desarrollador junior para integrar el equipo de plataformas web con stack Angular 17 + PHP Flight + PostgreSQL. Trabajarás directamente con líderes técnicos en proyectos para clientes del sector turístico de Nayarit.
          </p>
          <h4 style="font-size:12px;font-weight:600;margin-top:14px;color:var(--ink-600);text-transform:uppercase;letter-spacing:0.05em;">Responsabilidades</h4>
          <ul style="font-size:12.5px;color:var(--ink-700);line-height:1.6;padding-left:18px;margin:6px 0;">
            <li>Desarrollo de componentes Angular reutilizables.</li>
            <li>Diseño y consumo de APIs REST en PHP Flight.</li>
            <li>Modelado de datos en PostgreSQL 16.</li>
            <li>Code review y participación en stand-ups.</li>
          </ul>
        </div>

        <div class="card">
          <h3 style="font-size:14px;font-weight:600;margin-top:0;">Perfil idóneo (benchmark)</h3>
          <div style="font-size:11.5px;color:var(--ink-500);margin-bottom:12px;">El reclutador definió estos puntajes mínimos. Tu match se calcula contra ellos.</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
            <app-bench-row l="Técnica · Programación" [req]="75" [you]="88" />
            <app-bench-row l="Cognitiva · Lógico-verbal" [req]="70" [you]="74" />
            <app-bench-row l="Psicométrica · Trabajo eq." [req]="65" [you]="82" />
            <app-bench-row l="Proyectiva · Estabilidad" [req]="60" [you]="66" />
          </div>
        </div>
      </div>

      <!-- Right column -->
      <div>
        <div class="card" style="margin-bottom:14px;background:linear-gradient(180deg, var(--brand-900), var(--brand-700));color:#fff;border:none;">
          <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:0.08em;color:rgba(255,255,255,0.7);font-weight:600;">TU COMPATIBILIDAD</div>
          <div style="display:flex;align-items:center;gap:14px;margin-top:8px;">
            <div style="position:relative;">
              <app-donut [value]="92" [size]="92" color="var(--gold-500)" label="92%" sublabel=""></app-donut>
            </div>
            <div style="flex:1;font-size:12px;line-height:1.5;">
              <div style="color:var(--gold-500);font-weight:700;font-size:13px;">Excelente coincidencia</div>
              <div style="color:rgba(255,255,255,0.8);margin-top:4px;">Superas 3 de 4 puntajes mínimos. Tu perfil técnico está en el top 10% de candidatos.</div>
            </div>
          </div>
          <button class="btn gold" style="width:100%;justify-content:center;margin-top:14px;">
            <app-icon name="check" [size]="14" /> Postular ahora
          </button>
          <button class="btn ghost" style="width:100%;justify-content:center;margin-top:6px;color:#fff;border-color:rgba(255,255,255,0.2);">
            Guardar para después
          </button>
        </div>

        <div class="card">
          <h3 style="font-size:13px;font-weight:600;margin-top:0;">Comparación gráfica</h3>
          <app-radar-chart
            [size]="220"
            [axes]="['Técnica', 'Cognitiva', 'Psicom.', 'Proyectiva']"
            [datasets]="[
              { values:[0.88,0.74,0.82,0.66], color:'var(--brand-700)' },
              { values:[0.75,0.70,0.65,0.60], color:'var(--gold-600)', fillOpacity:0 },
            ]"
          ></app-radar-chart>
          <div style="display:flex;justify-content:center;gap:14px;font-size:11px;margin-top:8px;">
            <span style="color:var(--brand-700);">● Tú</span>
            <span style="color:var(--gold-600);">● Idóneo</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class OfertasDetailComponent {
  readonly user = { name: 'Mariana Cárdenas', initials: 'MC' };
}
