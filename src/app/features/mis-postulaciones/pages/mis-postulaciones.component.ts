import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { PostulacionesService, Postulacion, statusConfig } from '../services/postulaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-postulaciones',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './mis-postulaciones.component.html',
  styleUrl: './mis-postulaciones.component.css'
})
export class MisPostulacionesComponent implements OnInit {

  service = inject(PostulacionesService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);

  // Props simples (no signals)
  postulaciones: Postulacion[] = [];
  cargando = false;
  error: string | null = null;
  viewMode: 'grid' | 'list' = 'grid';

  ngOnInit(): void {
    this.loadPostulaciones();
  }

  loadPostulaciones(): void {
    this.service.cargarPostulaciones().subscribe(() => {
      this.postulaciones = this.service.postulaciones;
      this.cargando = this.service.cargando;
      this.error = this.service.error;
      console.log('[COMPONENT] Postulaciones:', this.postulaciones);
      this.cdr.detectChanges();
    });
  }

  getStatusConfig(estatus: Postulacion['estatus']) {
    return statusConfig[estatus] || { label: estatus, chipClass: '' };
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  getCompanyInitials(company: string): string {
    return company.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  }

  cancelar(postulacion: Postulacion): void {
    Swal.fire({
      title: '¿Cancelar postulación?',
      html: `Vas a cancelar tu postulación a <b>${postulacion.vacante_titulo}</b> en <b>${postulacion.empresa}</b>.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, mantener',
      confirmButtonColor: '#b03434',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.cancelarPostulacion(postulacion.vacante_id).subscribe({
          next: () => {
            Swal.fire({ title: 'Postulación cancelada', text: 'Tu postulación ha sido cancelada correctamente.', icon: 'success', confirmButtonColor: '#0f6b34' });
            this.loadPostulaciones();
          },
          error: (err) => {
            let msg = 'Ocurrió un error al cancelar.';
            if (err?.status === 400) msg = 'Solo se pueden cancelar postulaciones pendientes.';
            else if (err?.error?.error) msg = err.error.error;
            Swal.fire({ title: 'Error', text: msg, icon: 'error', confirmButtonColor: '#0f6b34' });
          }
        });
      }
    });
  }

  verVacante(postulacion: Postulacion): void {
    this.router.navigate(['/ofertas', postulacion.vacante_id]);
  }

  recargar(): void {
    this.loadPostulaciones();
  }
}
