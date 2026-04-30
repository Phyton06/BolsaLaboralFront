import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-evaluacion',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Exam header -->
    <div style="background:#fff;border-bottom:1px solid var(--ink-200);padding:14px 32px;display:flex;align-items:center;gap:18px;">
      <div>
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.06em;color:var(--viz-4);font-weight:700;">EVALUACIÓN COGNITIVA</div>
        <div style="font-size:14px;font-weight:600;">Razonamiento lógico-verbal</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;gap:14px;padding-left:24px;">
        <div style="font-size:11px;color:var(--ink-500);font-weight:600;">Pregunta 12 de 30</div>
        <div class="bar" style="flex:1;height:6px;">
          <div style="width:40%;background:var(--viz-4);"></div>
        </div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;color:var(--err-600);font-weight:700;display:flex;align-items:center;gap:5px;">
          <app-icon name="clock" [size]="13" /> 22:14
        </div>
      </div>
      <button class="btn ghost sm">Pausar</button>
    </div>

    <div style="padding:32px;max-width:780px;margin:0 auto;">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:var(--ink-400);font-weight:700;margin-bottom:8px;">SECCIÓN 2 · ANALOGÍAS</div>
      <h2 style="font-family:'IBM Plex Serif',serif;font-size:22px;font-weight:500;line-height:1.4;margin:0 0 6px 0;color:var(--ink-900);">
        Identifica la relación que mejor completa la analogía:
      </h2>
      <div style="font-size:18px;padding:18px 22px;background:#fff;border:1px solid var(--ink-200);border-radius:10px;margin-bottom:24px;font-family:'IBM Plex Serif',serif;text-align:center;letter-spacing:0.02em;color:var(--ink-900);">
        <b>Arquitecto</b> es a <b>edificio</b>, como <b style="color:var(--brand-700);">compositor</b> es a ___
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:28px;">
        @for (option of options; track option.key) {
          <div
            style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#fff;border:1.5px solid {{ option.sel ? 'var(--brand-700)' : 'var(--ink-200)' }};border-radius:10px;cursor:pointer;"
          >
            <div style="width:26px;height:26px;border-radius:50%;background:{{ option.sel ? 'var(--brand-700)' : 'var(--ink-100)' }};color:{{ option.sel ? '#fff' : 'var(--ink-600)' }};font-weight:700;font-size:11.5px;display:grid;place-items:center;">
              {{ option.key }}
            </div>
            <span style="font-size:14px;font-weight:{{ option.sel ? 600 : 400 }};">{{ option.value }}</span>
            @if (option.sel) {
              <app-icon name="check" [size]="16" color="var(--brand-700)" [stroke]="2.5" style="margin-left:auto;" />
            }
          </div>
        }
      </div>

      <div style="display:flex;justify-content:space-between;">
        <button class="btn ghost"><app-icon name="chevR" [size]="14" style="transform:rotate(180deg);" /> Anterior</button>
        <div style="display:flex;gap:8;">
          <button class="btn ghost">Marcar para revisar</button>
          <button class="btn primary">Siguiente <app-icon name="chevR" [size]="14" /></button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class EvaluacionComponent {
  readonly options = [
    { key: 'A', value: 'Sinfonía', sel: false },
    { key: 'B', value: 'Orquesta', sel: false },
    { key: 'C', value: 'Música', sel: true },
    { key: 'D', value: 'Instrumento', sel: false },
    { key: 'E', value: 'Concierto', sel: false },
  ];
}
