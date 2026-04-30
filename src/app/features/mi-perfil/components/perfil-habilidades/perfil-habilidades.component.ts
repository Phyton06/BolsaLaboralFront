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
import { HabilidadesEgresado } from '../../interfaces/habilidades-egresado';

type CategoriaKey = 'tecnicas' | 'blandas' | 'idiomas';

const CATEGORIA_LABELS: Record<CategoriaKey, string> = {
  tecnicas: 'Técnicas',
  blandas: 'Blandas',
  idiomas: 'Idiomas',
};

const CATEGORIA_ICONS: Record<CategoriaKey, string> = {
  tecnicas: 'grid',
  blandas: 'users',
  idiomas: 'book',
};

@Component({
  selector: 'app-perfil-habilidades',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, ChipComponent],
  templateUrl: './perfil-habilidades.component.html',
  styleUrl: './perfil-habilidades.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilHabilidadesComponent {
  readonly habilidades = input<HabilidadesEgresado | null>(null);
  readonly saving = input<boolean>(false);

  readonly change = output<HabilidadesEgresado>();

  localHabilidades = signal<HabilidadesEgresado>({
    tecnicas: [],
    blandas: [],
    idiomas: [],
  });

  newInputs = signal<Record<CategoriaKey, string>>({
    tecnicas: '',
    blandas: '',
    idiomas: '',
  });

  readonly categoriaLabels = CATEGORIA_LABELS;
  readonly categoriaIcons = CATEGORIA_ICONS;
  readonly categorias: CategoriaKey[] = ['tecnicas', 'blandas', 'idiomas'];

  onInit(): void {
    const h = this.habilidades();
    this.localHabilidades.set({
      tecnicas: [...(h?.tecnicas ?? [])],
      blandas: [...(h?.blandas ?? [])],
      idiomas: [...(h?.idiomas ?? [])],
    });
  }

  ngOnChanges(): void {
    // Sync when input changes from parent
    const h = this.habilidades();
    if (h) {
      this.localHabilidades.set({
        tecnicas: [...h.tecnicas],
        blandas: [...h.blandas],
        idiomas: [...h.idiomas],
      });
    }
  }

  addSkill(cat: CategoriaKey): void {
    const val = this.newInputs()[cat].trim();
    if (!val) return;

    const current = this.localHabilidades()[cat];
    if (current.includes(val)) return; // No duplicates

    this.localHabilidades.update((h) => ({
      ...h,
      [cat]: [...h[cat], val],
    }));

    this.newInputs.update((n) => ({ ...n, [cat]: '' }));

    // Auto-save
    this.emitChange();
  }

  removeSkill(cat: CategoriaKey, index: number): void {
    this.localHabilidades.update((h) => ({
      ...h,
      [cat]: h[cat].filter((_, i) => i !== index),
    }));

    // Auto-save
    this.emitChange();
  }

  onEnter(cat: CategoriaKey, event: Event): void {
    event.preventDefault();
    this.addSkill(cat);
  }

  private emitChange(): void {
    const h = this.localHabilidades();
    if (h.tecnicas.length || h.blandas.length || h.idiomas.length) {
      this.change.emit({ ...h });
    }
  }
}
