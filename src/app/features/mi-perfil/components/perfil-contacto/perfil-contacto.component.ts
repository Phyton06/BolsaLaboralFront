import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoEgresado } from '../../interfaces/perfil-egresado';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './perfil-contacto.component.html',
  styleUrl: './perfil-contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilContactoComponent {
  readonly contacto = input.required<ContactoEgresado | null>();
  readonly isEditing = input<boolean>(false);
  readonly saving = input<boolean>(false);

  readonly edit = output<void>();
  readonly cancel = output<void>();
  readonly save = output<ContactoEgresado>();

  // Local edit state
  telefono = signal('');
  correoPersonal = signal('');
  linkedin = signal('');

  // Validation errors
  errors = signal<Record<string, string>>({});

  hasChanges = computed(() => {
    const c = this.contacto();
    return (
      this.telefono() !== (c?.telefono ?? '') ||
      this.correoPersonal() !== (c?.correo_personal ?? '') ||
      this.linkedin() !== (c?.linkedin ?? '')
    );
  });

  onEdit(): void {
    const c = this.contacto();
    this.telefono.set(c?.telefono ?? '');
    this.correoPersonal.set(c?.correo_personal ?? '');
    this.linkedin.set(c?.linkedin ?? '');
    this.errors.set({});
    this.edit.emit();
  }

  onCancel(): void {
    this.errors.set({});
    this.cancel.emit();
  }

  onSave(): void {
    if (!this.validate()) return;

    this.save.emit({
      telefono: this.telefono() || null,
      correo_personal: this.correoPersonal() || null,
      linkedin: this.linkedin() || null,
    });
  }

  private validate(): boolean {
    const errs: Record<string, string> = {};
    const tel = this.telefono();
    const email = this.correoPersonal();
    const li = this.linkedin();

    if (tel && !/^\+?[0-9\s\-]{7,15}$/.test(tel)) {
      errs['telefono'] = 'Formato no válido (7-15 dígitos)';
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs['correo'] = 'Correo electrónico no válido';
    }

    if (li && !/^https:\/\/(www\.)?linkedin\.com\/.+/.test(li)) {
      errs['linkedin'] = 'Debe comenzar con https://linkedin.com/';
    }

    this.errors.set(errs);
    return Object.keys(errs).length === 0;
  }

  fieldError(field: string): string | null {
    return this.errors()[field] ?? null;
  }
}
