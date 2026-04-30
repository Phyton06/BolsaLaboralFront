import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';
import { EvaluacionApiService } from '../../services/evaluacion-api.service';
import { EvaluacionCatalogo, PRUEBA_META } from '../../interfaces/evaluacion';

@Component({
  selector: 'app-evaluacion-catalogo',
  standalone: true,
  imports: [CommonModule, IconComponent, ChipComponent],
  templateUrl: './evaluacion-catalogo.component.html',
  styleUrl: './evaluacion-catalogo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvaluacionCatalogoComponent implements OnInit {
  private readonly api = inject(EvaluacionApiService);
  private readonly router = inject(Router);

  loading = signal(true);
  error = signal<string | null>(null);
  catalogo = signal<EvaluacionCatalogo[]>([]);
  readonly meta = PRUEBA_META;

  ngOnInit(): void {
    this.cargarCatalogo();
  }

  cargarCatalogo(): void {
    this.loading.set(true);
    this.error.set(null);
    this.api.getCatalogo().subscribe({
      next: (data) => {
        console.log('[Catalogo] Loaded:', data);
        this.catalogo.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudo cargar el catálogo de evaluaciones.');
        this.loading.set(false);
      },
    });
  }

  getEstado(prueba: EvaluacionCatalogo): {
    label: string;
    chip: 'ok' | 'warn' | 'err' | 'info' | 'outline';
    accion: string;
    disabled: boolean;
  } {
    if (prueba.en_progreso) {
      return {
        label: 'En progreso',
        chip: 'warn',
        accion: 'Continuar',
        disabled: false,
      };
    }
    if (prueba.completada && prueba.bloqueada) {
      return {
        label: prueba.mensaje_bloqueo ?? 'Completada',
        chip: 'outline',
        accion: 'Completada',
        disabled: true,
      };
    }
    if (prueba.bloqueada) {
      return {
        label: prueba.mensaje_bloqueo ?? 'Bloqueada',
        chip: 'err',
        accion: 'Bloqueada',
        disabled: true,
      };
    }
    return {
      label: 'Disponible',
      chip: 'ok',
      accion: 'Iniciar',
      disabled: false,
    };
  }

  getScoreColor(score: number): string {
    if (score >= 80) return 'var(--ok-600)';
    if (score >= 70) return 'var(--brand-700)';
    if (score >= 60) return 'var(--gold-700)';
    return 'var(--err-600)';
  }

  onIniciar(tipo: string): void {
    this.router.navigate(['/evaluaciones/examen'], {
      queryParams: { tipo },
    });
  }
}
