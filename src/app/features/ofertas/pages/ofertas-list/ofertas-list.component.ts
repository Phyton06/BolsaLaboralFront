import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofertas-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-background min-h-full p-4">
      <div class="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div class="px-4 py-3 border-b border-border">
          <h2 class="text-xl font-semibold text-card-foreground">Ofertas de Empleo</h2>
        </div>
        <div class="p-4">
          <p class="text-muted-foreground">Implementar listado de ofertas con filtros.</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './ofertas-list.component.css'
})
export class OfertasListComponent {}
