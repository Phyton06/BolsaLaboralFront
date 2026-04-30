import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guia',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <h1>Guía de Pruebas</h1>
      <p>Esta sección está en construcción.</p>
    </div>
  `,
  styles: [`
    .container { padding: 24px; }
    h1 { font-size: 24px; font-weight: 600; margin-bottom: 8px; }
    p { color: var(--ink-500); }
  `]
})
export class GuiaComponent {}
