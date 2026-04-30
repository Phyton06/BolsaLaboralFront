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
  
  // Injección del servicio de vacantes
  vacantesService = inject(VacantesService);
  
  // Alias para usar en el template
  jobsList = this.vacantesService.vacantes;
  cargando = this.vacantesService.cargando;
  error = this.vacantesService.error;

  // Mapping de propiedades para el template
  getJobList(): VacanteDisplay[] {
    return this.jobsList();
  }

  locations = signal<string[]>(['Tepic', 'Bahía de Banderas', 'Compostela', 'Nayarit (todo)', 'Nacional', 'Remoto']);
  selectedLocations = signal<string[]>([]);

  areas = signal<string[]>(['Tecnologías de la Información', 'Ing. de Procesos', 'Administración', 'Mantenimiento Industrial', 'Turismo', 'Mecatrónica']);
  selectedAreas = signal<string[]>([]);

  minMatch = signal<number>(70);

  sources = signal<{label:string, checked:boolean, source:'Convenio UT' | 'DENUE' | 'Externo'}[]>([
    { label:'Convenio UT', checked:true, source:'Convenio UT' },
    { label:'Externas', checked:true, source:'DENUE' },
  ]);

  viewMode = signal<'grid' | 'list'>('grid');

  // Inicializar
  ngOnInit(): void {
    this.vacantesService.cargarVacantes();
  }

  filteredJobs = computed(() => {
    // Los filtros ya se aplican en el servicio
    return this.jobsList();
  });

  getCompanyInitials(empresa: string | undefined): string {
    if (!empresa) return '??';
    return empresa.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
  }

  getMatchColor(match: number): string {
    if (match >= 85) return 'var(--ok-600)';
    if (match >= 75) return 'var(--brand-600)';
    return 'var(--gold-600)';
  }

  toggleLocation(loc: string): void {
    this.selectedLocations.update(list =>
      list.includes(loc) ? list.filter(l => l !== loc) : [...list, loc]
    );
  }

  toggleArea(area: string): void {
    this.selectedAreas.update(list =>
      list.includes(area) ? list.filter(a => a !== area) : [...list, area]
    );
  }

  toggleSource(index: number): void {
    this.sources.update(sources => {
      const newSources = sources.map((s, i) => 
        i === index ? { ...s, checked: !s.checked } : s
      );
      // Actualizar filtros en el servicio
      this.vacantesService.aplicarFiltros({
        incluirConvenio: newSources[0].checked,
        incluirDenue: newSources[1].checked
      });
      return newSources;
    });
  }

  readonly user = { name: 'Juan Pérez', initials: 'JP' };

  clearFilters(): void {
    this.selectedLocations.set([]);
    this.selectedAreas.set([]);
    this.minMatch.set(70);
    this.sources.set([
      { label:'Convenio UT', checked:true, source:'Convenio UT' },
      { label:'Externas', checked:true, source:'DENUE' },
    ]);
    this.vacantesService.limpiarFiltros();
  }

  recargar(): void {
    this.vacantesService.cargarVacantes();
  }
}
