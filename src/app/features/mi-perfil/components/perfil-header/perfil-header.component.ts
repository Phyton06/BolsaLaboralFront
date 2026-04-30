import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilEgresado } from '../../interfaces/perfil-egresado';
import { DonutComponent } from '../../../../shared/components/charts/donut.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-perfil-header',
  standalone: true,
  imports: [CommonModule, DonutComponent, IconComponent],
  templateUrl: './perfil-header.component.html',
  styleUrl: './perfil-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilHeaderComponent {
  readonly perfil = input.required<PerfilEgresado | null>();
  readonly completitud = input.required<number>();
  readonly photoUploading = input<boolean>(false);

  readonly fotoChange = output<File>();

  private readonly perfilService = inject(PerfilService);
  readonly nombreCompleto = this.perfilService.nombreCompleto;
  readonly iniciales = this.perfilService.iniciales;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];

    // Validate type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      alert('Solo se permiten imágenes JPG, PNG o WebP');
      input.value = '';
      return;
    }

    // Validate size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('La imagen no debe superar los 5MB');
      input.value = '';
      return;
    }

    this.fotoChange.emit(file);
    input.value = ''; // Reset so same file can be selected again
  }
}
