import { Component, signal, computed, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { VacantesService, VacanteDisplay } from './services/vacantes.service';
import { VacantesApiService } from './services/vacantes-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ofertas-list',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './ofertas-list.component.html',
  styleUrl: './ofertas-list.component.css'
})
export class OfertasListComponent implements OnInit {

  vacantesService = inject(VacantesService);
  vacantesApi = inject(VacantesApiService);

  jobsList = this.vacantesService.vacantes;
  cargando = this.vacantesService.cargando;
  error = this.vacantesService.error;

  // Opciones de filtros (del backend)
  ubicaciones = this.vacantesService.ubicaciones;

  // Filtros locales
  selectedUbicacion = signal<string>('Sin preferencia');
  selectedSource = signal<'Convenio UT' | 'Externas' | 'both'>('both');
  minMatch = signal<number>(0);

  viewMode = signal<'grid' | 'list'>('grid');

  ngOnInit(): void {
    this.vacantesService.cargarFiltrosYPerfil();
    this.vacantesService.cargarVacantes();
  }

  // Filtra los datos CARGADOS del backend (filtro client-side)
  filteredJobs = computed(() => {
    let jobs = this.jobsList();
    const ub = this.selectedUbicacion();
    const src = this.selectedSource();
    const mm = this.minMatch();

    // Filtrar por ubicación geográfica (solo si no es "Sin preferencia")
    if (ub !== 'Sin preferencia') {
      jobs = jobs.filter(j => {
        const loc = (j.loc || j.ubicacion || '').toLowerCase();
        return loc.includes(ub.toLowerCase());
      });
    }

    // Filtrar por fuente
    if (src === 'Convenio UT') {
      jobs = jobs.filter(j => j.src === 'Convenio UT');
    } else if (src === 'Externas') {
      jobs = jobs.filter(j => j.src !== 'Convenio UT');
    }

    // Filtrar por match mínimo
    if (mm > 0) {
      jobs = jobs.filter(j => j.match >= mm);
    }

    return jobs.sort((a, b) => b.match - a.match);
  });

  onUbicacionChange(ubicacion: string): void {
    this.selectedUbicacion.set(ubicacion);
    // Recargar Jooble con la nueva ubicación
    const location = ubicacion === 'Sin preferencia' ? 'Mexico' : ubicacion;
    this.vacantesService.cargarVacantes(location);
  }

  onSourceChange(source: 'Convenio UT' | 'Externas' | 'both'): void {
    this.selectedSource.set(source);
  }

  clearFilters(): void {
    this.selectedUbicacion.set('Sin preferencia');
    this.selectedSource.set('both');
    this.minMatch.set(0);
  }

  recargar(): void {
    this.vacantesService.cargarVacantes();
  }

  postularse(job: VacanteDisplay): void {
    // Ya postulado → no hacer nada
    if (job.yaPostulado) return;

    // Vacante externa (Jooble) → abrir URL en nueva pestaña
    if (job.src !== 'Convenio UT') {
      const url = job.url_externa || job.url || '';
      if (!url) {
        Swal.fire({
          title: 'Sin URL disponible',
          text: 'Esta vacante no tiene un enlace externo disponible.',
          icon: 'warning',
          confirmButtonColor: '#0f6b34',
        });
        return;
      }

      Swal.fire({
        title: 'Postularse',
        html: `Serás redirigido al sitio de <b>${job.company}</b> para completar tu postulación.`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#0f6b34',
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      });
      return;
    }

    // Vacante de Convenio UT → postular en la DB
    Swal.fire({
      title: '¿Estás seguro?',
      html: `Quieres postularte a <b>${job.title}</b> en <b>${job.company}</b>.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, postularme',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#0f6b34',
    }).then((result) => {
      if (result.isConfirmed) {
        this.vacantesApi.postular(job.id).subscribe({
          next: () => {
            Swal.fire({
              title: '¡Postulación enviada!',
              text: 'Te has postulado correctamente a esta vacante.',
              icon: 'success',
              confirmButtonColor: '#0f6b34',
            });
          },
          error: (err) => {
            console.error('Error al postular:', err);
            let msg = 'Ocurrió un error al postular.';

            // Detectar errores específicos
            if (err?.status === 401) {
              msg = 'Debes iniciar sesión para postularte.';
            } else if (err?.status === 403) {
              msg = 'Solo los egresados pueden postularse a vacantes de Convenio UT.';
            } else if (err?.error?.error) {
              msg = err.error.error;
            } else if (err?.error?.message) {
              msg = err.error.message;
            } else if (err?.error?.data?.message) {
              msg = err.error.data.message;
            }

            Swal.fire({
              title: 'Error',
              text: msg,
              icon: 'error',
              confirmButtonColor: '#0f6b34',
            });
          }
        });
      }
    });
  }
}