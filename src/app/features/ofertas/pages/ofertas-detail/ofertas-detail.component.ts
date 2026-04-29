import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofertas-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-background min-h-full p-4">
      <div class="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div class="px-4 py-3 border-b border-border">
          <h2 class="text-xl font-semibold text-card-foreground">Detalle de Oferta</h2>
        </div>
        <div class="p-4">
          <p class="text-muted-foreground">Implementar detalle de oferta y botón de postulación.</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './ofertas-detail.component.css'
})
export class OfertasDetailComponent {}
