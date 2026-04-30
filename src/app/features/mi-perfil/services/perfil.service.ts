import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, forkJoin, map, of, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { EgresadoApiService } from './egresado-api.service';
import {
  BiografiaOptimizada,
  ContactoEgresado,
  PerfilEgresado,
  RecomendacionesIA,
  StatsEgresado,
} from '../interfaces/perfil-egresado';
import { HabilidadesEgresado } from '../interfaces/habilidades-egresado';
import { TrayectoriaEntry } from '../interfaces/trayectoria-entry';

/**
 * Capa de estado (signals) para el perfil del egresado.
 * Orquesta las llamadas a EgresadoApiService y mantiene el estado reactivo.
 */
@Injectable({ providedIn: 'root' })
export class PerfilService {
  private readonly api = inject(EgresadoApiService);

  // ─── Core state ───────────────────────────────────────────────────

  perfil = signal<PerfilEgresado | null>(null);
  stats = signal<StatsEgresado | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  // ─── Edit states per section (independent) ────────────────────────

  editContacto = signal<boolean>(false);
  editBiografia = signal<boolean>(false);
  editTrayectoria = signal<boolean>(false);

  // ─── AI state ─────────────────────────────────────────────────────

  aiOptimizing = signal<boolean>(false);
  aiResult = signal<BiografiaOptimizada | null>(null);
  aiReviewOpen = signal<boolean>(false);

  // ─── Recommendations ──────────────────────────────────────────────

  recomendaciones = signal<RecomendacionesIA | null>(null);
  loadingRecomendaciones = signal<boolean>(false);

  // ─── Photo upload state ───────────────────────────────────────────

  photoUploading = signal<boolean>(false);

  // ─── Computed signals ─────────────────────────────────────────────

  nombreCompleto = computed(() => {
    const p = this.perfil();
    if (!p) return '';
    return `${p.nombre} ${p.apellido_paterno} ${p.apellido_materno}`.trim();
  });

  iniciales = computed(() => {
    const p = this.perfil();
    if (!p) return '?';
    const parts = [p.nombre, p.apellido_paterno, p.apellido_materno].filter(Boolean);
    return parts
      .slice(0, 2)
      .map((s) => s[0])
      .join('')
      .toUpperCase();
  });

  completitud = computed(() => {
    const p = this.perfil();
    if (!p) return 0;
    let filled = 0;
    const total = 7;
    if (p.carrera) filled++;
    if (p.division) filled++;
    if (p.periodo_egreso) filled++;
    if (p.contacto?.telefono || p.contacto?.correo_personal || p.contacto?.linkedin) filled++;
    if (p.biografia_ia) filled++;
    if (p.trayectoria?.length) filled++;
    if (
      p.habilidades &&
      (p.habilidades.tecnicas.length ||
        p.habilidades.blandas.length ||
        p.habilidades.idiomas.length)
    )
      filled++;
    return Math.round((filled / total) * 100);
  });

  // ─── Load methods ─────────────────────────────────────────────────

  cargarPerfil(): void {
    this.loading.set(true);
    this.error.set(null);

    forkJoin({
      perfil: this.api.getPerfil(),
      stats: this.api.getStats(),
    }).subscribe({
      next: ({ perfil, stats }) => {
        this.perfil.set(perfil);
        this.stats.set(stats);
        this.loading.set(false);
        if (!perfil) {
          this.error.set('No se pudo cargar el perfil. Intenta de nuevo.');
        }
      },
      error: () => {
        this.error.set('No se pudo cargar el perfil. Intenta de nuevo.');
        this.loading.set(false);
      },
    });
  }

  cargarRecomendaciones(): void {
    this.loadingRecomendaciones.set(true);
    this.api.getRecomendaciones().subscribe({
      next: (data) => {
        this.recomendaciones.set(data);
        this.loadingRecomendaciones.set(false);
      },
      error: () => {
        this.recomendaciones.set(null);
        this.loadingRecomendaciones.set(false);
      },
    });
  }

  // ─── Save methods ─────────────────────────────────────────────────

  guardarContacto(contacto: ContactoEgresado): void {
    this.api.updateContacto(contacto).subscribe({
      next: (updated) => {
        this.perfil.update((p) => (p ? { ...p, contacto: updated } : p));
        this.editContacto.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Contacto actualizado',
          timer: 2000,
          showConfirmButton: false,
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error al guardar',
          text: 'No se pudo actualizar el contacto. Intenta de nuevo.',
        });
      },
    });
  }

  guardarBiografia(biografia: string): void {
    this.api.updateBiografia(biografia).subscribe({
      next: () => {
        this.perfil.update((p) => (p ? { ...p, biografia_ia: biografia } : p));
        this.editBiografia.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Biografía actualizada',
          timer: 2000,
          showConfirmButton: false,
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error al guardar',
          text: 'No se pudo actualizar la biografía. Intenta de nuevo.',
        });
      },
    });
  }

  guardarTrayectoria(trayectoria: TrayectoriaEntry[]): void {
    this.api.updateTrayectoria(trayectoria).subscribe({
      next: () => {
        this.perfil.update((p) => (p ? { ...p, trayectoria } : p));
        this.editTrayectoria.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Trayectoria actualizada',
          timer: 2000,
          showConfirmButton: false,
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error al guardar',
          text: 'No se pudo actualizar la trayectoria. Intenta de nuevo.',
        });
      },
    });
  }

  guardarHabilidades(habilidades: HabilidadesEgresado): void {
    this.api.updateHabilidades(habilidades).subscribe({
      next: () => {
        this.perfil.update((p) => (p ? { ...p, habilidades } : p));
        Swal.fire({
          icon: 'success',
          title: 'Habilidades actualizadas',
          timer: 2000,
          showConfirmButton: false,
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error al guardar',
          text: 'No se pudo actualizar las habilidades. Intenta de nuevo.',
        });
      },
    });
  }

  // ─── AI methods ───────────────────────────────────────────────────

  optimizarBiografia(): void {
    const p = this.perfil();
    if (!p) return;
    this.aiOptimizing.set(true);
    this.api.optimizarBiografia(p.biografia_ia || '').subscribe({
      next: (result) => {
        this.aiResult.set(result);
        this.aiReviewOpen.set(true);
        this.aiOptimizing.set(false);
      },
      error: () => {
        this.aiOptimizing.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Error de IA',
          text: 'No se pudo optimizar la biografía. Intenta de nuevo.',
        });
      },
    });
  }

  aplicarBiografiaOptimizada(): void {
    const result = this.aiResult();
    if (!result) return;
    this.perfil.update((p) =>
      p ? { ...p, biografia_ia: result.biografia_optimizada } : p
    );
    this.aiReviewOpen.set(false);
    this.aiResult.set(null);
  }

  descartarBiografiaOptimizada(): void {
    this.aiReviewOpen.set(false);
    this.aiResult.set(null);
  }

  // ─── Photo methods ────────────────────────────────────────────────

  subirFoto(file: File): void {
    this.photoUploading.set(true);
    this.api.uploadFoto(file).subscribe({
      next: (data) => {
        this.perfil.update((p) => (p ? { ...p, foto_url: data.foto_url } : p));
        this.photoUploading.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Foto actualizada',
          timer: 2000,
          showConfirmButton: false,
        });
      },
      error: () => {
        this.photoUploading.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Error al subir foto',
          text: 'No se pudo subir la imagen. Intenta de nuevo.',
        });
      },
    });
  }
}
