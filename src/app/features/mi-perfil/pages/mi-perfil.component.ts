import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-background min-h-full p-4">
      <div class="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div class="px-4 py-3 border-b border-border">
          <h2 class="text-xl font-semibold text-card-foreground">Mi Perfil</h2>
        </div>
        <div class="p-4">
          <p class="text-muted-foreground">Implementar edición de perfil (candidato o empresa).</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent {}
