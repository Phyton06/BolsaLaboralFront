import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heatmap-grid',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="display:grid;grid-template-columns:repeat(8, 1fr);gap:4px;">
      @for (c of cells(); track c; let i = $index) {
        <div [style.aspect-ratio]="1"
          [style.background]="'rgba(15, 107, 52, ' + (0.1 + c.v * 0.8) + ')'"
          style="border-radius:3px;display:grid;place-items:center;
          color:{{ c.v > 0.5 ? '#fff' : 'var(--ink-700)' }};
          font-size:9px;font-weight:600;padding:2px;text-align:center;line-height:1.05;">
          {{ c.l }}
        </div>
      }
    </div>
  `,
})
export class HeatmapGridComponent {
  @Input() cells: Array<{ l: string; v: number }> = [];
}
