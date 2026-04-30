import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsEgresado } from '../../interfaces/perfil-egresado';
import { ConvStatComponent } from '../../../../shared/components/conv-stat.component';

@Component({
  selector: 'app-perfil-stats',
  standalone: true,
  imports: [CommonModule, ConvStatComponent],
  templateUrl: './perfil-stats.component.html',
  styleUrl: './perfil-stats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilStatsComponent {
  readonly stats = input.required<StatsEgresado | null>();
}
