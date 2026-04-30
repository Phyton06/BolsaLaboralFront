import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-score',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <div [style.color]="c" style="font-size:10px;text-transform:uppercase;letter-spacing:.05em;font-weight:700;">{{ label }}</div>
      <div style="font-family:'IBM Plex Serif';font-size:24px;font-weight:500;color:var(--ink-900);line-height:1.1;margin-top:2px;">{{ score }}</div>
      <div class="bar" style="margin-top:5px;height:5px;">
        <div [style.width.%]="score" [style.background]="c"></div>
      </div>
    </div>
  `,
})
export class CategoryScoreComponent {
  @Input() label = '';
  @Input() score = 0;
  @Input() cat: 'brand' | 'viz4' | 'ok' | 'gold' = 'brand';

  get c(): string {
    const map: Record<string, string> = {
      brand: 'var(--brand-700)',
      viz4: 'var(--viz-4)',
      ok: 'var(--ok-600)',
      gold: 'var(--gold-600)',
    };
    return map[this.cat] || 'var(--brand-700)';
  }
}
