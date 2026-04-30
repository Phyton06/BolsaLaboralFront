import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';
import { EvaluacionApiService } from '../../services/evaluacion-api.service';
import {
  ExamenActivo,
  PreguntaExamen,
  PRUEBA_META,
} from '../../interfaces/evaluacion';

type IaLoadingPhase = 'analyzing' | 'generating' | 'selecting';

@Component({
  selector: 'app-evaluacion-examen',
  standalone: true,
  imports: [CommonModule, IconComponent, ChipComponent],
  templateUrl: './evaluacion-examen.component.html',
  styleUrl: './evaluacion-examen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvaluacionExamenComponent implements OnInit, OnDestroy {
  private readonly api = inject(EvaluacionApiService);
  private readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);

  // State
  loading = signal(true);
  iaLoading = signal(false);
  iaPhase = signal<IaLoadingPhase>('analyzing');
  error = signal<string | null>(null);
  examen = signal<ExamenActivo | null>(null);

  // Exam state
  currentIndex = signal(0);
  respuestas = signal<Record<number, string>>({});
  marcadas = signal<Set<number>>(new Set());
  timerSeconds = signal(0);
  timerInterval: any = null;

  // Computed
  preguntaActual = computed<PreguntaExamen | null>(() => {
    const ex = this.examen();
    if (!ex) return null;
    return ex.preguntas[this.currentIndex()] ?? null;
  });

  progreso = computed(() => {
    const ex = this.examen();
    if (!ex) return 0;
    return Math.round(((this.currentIndex() + 1) / ex.preguntas.length) * 100);
  });

  respondidas = computed(() => {
    return Object.keys(this.respuestas()).length;
  });

  tiempoRestante = computed(() => {
    const s = this.timerSeconds();
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  });

  esUltima = computed(() => {
    const ex = this.examen();
    if (!ex) return true;
    return this.currentIndex() >= ex.preguntas.length - 1;
  });

  tipoPrueba = signal('');
  meta = computed(() => PRUEBA_META[this.tipoPrueba()] ?? PRUEBA_META['tecnica']);

  tiempoBajo = computed(() => this.timerSeconds() < 300); // < 5 min

  ngOnInit(): void {
    const tipo = this.route.snapshot.queryParamMap.get('tipo');
    if (!tipo) {
      this.router.navigate(['/evaluaciones']);
      return;
    }
    this.tipoPrueba.set(tipo);
    this.iniciarExamen(tipo);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  iniciarExamen(tipo: string): void {
    // For tecnica, show IA loading animation
    if (tipo === 'tecnica') {
      this.showIaLoading(() => this.cargarExamen(tipo));
    } else {
      this.loading.set(true);
      this.cargarExamen(tipo);
    }
  }

  cargarExamen(tipo: string): void {
    this.loading.set(true);
    this.error.set(null);
    this.api.iniciar(tipo).subscribe({
      next: (data) => {
        if (!data) {
          this.error.set('No se pudo iniciar la evaluación. Intenta de nuevo.');
          this.loading.set(false);
          return;
        }
        this.examen.set(data);
        this.currentIndex.set(0);
        this.respuestas.set({});
        this.timerSeconds.set(data.duracion_minutos * 60);
        this.startTimer();
        this.loading.set(false);
        this.iaLoading.set(false);
      },
      error: () => {
        this.error.set('Error al iniciar la evaluación.');
        this.loading.set(false);
        this.iaLoading.set(false);
      },
    });
  }

  showIaLoading(callback: () => void): void {
    this.iaLoading.set(true);
    this.iaPhase.set('analyzing');

    setTimeout(() => {
      this.iaPhase.set('generating');
    }, 1500);

    setTimeout(() => {
      this.iaPhase.set('selecting');
    }, 3000);

    setTimeout(() => {
      callback();
    }, 4000);
  }

  startTimer(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerSeconds.update((s) => {
        if (s <= 1) {
          clearInterval(this.timerInterval);
          this.finalizarExamen();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  }

  seleccionarOpcion(opcion: string): void {
    const pregunta = this.preguntaActual();
    if (!pregunta) return;
    this.respuestas.update((r) => ({ ...r, [pregunta.id]: opcion }));
  }

  opcionSeleccionada(opcion: string): boolean {
    const pregunta = this.preguntaActual();
    if (!pregunta) return false;
    return this.respuestas()[pregunta.id] === opcion;
  }

  anterior(): void {
    if (this.currentIndex() > 0) {
      this.currentIndex.update((i) => i - 1);
    }
  }

  siguiente(): void {
    const ex = this.examen();
    if (!ex) return;
    if (this.currentIndex() < ex.preguntas.length - 1) {
      this.currentIndex.update((i) => i + 1);
    }
  }

  toggleMarcada(): void {
    const pregunta = this.preguntaActual();
    if (!pregunta) return;
    this.marcadas.update((set) => {
      const nuevo = new Set(set);
      if (nuevo.has(pregunta.id)) {
        nuevo.delete(pregunta.id);
      } else {
        nuevo.add(pregunta.id);
      }
      return nuevo;
    });
  }

  estaMarcada(): boolean {
    const pregunta = this.preguntaActual();
    if (!pregunta) return false;
    return this.marcadas().has(pregunta.id);
  }

  finalizarExamen(): void {
    const ex = this.examen();
    if (!ex) return;

    if (this.timerInterval) clearInterval(this.timerInterval);

    const sinResponder = ex.preguntas.length - this.respondidas();
    if (sinResponder > 0) {
      const confirmar = confirm(
        `Tienes ${sinResponder} pregunta${sinResponder > 1 ? 's' : ''} sin responder. ¿Seguro que querés finalizar?`
      );
      if (!confirmar) {
        this.startTimer(); // Resume timer
        return;
      }
    }

    this.api.finalizar(ex.evaluacion_id).subscribe({
      next: (resultado) => {
        this.router.navigate(['/evaluaciones/resultados'], {
          queryParams: {
            evaluacion_id: ex.evaluacion_id,
            puntaje: resultado?.puntaje_global ?? 0,
            tipo: ex.tipo_prueba,
          },
        });
      },
      error: () => {
        this.error.set('Error al finalizar la evaluación.');
      },
    });
  }

  getOpcionesLetras(opciones: Record<string, string>): string[] {
    return Object.keys(opciones).sort();
  }
}
