import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DonutComponent } from '../../../../shared/components/charts/donut.component';
import { RadarChartComponent } from '../../../../shared/components/charts/radar-chart.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { EvaluacionApiService } from '../../services/evaluacion-api.service';
import { PRUEBA_META, RadarData } from '../../interfaces/evaluacion';

@Component({
  selector: 'app-evaluacion-resultados',
  standalone: true,
  imports: [CommonModule, IconComponent, RadarChartComponent, DonutComponent],
  templateUrl: './evaluacion-resultados.component.html',
  styleUrl: './evaluacion-resultados.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvaluacionResultadosComponent implements OnInit {
  private readonly api = inject(EvaluacionApiService);
  private readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);

  loading = signal(true);
  puntaje = signal(0);
  tipo = signal('');
  radar = signal<RadarData | null>(null);

  meta = computed(() => PRUEBA_META[this.tipo()] ?? PRUEBA_META['tecnica']);

  scoreColor = computed(() => {
    const s = this.puntaje();
    if (s >= 80) return 'var(--ok-600)';
    if (s >= 70) return 'var(--brand-700)';
    if (s >= 60) return 'var(--gold-700)';
    return 'var(--err-600)';
  });

  scoreLabel = computed(() => {
    const s = this.puntaje();
    if (s >= 90) return 'Excelente';
    if (s >= 80) return 'Muy bien';
    if (s >= 70) return 'Bien';
    if (s >= 60) return 'Regular';
    return 'Necesita mejorar';
  });

  insight = computed(() => {
    const s = this.puntaje();
    const t = this.tipo();
    const meta = PRUEBA_META[t];

    if (s >= 80) {
      return `Tu desempeño en la prueba ${meta.etiqueta.toLowerCase()} es sobresaliente. Esto refuerza tu perfil como candidato competitivo para vacantes que requieren ${meta.descripcion.toLowerCase()}`;
    }
    if (s >= 60) {
      return `Tu resultado en la prueba ${meta.etiqueta.toLowerCase()} es sólido. Te recomendamos seguir practicando para alcanzar un puntaje superior al 80% y aumentar tu match con más vacantes.`;
    }
    return `Tu resultado en la prueba ${meta.etiqueta.toLowerCase()} indica áreas de oportunidad. Considerá repasar los conceptos clave antes de intentar nuevamente${t === 'tecnica' ? ' en 6 meses' : ''}.`;
  });

  radarAxes = computed(() => {
    const r = this.radar();
    return r?.labels ?? ['Prueba Técnica', 'Prueba Cognitiva'];
  });

  radarDatasets = computed(() => {
    const r = this.radar();
    if (r) {
      return [
        {
          values: r.alumno.map((v) => v / 100),
          color: 'var(--brand-700)',
        },
        {
          values: r.promedio_carrera.map((v) => v / 100),
          color: 'var(--gold-600)',
          fillOpacity: 0,
        },
      ];
    }
    return [
      { values: [0.74, 0.82], color: 'var(--brand-700)' },
      { values: [0.76, 0.78], color: 'var(--gold-600)', fillOpacity: 0 },
    ];
  });

  ngOnInit(): void {
    const puntaje = this.route.snapshot.queryParamMap.get('puntaje');
    const tipo = this.route.snapshot.queryParamMap.get('tipo');

    if (puntaje) this.puntaje.set(parseInt(puntaje, 10));
    if (tipo) this.tipo.set(tipo);

    this.cargarRadar();
  }

  cargarRadar(): void {
    this.api.getRadar().subscribe({
      next: (data) => {
        this.radar.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }

  onVolver(): void {
    this.router.navigate(['/evaluaciones']);
  }
}
