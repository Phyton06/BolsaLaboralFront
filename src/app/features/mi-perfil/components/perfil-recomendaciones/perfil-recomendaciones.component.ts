import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';
import { RecomendacionesIA } from '../../interfaces/perfil-egresado';

@Component({
  selector: 'app-perfil-recomendaciones',
  standalone: true,
  imports: [CommonModule, IconComponent, ChipComponent],
  templateUrl: './perfil-recomendaciones.component.html',
  styleUrl: './perfil-recomendaciones.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilRecomendacionesComponent {
  readonly recomendaciones = input<RecomendacionesIA | null>(null);
  readonly loading = input<boolean>(false);
}
