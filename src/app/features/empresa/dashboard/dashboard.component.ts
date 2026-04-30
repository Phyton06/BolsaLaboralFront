import { Component, OnInit, inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';
import { StatComponent } from '../../../shared/components/stat/stat.component';
import { BarChartComponent } from '../../../shared/components/charts/bar-chart.component';
import { FunnelComponent } from '../../../shared/components/funnel/funnel.component';
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { EmpresaService, EmpresaStats, EmpresaVacante } from '../services/empresa.service';

@Component({
  selector: 'app-empresa-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, StatComponent, BarChartComponent, FunnelComponent, ChipComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class EmpresaDashboardComponent implements OnInit {

  empresaService = inject(EmpresaService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);

  stats: EmpresaStats = {
    vacantes_activas: 0,
    total_postulantes: 0,
    entrevistas_pendientes: 0,
    postulaciones_por_estatus: { pendiente: 0, revisada: 0, aceptada: 0, rechazada: 0 },
    promedio_match: 0,
  };
  vacantes: EmpresaVacante[] = [];
  cargando = true;
  error: string | null = null;

  // Para gráficos
  barData: { l: string; v: number }[] = [];
  funnelStages: { l: string; v: number; p: number }[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.cargando = true;
    this.error = null;

    forkJoin({
      stats: this.empresaService.getDashboardStats(),
      vacantes: this.empresaService.getMisVacantes()
    }).subscribe({
      next: ({ stats, vacantes }: { stats: EmpresaStats; vacantes: EmpresaVacante[] }) => {
        this.stats = stats;
        this.vacantes = vacantes;

        // Preparar datos para gráfico de barras
        this.barData = vacantes.slice(0, 6).map((v: EmpresaVacante) => ({
          l: v.titulo.length > 18 ? v.titulo.substring(0, 18) + '...' : v.titulo,
          v: v.postulantes_count
        }));

        // Preparar funnel
        const total = stats.total_postulantes;
        const porEstatus = stats.postulaciones_por_estatus;
        this.funnelStages = [
          { l: 'Postulados', v: total, p: 100 },
          { l: 'En revisión', v: porEstatus.revisada, p: total ? Math.round(porEstatus.revisada / total * 100) : 0 },
          { l: 'Aceptados', v: porEstatus.aceptada, p: total ? Math.round(porEstatus.aceptada / total * 100) : 0 },
          { l: 'Rechazados', v: porEstatus.rechazada, p: total ? Math.round(porEstatus.rechazada / total * 100) : 0 },
        ];

        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('[DASHBOARD] Error:', err);
        this.error = 'Error al cargar datos del dashboard';
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  getVacanteStatus(vacante: EmpresaVacante): { label: string; chipClass: string } {
    if (vacante.postulantes_count === 0) return { label: 'Sin postulantes', chipClass: 'outline' };
    if (vacante.postulantes_count < 5) return { label: 'Pocos postulantes', chipClass: 'warn' };
    return { label: 'Activa', chipClass: 'ok' };
  }

  verPostulantes(vacanteId: number): void {
    this.router.navigate(['/empresa/candidatos'], { queryParams: { vacante: vacanteId } });
  }

  recargar(): void {
    this.loadData();
  }
}
