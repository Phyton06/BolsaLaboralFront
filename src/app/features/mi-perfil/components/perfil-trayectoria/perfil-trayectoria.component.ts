import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';
import { TrayectoriaEntry, TipoTrayectoria } from '../../interfaces/trayectoria-entry';

const TIPO_LABELS: Record<TipoTrayectoria, string> = {
  practicas: 'Prácticas',
  trabajo: 'Trabajo',
  voluntariado: 'Voluntariado',
  otro: 'Otro',
};

const TIPO_CHIP: Record<TipoTrayectoria, 'info' | 'brand' | 'ok' | 'outline'> = {
  practicas: 'info',
  trabajo: 'brand',
  voluntariado: 'ok',
  otro: 'outline',
};

@Component({
  selector: 'app-perfil-trayectoria',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, ChipComponent],
  templateUrl: './perfil-trayectoria.component.html',
  styleUrl: './perfil-trayectoria.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilTrayectoriaComponent {
  readonly trayectoria = input<TrayectoriaEntry[] | null>(null);
  readonly isEditing = input<boolean>(false);
  readonly saving = input<boolean>(false);

  readonly edit = output<void>();
  readonly cancel = output<void>();
  readonly save = output<TrayectoriaEntry[]>();

  localTrayectoria = signal<TrayectoriaEntry[]>([]);

  // New entry form
  newTipo = signal<TipoTrayectoria>('practicas');
  newEmpresa = signal('');
  newDescripcion = signal('');
  newFecha = signal('');
  showAddForm = signal(false);

  // Editing entry index
  editingIndex = signal<number | null>(null);

  readonly tipoLabels = TIPO_LABELS;
  readonly tipoChip = TIPO_CHIP;
  readonly tipos: TipoTrayectoria[] = ['practicas', 'trabajo', 'voluntariado', 'otro'];

  onEdit(): void {
    this.localTrayectoria.set([...(this.trayectoria() ?? [])]);
    this.edit.emit();
  }

  onCancel(): void {
    this.showAddForm.set(false);
    this.editingIndex.set(null);
    this.cancel.emit();
  }

  onSave(): void {
    const entries = this.localTrayectoria().filter((e) => e.empresa.trim());
    this.save.emit(entries);
  }

  addEntry(): void {
    const empresa = this.newEmpresa().trim();
    const fecha = this.newFecha().trim();
    if (!empresa || !fecha) return;

    const entry: TrayectoriaEntry = {
      tipo: this.newTipo(),
      empresa,
      descripcion: this.newDescripcion().trim(),
      fecha,
    };

    this.localTrayectoria.update((arr) => [...arr, entry]);
    this.resetNewForm();
  }

  removeEntry(index: number): void {
    this.localTrayectoria.update((arr) => arr.filter((_, i) => i !== index));
  }

  startEditEntry(index: number): void {
    this.editingIndex.set(index);
  }

  saveEditEntry(index: number): void {
    this.editingIndex.set(null);
  }

  resetNewForm(): void {
    this.newEmpresa.set('');
    this.newDescripcion.set('');
    this.newFecha.set('');
    this.showAddForm.set(false);
  }

  sortedEntries(): TrayectoriaEntry[] {
    return [...(this.localTrayectoria() ?? [])].sort(
      (a, b) => b.fecha.localeCompare(a.fecha)
    );
  }
}
