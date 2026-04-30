import { Component, signal, computed, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ChipComponent } from '../../shared/components/chip/chip.component';
import { VacantesService, VacanteDisplay } from './services/vacantes.service';

@Component({
  selector: 'app-ofertas-list',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, ChipComponent],
  templateUrl: './ofertas-list.component.html',
  styleUrl: './ofertas-list.component.css'
})
export class OfertasListComponent implements OnInit {
  
  vacantesService = inject(VacantesService);
  
  jobsList = this.vacantesService.vacantes;
  cargando = this.vacantesService.cargando;
  error = this.vacantesService.error;
  
  // Opciones de filtros
  ubicaciones = this.vacantesService.ubicaciones;
  modalidades = this.vacantesService.modalidades;
  
  // Filtros locales
  selectedUbicacion = signal<string>('Nayarit');
  selectedModalidad = signal<string>('Sin preferencia');
  selectedSource = signal<'Convenio UT' | 'Externas' | 'both'>('both');
  minMatch = signal<number>(70);
  
  viewMode = signal<'grid' | 'list'>('grid');

  ngOnInit(): void {
    this.vacantesService.cargarFiltrosYPerfil();
    this.vacantesService.cargarVacantes();
  }

  filteredJobs = computed(() => this.jobsList());

  aplicarFiltros(): void {
    const filtros: any = { minMatch: this.minMatch() };
    
    if (this.selectedUbicacion()) {
      filtros.ubicacion = this.selectedUbicacion();
    }
    
    if (this.selectedModalidad()) {
      filtros.modalidad = this.selectedModalidad();
    }
    
    if (this.selectedSource() === 'Convenio UT') {
      filtros.incluirConvenio = true;
      filtros.incluirDenue = false;
    } else if (this.selectedSource() === 'Externas') {
      filtros.incluirConvenio = false;
      filtros.incluirDenue = true;
    } else {
      filtros.incluirConvenio = true;
      filtros.incluirDenue = true;
    }
    
    this.vacantesService.aplicarFiltros(filtros);
  }

  onUbicacionChange(ubicacion: string): void {
    this.selectedUbicacion.set(ubicacion);
    this.aplicarFiltros();
  }

  onModalidadChange(modalidad: string): void {
    this.selectedModalidad.set(modalidad);
    this.aplicarFiltros();
  }

  onSourceChange(source: 'Convenio UT' | 'Externas' | 'both'): void {
    this.selectedSource.set(source);
    this.aplicarFiltros();
  }

  clearFilters(): void {
    this.selectedUbicacion.set('Nayarit');
    this.selectedModalidad.set('Sin preferencia');
    this.selectedSource.set('both');
    this.minMatch.set(70);
    this.vacantesService.limpiarFiltros();
  }

  recargar(): void {
    this.vacantesService.cargarVacantes();
  }

  getCompanyInitials(empresa: string | undefined): string {
    if (!empresa) return '??';
    return empresa.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
  }

  getMatchColor(match: number): string {
    if (match >= 85) return 'var(--ok-600)';
    if (match >= 75) return 'var(--brand-600)';
    return 'var(--gold-600)';
  }
}