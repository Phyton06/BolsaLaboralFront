import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { PerfilService } from './services/perfil.service';
import { PerfilHeaderComponent } from './components/perfil-header/perfil-header.component';
import { PerfilStatsComponent } from './components/perfil-stats/perfil-stats.component';
import { PerfilContactoComponent } from './components/perfil-contacto/perfil-contacto.component';
import { PerfilBiografiaComponent } from './components/perfil-biografia/perfil-biografia.component';
import { PerfilTrayectoriaComponent } from './components/perfil-trayectoria/perfil-trayectoria.component';
import { PerfilHabilidadesComponent } from './components/perfil-habilidades/perfil-habilidades.component';
import { PerfilRecomendacionesComponent } from './components/perfil-recomendaciones/perfil-recomendaciones.component';
import { PerfilCvPreviewComponent } from './components/perfil-cv-preview/perfil-cv-preview.component';
import { ContactoEgresado } from './interfaces/perfil-egresado';
import { HabilidadesEgresado } from './interfaces/habilidades-egresado';
import { TrayectoriaEntry } from './interfaces/trayectoria-entry';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    PerfilHeaderComponent,
    PerfilStatsComponent,
    PerfilContactoComponent,
    PerfilBiografiaComponent,
    PerfilTrayectoriaComponent,
    PerfilHabilidadesComponent,
    PerfilRecomendacionesComponent,
    PerfilCvPreviewComponent,
  ],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiPerfilComponent implements OnInit {
  private readonly perfilService = inject(PerfilService);

  readonly perfil = this.perfilService.perfil;
  readonly stats = this.perfilService.stats;
  readonly loading = this.perfilService.loading;
  readonly error = this.perfilService.error;
  readonly completitud = this.perfilService.completitud;
  readonly photoUploading = this.perfilService.photoUploading;

  // Edit states
  readonly editContacto = this.perfilService.editContacto;
  readonly editBiografia = this.perfilService.editBiografia;
  readonly editTrayectoria = this.perfilService.editTrayectoria;

  // AI states
  readonly aiOptimizing = this.perfilService.aiOptimizing;
  readonly aiResult = this.perfilService.aiResult;
  readonly aiReviewOpen = this.perfilService.aiReviewOpen;

  // Recommendations
  readonly recomendaciones = this.perfilService.recomendaciones;
  readonly loadingRecomendaciones = this.perfilService.loadingRecomendaciones;

  // Local saving states
  savingContacto = signal(false);
  savingBiografia = signal(false);
  savingTrayectoria = signal(false);
  savingHabilidades = signal(false);
  generatingPdf = signal(false);

  ngOnInit(): void {
    this.perfilService.cargarPerfil();
    // Load recommendations after profile loads
    effect(() => {
      if (this.perfil()) {
        this.perfilService.cargarRecomendaciones();
      }
    });
  }

  onRetry(): void {
    this.perfilService.cargarPerfil();
  }

  // ─── Contacto ───────────────────────────────────────────────────

  onEditContacto(): void {
    this.editContacto.set(true);
  }

  onCancelContacto(): void {
    this.editContacto.set(false);
  }

  onSaveContacto(contacto: ContactoEgresado): void {
    this.savingContacto.set(true);
    this.perfilService.guardarContacto(contacto);
    // Reset saving state after a short delay (service handles the actual save)
    setTimeout(() => this.savingContacto.set(false), 2000);
  }

  // ─── Biografía ──────────────────────────────────────────────────

  onEditBiografia(): void {
    this.editBiografia.set(true);
  }

  onCancelBiografia(): void {
    this.editBiografia.set(false);
  }

  onSaveBiografia(biografia: string): void {
    this.savingBiografia.set(true);
    this.perfilService.guardarBiografia(biografia);
    setTimeout(() => this.savingBiografia.set(false), 2000);
  }

  onOptimizeBiografia(): void {
    this.perfilService.optimizarBiografia();
  }

  onApplyAiBiografia(): void {
    this.perfilService.aplicarBiografiaOptimizada();
  }

  onDiscardAiBiografia(): void {
    this.perfilService.descartarBiografiaOptimizada();
  }

  // ─── Trayectoria ────────────────────────────────────────────────

  onEditTrayectoria(): void {
    this.editTrayectoria.set(true);
  }

  onCancelTrayectoria(): void {
    this.editTrayectoria.set(false);
  }

  onSaveTrayectoria(trayectoria: TrayectoriaEntry[]): void {
    this.savingTrayectoria.set(true);
    this.perfilService.guardarTrayectoria(trayectoria);
    setTimeout(() => this.savingTrayectoria.set(false), 2000);
  }

  // ─── Habilidades ────────────────────────────────────────────────

  onChangeHabilidades(habilidades: HabilidadesEgresado): void {
    this.savingHabilidades.set(true);
    this.perfilService.guardarHabilidades(habilidades);
    setTimeout(() => this.savingHabilidades.set(false), 2000);
  }

  // ─── Photo ──────────────────────────────────────────────────────

  onFotoChange(file: File): void {
    this.perfilService.subirFoto(file);
  }

  // ─── PDF ────────────────────────────────────────────────────────

  onGeneratePdf(): void {
    this.generatingPdf.set(true);
    setTimeout(() => this.generatingPdf.set(false), 1000);
  }
}
