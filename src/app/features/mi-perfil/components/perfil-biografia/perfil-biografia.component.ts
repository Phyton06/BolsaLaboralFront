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
import { HighlightComponent } from '../../../../shared/components/highlight.component';

@Component({
  selector: 'app-perfil-biografia',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, HighlightComponent],
  templateUrl: './perfil-biografia.component.html',
  styleUrl: './perfil-biografia.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilBiografiaComponent {
  readonly biografia = input<string | null>(null);
  readonly isEditing = input<boolean>(false);
  readonly saving = input<boolean>(false);
  readonly aiOptimizing = input<boolean>(false);
  readonly aiResult = input<{ biografia_optimizada: string } | null>(null);
  readonly aiReviewOpen = input<boolean>(false);

  readonly edit = output<void>();
  readonly cancel = output<void>();
  readonly save = output<string>();
  readonly optimize = output<void>();
  readonly applyAi = output<void>();
  readonly discardAi = output<void>();

  localBiografia = signal('');

  onEdit(): void {
    this.localBiografia.set(this.biografia() ?? '');
    this.edit.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

  onSave(): void {
    const bio = this.localBiografia().trim();
    if (bio) {
      this.save.emit(bio);
    }
  }
}
