import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Shared components
import { StatComponent } from '../../shared/components/stat/stat.component';
import { RadarChartComponent } from '../../shared/components/charts/radar-chart.component';
import { ChipComponent } from '../../shared/components/chip/chip.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { PendingTestComponent } from '../../shared/components/test/pending-test.component';
import { RecommendedJobComponent } from '../../shared/components/recommended/recommended-job.component';
import { HighlightComponent } from '../../shared/components/highlight.component';
import { LegendComponent } from '../../shared/components/legend.component';
import { AvatarComponent } from '../../shared/components/avatar.component';
import { ScoreCellComponent } from '../../shared/components/score/score-cell.component';

// Services
import { AuthService } from '../../core/services/auth/auth.service';
import { DashboardService } from './services/dashboard.service';
import {
  DashboardData,
  EvaluacionPendiente,
  VacanteRecomendada,
  PostulacionEstado,
} from './services/dashboard.service';

// Helpers
const ETAPA_CHIP: Record<string, 'ok' | 'warn' | 'err' | 'info' | 'outline'> = {
  aceptada: 'ok',
  revisada: 'info',
  pendiente: 'outline',
  rechazada: 'err',
};

const ETAPA_LABEL: Record<string, string> = {
  aceptada: 'Aceptada',
  revisada: 'En revisión',
  pendiente: 'Postulado',
  rechazada: 'Rechazada',
};

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    StatComponent,
    RadarChartComponent,
    ChipComponent,
    IconComponent,
    PendingTestComponent,
    RecommendedJobComponent,
    HighlightComponent,
    LegendComponent,
    AvatarComponent,
    ScoreCellComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit {
  private readonly dashboard = inject(DashboardService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  // ─── State ────────────────────────────────────────────────────────

  loading = signal(true);
  error = signal<string | null>(null);
  dashboardData = signal<DashboardData | null>(null);

  // User info
  readonly userName = computed(() => {
    const user = this.auth.getUser();
    return user?.nombre ?? 'Egresado';
  });

  readonly userRole = computed(() => this.auth.getUser()?.rol ?? 'egresado');
  readonly userInitials = computed(() => {
    const name = this.userName();
    return name
      .split(' ')
      .slice(0, 2)
      .map((s) => s[0])
      .join('')
      .toUpperCase();
  });

  // ─── Computed derived data ────────────────────────────────────────

  stats = computed(() => {
    const s = this.dashboardData()?.stats;
    if (!s) return [];
    return [
      {
        label: 'Postulaciones activas',
        value: String(s.postulaciones_activas),
      },
      {
        label: 'Coincidencia promedio',
        value: String(Math.round(s.match_promedio)),
        suffix: '%',
      },
      {
        label: 'Pruebas completadas',
        value: String(s.pruebas_completadas),
      },
      {
        label: 'Vistas a tu perfil',
        value: String(s.vistas_perfil),
      },
    ];
  });

  radarAxes = computed(() => {
    const r = this.dashboardData()?.radar;
    return r?.ejes ?? [
      'Psicométr.',
      'Cognitivo',
      'Técnico',
      'Proyectivo',
      'Trabajo eq.',
      'Liderazgo',
    ];
  });

  radarDatasets = computed(() => {
    const r = this.dashboardData()?.radar;
    if (r) {
      return [
        {
          values: r.perfil_actual.map((v) => v / 100),
          color: 'var(--brand-700)',
        },
        {
          values: r.perfil_ideal.map((v) => v / 100),
          color: 'var(--gold-600)',
          fillOpacity: 0,
        },
      ];
    }
    // Fallback mock
    return [
      { values: [0.82, 0.74, 0.91, 0.66, 0.78, 0.58], color: 'var(--brand-700)' },
      { values: [0.7, 0.7, 0.85, 0.7, 0.75, 0.7], color: 'var(--gold-600)', fillOpacity: 0 },
    ];
  });

  radarScoreActual = computed(() => {
    const r = this.dashboardData()?.radar;
    if (!r) return 74;
    const avg =
      r.perfil_actual.reduce((a, b) => a + b, 0) / r.perfil_actual.length;
    return Math.round(avg);
  });

  radarScoreIdeal = computed(() => {
    const r = this.dashboardData()?.radar;
    if (!r) return 76;
    const avg =
      r.perfil_ideal.reduce((a, b) => a + b, 0) / r.perfil_ideal.length;
    return Math.round(avg);
  });

  pendingTests = computed(() => {
    const tests = this.dashboardData()?.evaluacionesPendientes ?? [];
    return tests.map((t) => ({
      ...t,
      cat: this.normalizeCat(t.tipo_prueba),
      minsStr: t.duracion_min + ' min',
    }));
  });

  private normalizeCat(tipo: string): string {
    const map: Record<string, string> = {
      cognitiva: 'Cognitiva',
      tecnica: 'Técnica',
      proyectiva: 'Proyectiva',
      psicométrica: 'Psicométrica',
    };
    return map[tipo.toLowerCase()] ?? tipo;
  }

  recommendedJobs = computed<VacanteRecomendada[]>(() => {
    return this.dashboardData()?.vacantesRecomendadas ?? [];
  });

  postulaciones = computed<PostulacionEstado[]>(() => {
    return this.dashboardData()?.postulaciones ?? [];
  });

  completitudPerfil = computed(() => {
    const stats = this.dashboardData()?.stats;
    // Estimate based on data completeness
    if (!stats) return 0;
    let score = 50; // base
    if (stats.pruebas_completadas > 0) score += 10;
    if (stats.postulaciones_activas > 0) score += 10;
    if (stats.vistas_perfil > 0) score += 10;
    return Math.min(score, 100);
  });

  pendingCount = computed(() => this.pendingTests().length);

  // ─── Helpers for template ─────────────────────────────────────────

  getEtapaChip(estatus: string): 'ok' | 'warn' | 'err' | 'info' | 'outline' {
    return ETAPA_CHIP[estatus] ?? 'outline';
  }

  getEtapaLabel(estatus: string): string {
    return ETAPA_LABEL[estatus] ?? estatus;
  }

  getCompanyInitials(company: string): string {
    return company
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  formatSalary(min?: number, max?: number): string {
    if (!min && !max) return 'No especificado';
    if (min && max) return `$${min.toLocaleString()} - ${max.toLocaleString()}`;
    if (min) return `Desde $${min.toLocaleString()}`;
    return `Hasta $${max!.toLocaleString()}`;
  }

  // ─── Lifecycle ────────────────────────────────────────────────────

  ngOnInit(): void {
    this.cargarDashboard();
  }

  cargarDashboard(): void {
    this.loading.set(true);
    this.error.set(null);

    this.dashboard.getDashboardData().subscribe({
      next: (data) => {
        console.log('[Inicio] Dashboard data loaded:', {
          stats: data.stats,
          radar: data.radar,
          evaluaciones: data.evaluacionesPendientes.length,
          vacantes: data.vacantesRecomendadas.length,
          postulaciones: data.postulaciones.length,
        });

        // Check if all data is empty (likely auth failure)
        const allEmpty =
          !data.stats &&
          !data.radar &&
          data.evaluacionesPendientes.length === 0 &&
          data.vacantesRecomendadas.length === 0 &&
          data.postulaciones.length === 0;

        if (allEmpty) {
          this.error.set(
            'No se pudieron cargar los datos del dashboard. Verificá que estés logueado y que el backend esté corriendo.'
          );
        }

        this.dashboardData.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('[Inicio] Error loading dashboard:', err);
        this.error.set('No se pudo cargar el dashboard. Intenta de nuevo.');
        this.loading.set(false);
      },
    });
  }

  // ─── Actions ──────────────────────────────────────────────────────

  onNavigateToOfertas(): void {
    this.router.navigate(['/ofertas']);
  }

  onNavigateToEvaluaciones(): void {
    this.router.navigate(['/evaluaciones']);
  }

  onNavigateToPostulaciones(): void {
    this.router.navigate(['/mis-postulaciones']);
  }

  onNavigateToPerfil(): void {
    this.router.navigate(['/mi-perfil']);
  }

  onIniciarTest(testId: number): void {
    this.router.navigate(['/evaluaciones'], {
      queryParams: { iniciar: testId },
    });
  }

  onPostular(vacanteId: number): void {
    this.router.navigate(['/ofertas', vacanteId]);
  }
}
