import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutComponent } from '../../../shared/components/charts/donut.component';
import { HBarListComponent } from '../../../shared/components/charts/hbar-list.component';
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-admin-insercion',
  standalone: true,
  imports: [CommonModule, DonutComponent, HBarListComponent, ChipComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-head">
      <div>
        <div class="crumbs">REPORTES · INSERCIÓN LABORAL</div>
        <h1>Indicador de inserción laboral</h1>
        <div class="desc">Análisis cuantitativo segmentado por carrera, género y zona geográfica</div>
      </div>
      <div style="display:flex;gap:8px;">
        <select class="btn ghost sm"><option>Generación: 2025</option></select>
        <button class="btn ghost"><app-icon name="download" [size]="13" /> Exportar PDF</button>
      </div>
    </div>

    <div class="card" style="margin-bottom:14px;padding:24px;background:linear-gradient(90deg, var(--brand-100), #fff);">
      <div style="display:grid;grid-template-columns:auto 1fr;gap:32px;align-items:center;">
        <app-donut [value]="68" [size]="130" color="var(--brand-700)" label="68%" sublabel="inserción" />
        <div>
          <div style="font-size:11px;text-transform:uppercase;color:var(--ink-500);font-weight:700;letter-spacing:0.06em;">RESULTADO 2025</div>
          <div style="font-family:'IBM Plex Serif',serif;font-size:32px;font-weight:500;color:var(--ink-900);line-height:1.15;margin:4px 0;">
            974 egresados contratados de 1,432
          </div>
          <div style="font-size:13px;color:var(--ink-600);">
            El indicador subió <b style="color:var(--ok-600);">+4.2 pp</b> respecto a 2024. La meta institucional para 2027 es 75%.
          </div>
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
      <div class="card">
        <div class="card-h"><h3>Por carrera</h3></div>
        <app-hbar-list
          [max]="100"
          [data]="hbarCarrera"
        ></app-hbar-list>
      </div>
      <div class="card">
        <div class="card-h"><h3>Por zona</h3></div>
        <app-hbar-list
          [max]="100"
          [data]="hbarZona"
        ></app-hbar-list>
        <div class="divider"></div>
        <div style="display:flex;justify-content:space-between;font-size:12px;">
          <span><b class="serif" style="font-size:18px;">78%</b> en zona de influencia</span>
          <span><b class="serif" style="font-size:18px;">22%</b> fuera del estado</span>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-h">
        <h3>Comparativa multianual</h3>
        <div style="display:flex;gap:6px;">
          <app-chip color="brand">2025</app-chip>
          <app-chip color="outline">2024</app-chip>
          <app-chip color="outline">2023</app-chip>
        </div>
      </div>
      <table class="t">
        <thead>
          <tr><th>Carrera</th><th>Egresados 2025</th><th>Contratados</th><th>% Inserción</th><th>vs. 2024</th><th>vs. meta</th></tr>
        </thead>
        <tbody>
          @for (r of comparativaTable; track r[0]) {
            <tr>
              <td><b>{{ r[0] }}</b></td>
              <td class="mono">{{ r[1] }}</td>
              <td class="mono">{{ r[2] }}</td>
              <td>
                <div style="display:flex;align-items:center;gap:8px;">
                  <span class="mono" style="font-weight:700;">{{ r[3] }}%</span>
                  <div style="width:80px;height:5px;background:var(--ink-100);border-radius:99px;">
                    <div style="width:{{ r[3] }}%;height:100%;background:var(--brand-700);border-radius:99px;"></div>
                  </div>
                </div>
              </td>
              <td><span class="chip ok" style="font-size:10px;">{{ r[4] }}</span></td>
              <td>
                <span class="chip {{ r[5] === 'ok' ? 'ok' : r[5] === 'warn' ? 'warn' : 'err' }}" style="font-size:10px;">
                  {{ r[5] === 'ok' ? 'cumple' : r[5] === 'warn' ? 'cerca' : 'lejos' }}
                </span>
              </td>
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
export class AdminInsercionComponent {
  readonly user = { name: 'Dra. Elena Vázquez', initials: 'EV' };

  readonly hbarCarrera = [
    { l: 'Ing. TI · Desarrollo', v: 78 },
    { l: 'Manten. Industrial', v: 74 },
    { l: 'Ing. TI · Redes', v: 71 },
    { l: 'Mecatrónica', v: 69 },
    { l: 'Ing. Procesos', v: 64 },
    { l: 'Turismo', v: 58 },
    { l: 'Administración', v: 52 },
  ];

  readonly hbarZona = [
    { l: 'Compostela (sede)', v: 74, color: 'var(--gold-600)' },
    { l: 'Bahía de Banderas', v: 71, color: 'var(--gold-600)' },
    { l: 'Tepic', v: 68, color: 'var(--gold-600)' },
    { l: 'Resto de Nayarit', v: 62, color: 'var(--gold-600)' },
    { l: 'Otros estados', v: 54, color: 'var(--gold-600)' },
    { l: 'Remoto', v: 81, color: 'var(--gold-600)' },
  ];

  readonly comparativaTable = [
    ['Ing. TI · Desarrollo', 240, 187, 78, '+6 pp', 'ok'],
    ['Manten. Industrial', 168, 124, 74, '+3 pp', 'ok'],
    ['Ing. TI · Redes', 148, 105, 71, '+5 pp', 'ok'],
    ['Mecatrónica', 192, 132, 69, '+2 pp', 'warn'],
    ['Ing. Procesos', 220, 141, 64, '+1 pp', 'warn'],
    ['Turismo', 246, 143, 58, '−1 pp', 'err'],
    ['Administración', 218, 113, 52, '+0 pp', 'err'],
  ];
}
