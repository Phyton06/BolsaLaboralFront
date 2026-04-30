import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-cell',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;font-weight:600;" [style.color]="color">{{ v }}</span>
  `,
})
export class ScoreCellComponent {
  @Input() v = 0;

  get color(): string {
    if (this.v >= 80) return 'var(--ok-600)';
    if (this.v >= 70) return 'var(--brand-700)';
    if (this.v >= 60) return 'var(--gold-700)';
    return 'var(--err-600)';
  }
}
