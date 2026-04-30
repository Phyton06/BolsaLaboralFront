import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { RadarChartComponent } from '../../../shared/components/charts/radar-chart.component';
import { BenchSliderComponent } from '../../../shared/components/bench/bench-slider.component';
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-empresa-publicar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RadarChartComponent, BenchSliderComponent, ChipComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-head">
      <div>
        <div class="crumbs">VACANTES · NUEVA</div>
        <h1>Publicar vacante</h1>
        <div class="desc">Define puesto, requisitos y el perfil idóneo (benchmark) para que el sistema calcule matches automáticos.</div>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn ghost" routerLink="/empresa/dashboard">Cancelar</button>
        <button class="btn primary" (click)="publicar()"><app-icon name="check" [size]="13" /> Publicar</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1.3fr 1fr;gap:18px;">
      <div class="card">
        <h3 style="margin-top:0;font-size:14px;">1 · Información del puesto</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px;">
          <div style="grid-column:1/-1;">
            <div class="field">
              <label>Título del puesto</label>
              <input value="Desarrollador Full-Stack Jr." />
            </div>
          </div>
          <div class="field">
            <label>Área</label>
            <select>
              <option value="ti">Tecnologías de la Información</option>
            </select>
          </div>
          <div class="field">
            <label>Modalidad</label>
            <select>
              <option>Híbrido</option>
              <option>Remoto</option>
              <option>Presencial</option>
            </select>
          </div>
          <div class="field">
            <label>Ubicación</label>
            <input value="Tepic, Nay." />
          </div>
          <div class="field">
            <label>Salario (MXN/mes)</label>
            <input value="$18,000 - $22,000" />
          </div>
          <div style="grid-column:1/-1;">
            <div class="field">
              <label>Descripción</label>
              <textarea rows="4">Buscamos desarrollador junior para integrar el equipo de plataformas web con stack Angular 17 + PHP Flight + PostgreSQL...</textarea>
            </div>
          </div>
        </div>

        <div class="divider" style="margin:18px 0;"></div>

        <h3 style="margin:0;font-size:14px;">2 · Habilidades requeridas</h3>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;">
          @for (skill of skills; track skill) {
            <span class="chip brand" style="padding-right:5px;">
              {{ skill }} <app-icon name="x" [size]="10" stroke="2" color="var(--brand-700)" />
            </span>
          }
          <button class="btn sm ghost" style="padding:2px 8px;font-size:10.5px;"><app-icon name="plus" [size]="11" /> Añadir</button>
        </div>
      </div>

      <!-- Perfil idoneo -->
      <div class="card" style="background:linear-gradient(180deg, var(--gold-100) 0%, #fff 30%);">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
          <app-icon name="target" [size]="16" color="var(--gold-700)" />
          <h3 style="margin:0;font-size:14px;">3 · Perfil idóneo (benchmark)</h3>
        </div>
        <div style="font-size:11.5px;color:var(--ink-500);margin-bottom:14px;">
          Define el puntaje mínimo para cada categoría. Los candidatos que igualen o superen estos valores aparecerán en tu shortlist.
        </div>

        <app-bench-slider label="Psicométrica" cat="Trabajo en equipo, presión" [value]="65" c="var(--brand-700)" />
        <app-bench-slider label="Cognitiva" cat="Lógico-verbal, agilidad mental" [value]="70" c="var(--viz-4)" />
        <app-bench-slider label="Técnica" cat="Conocimiento específico" [value]="75" c="var(--ok-600)" [req]="true" />
        <app-bench-slider label="Proyectiva" cat="Estabilidad emocional" [value]="60" c="var(--gold-600)" />

        <div class="divider" style="margin:14px 0;"></div>

        <div style="padding:12px;background:#fff;border-radius:8px;border:1px dashed var(--ink-300);">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--ink-500);margin-bottom:8px;">Vista previa benchmark</div>
          <div style="display:grid;place-items:center;">
            <app-radar-chart
              [size]="200"
              [axes]="['Psicom.', 'Cogn.', 'Téc.', 'Proy.']"
              [datasets]="[{ values:[0.65, 0.70, 0.75, 0.60], color:'var(--gold-600)' }]"
            ></app-radar-chart>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class EmpresaPublicarComponent {
  router = inject(Router);
  readonly user = { name: 'Roberto Salazar', initials: 'RS' };

  readonly skills = ['Angular 17', 'PHP Flight', 'PostgreSQL', 'REST APIs', 'Git', 'Scrum'];

  publicar(): void {
    Swal.fire({
      title: '¡Vacante Publicada!',
      text: 'Tu nueva vacante se ha agregado a la bolsa laboral exitosamente.',
      icon: 'success',
      confirmButtonColor: '#0f6b34',
    }).then(() => {
      this.router.navigate(['/empresa/dashboard']);
    });
  }
}
