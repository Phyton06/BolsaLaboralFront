import { Component, OnInit, inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarComponent } from '../../../shared/components/avatar.component';
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { EmpresaService, Postulante } from '../services/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresa-candidatos',
  standalone: true,
  imports: [CommonModule, FormsModule, AvatarComponent, ChipComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './candidatos.component.html',
  styleUrl: './candidatos.component.css'
})
export class EmpresaCandidatosComponent implements OnInit {

  empresaService = inject(EmpresaService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);

  vacanteId: number | null = null;
  postulantes: Postulante[] = [];
  cargando = true;
  error: string | null = null;
  ordenarPor: 'match' | 'fecha' | 'nombre' = 'match';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.vacanteId = params['vacante'] ? +params['vacante'] : null;
      if (this.vacanteId) {
        this.loadPostulantes();
      }
    });
  }

  loadPostulantes(): void {
    if (!this.vacanteId) return;
    this.cargando = true;
    this.error = null;

    this.empresaService.getPostulantes(this.vacanteId).subscribe({
      next: (data) => {
        this.postulantes = data;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('[CANDIDATOS] Error:', err);
        this.error = 'Error al cargar postulantes';
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  getPostulantesFiltrados(): Postulante[] {
    let list = [...this.postulantes];
    if (this.ordenarPor === 'match') {
      list.sort((a, b) => b.match - a.match);
    } else if (this.ordenarPor === 'fecha') {
      list.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
    } else {
      list.sort((a, b) => a.alumno_nombre.localeCompare(b.alumno_nombre));
    }
    return list;
  }

  get pendientesCount(): number {
    return this.postulantes.filter(p => p.estatus === 'pendiente').length;
  }

  get revisadaCount(): number {
    return this.postulantes.filter(p => p.estatus === 'revisada').length;
  }

  get mejorMatch(): number {
    if (this.postulantes.length === 0) return 0;
    return Math.max(...this.postulantes.map(p => p.match));
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  getStatusConfig(estatus: Postulante['estatus']): { label: string; chipClass: string } {
    const map: Record<string, { label: string; chipClass: string }> = {
      pendiente: { label: 'Postulado', chipClass: 'outline' },
      revisada: { label: 'En revisión', chipClass: 'info' },
      aceptada: { label: 'Aceptado', chipClass: 'ok' },
      rechazada: { label: 'Rechazado', chipClass: 'err' },
    };
    return map[estatus] || { label: estatus, chipClass: '' };
  }

  cambiarEstatus(postulante: Postulante, nuevoEstatus: string): void {
    const labels: Record<string, string> = {
      revisada: 'En revisión',
      aceptada: 'Aceptado',
      rechazada: 'Rechazado'
    };

    Swal.fire({
      title: `¿Marcar como "${labels[nuevoEstatus]}"?`,
      html: `Vas a cambiar el estado de <b>${postulante.alumno_nombre}</b> a <b>${labels[nuevoEstatus]}</b>.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#0f6b34',
    }).then((result) => {
      if (result.isConfirmed) {
        this.empresaService.cambiarEstatus(postulante.id_postulacion, nuevoEstatus).subscribe({
          next: () => {
            Swal.fire({ title: 'Estado actualizado', icon: 'success', confirmButtonColor: '#0f6b34' });
            this.loadPostulantes();
          },
          error: (err) => {
            const msg = err?.error?.error || 'Error al actualizar estado';
            Swal.fire({ title: 'Error', text: msg, icon: 'error', confirmButtonColor: '#0f6b34' });
          }
        });
      }
    });
  }

  contactar(postulante: Postulante): void {
    Swal.fire({
      title: 'Contactar candidato',
      html: `Para contactar a <b>${postulante.alumno_nombre}</b>, utiliza el sistema de mensajería interna o su correo registrado.`,
      icon: 'info',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#0f6b34',
    });
  }

  volver(): void {
    this.router.navigate(['/empresa/dashboard']);
  }
}
