import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreCellComponent } from '../../../shared/components/score/score-cell.component';
import { AvatarComponent } from '../../../shared/components/avatar.component';
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';

interface Candidate {
  name: string;
  gen: string;
  car: string;
  m: number;
  p: number;
  cg: number;
  t: number;
  pr: number;
}

@Component({
  selector: 'app-empresa-candidatos',
  standalone: true,
  imports: [CommonModule, ScoreCellComponent, AvatarComponent, ChipComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-head">
      <div>
        <div class="crumbs">VACANTES · FULL-STACK JR. · CANDIDATOS</div>
        <h1>Candidatos idóneos</h1>
        <div class="desc">Egresados con coincidencia ≥ 80% con el perfil idóneo de la vacante</div>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn ghost"><app-icon name="download" [size]="13" /> Exportar lista</button>
        <button class="btn primary">Iniciar entrevistas</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:12px;margin-bottom:16px;">
      <div class="card tight" style="padding:14px;">
        <div style="font-size:10.5px;color:var(--ink-400);text-transform:uppercase;letter-spacing:0.05em;font-weight:700;">Match ≥ 90%</div>
        <div style="font-family:'IBM Plex Serif',serif;font-size:24px;font-weight:500;">3</div>
      </div>
      <div class="card tight" style="padding:14px;">
        <div style="font-size:10.5px;color:var(--ink-400);text-transform:uppercase;letter-spacing:0.05em;font-weight:700;">Match 80-89%</div>
        <div style="font-family:'IBM Plex Serif',serif;font-size:24px;font-weight:500;">11</div>
      </div>
      <div class="card tight" style="padding:14px;">
        <div style="font-size:10.5px;color:var(--ink-400);text-transform:uppercase;letter-spacing:0.05em;font-weight:700;">Total postulantes</div>
        <div style="font-family:'IBM Plex Serif',serif;font-size:24px;font-weight:500;">42</div>
      </div>
      <div class="card tight" style="padding:14px;background:var(--brand-900);color:#fff;border:none;">
        <div style="font-size:10.5px;color:rgba(255,255,255,0.6);text-transform:uppercase;letter-spacing:0.05em;font-weight:700;">Mejor match</div>
        <div style="font-family:'IBM Plex Serif',serif;font-size:24px;font-weight:500;color:var(--gold-500);">92%</div>
      </div>
    </div>

    <div class="card" style="padding:0;overflow:hidden;">
      <div style="padding:12px 18px;border-bottom:1px solid var(--ink-200);display:flex;align-items:center;gap:10px;">
        <span style="font-size:13px;font-weight:600;">14 candidatos</span>
        <app-chip color="outline">Vacante: Full-Stack Jr.</app-chip>
        <div style="flex:1;"></div>
        <select class="btn ghost sm" style="padding:5px 8px;">
          <option>Ordenar: Match ↓</option>
          <option>Ordenar: Promedio carrera</option>
          <option>Ordenar: Más reciente</option>
        </select>
      </div>
      <table class="t" style="border-collapse:separate;">
        <thead style="background:var(--ink-50);">
          <tr>
            <th>Candidato</th>
            <th>Carrera</th>
            <th>Match</th>
            <th>Psicom.</th>
            <th>Cognit.</th>
            <th>Técnica</th>
            <th>Proyec.</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (c of candidatesData; track c.name) {
            <tr>
              <td>
                <div style="display:flex;align-items:center;gap:10px;">
                  <app-avatar [name]="c.name" [size]="32" />
                  <div>
                    <div style="font-weight:600;">{{ c.name }}</div>
                    <div style="font-size:10.5px;color:var(--ink-500);">{{ c.gen }}</div>
                  </div>
                </div>
              </td>
              <td style="font-size:11.5px;">{{ c.car }}</td>
              <td>
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;color:{{ c.m>=90 ? 'var(--ok-600)' : 'var(--brand-700)' }};">{{ c.m }}%</div>
                  <div style="width:48px;height:5px;background:var(--ink-100);border-radius:99px;">
                    <div style="width:{{ c.m }}%;height:100%;background:{{ c.m>=90 ? 'var(--ok-600)' : 'var(--brand-700)' }};border-radius:99px;"></div>
                  </div>
                </div>
              </td>
              <td><app-score-cell [v]="c.p" /></td>
              <td><app-score-cell [v]="c.cg" /></td>
              <td><app-score-cell [v]="c.t" /></td>
              <td><app-score-cell [v]="c.pr" /></td>
              <td>
                <div style="display:flex;gap:4px;">
                  <button class="btn sm ghost" style="padding:4px 8px;"><app-icon name="eye" [size]="11" /></button>
                  <button class="btn sm primary" style="padding:4px 10px;font-size:10.5px;">Contactar</button>
                </div>
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
export class EmpresaCandidatosComponent {
  readonly user = { name: 'Roberto Salazar', initials: 'RS' };

  readonly candidatesData: Candidate[] = [
    { name: 'Mariana Cárdenas', gen: '2025-B · TI', car: 'Ing. TI · Desarrollo', m: 92, p: 82, cg: 74, t: 91, pr: 66 },
    { name: 'Daniel Reyes', gen: '2025-A · TI', car: 'Ing. TI · Desarrollo', m: 90, p: 78, cg: 81, t: 89, pr: 72 },
    { name: 'Sofía Núñez', gen: '2024-B · TI', car: 'Ing. TI · Redes', m: 88, p: 84, cg: 79, t: 85, pr: 68 },
    { name: 'Luis Gómez', gen: '2025-A · TI', car: 'Ing. TI · Desarrollo', m: 86, p: 75, cg: 77, t: 88, pr: 64 },
    { name: 'Andrea Ortega', gen: '2024-A · TI', car: 'Ing. TI · Datos', m: 85, p: 80, cg: 82, t: 82, pr: 71 },
    { name: 'Carlos Padilla', gen: '2025-B · TI', car: 'Ing. TI · Desarrollo', m: 83, p: 72, cg: 75, t: 86, pr: 62 },
    { name: 'Valeria Soto', gen: '2024-B · TI', car: 'Ing. TI · Datos', m: 82, p: 78, cg: 78, t: 80, pr: 69 },
    { name: 'Iván Mora', gen: '2025-A · TI', car: 'Ing. TI · Desarrollo', m: 81, p: 71, cg: 74, t: 84, pr: 63 },
  ];
}
