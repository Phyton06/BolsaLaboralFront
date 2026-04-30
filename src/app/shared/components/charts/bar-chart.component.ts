import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BarData {
  l: string;
  v: number;
  color?: string;
}

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg width="100%" [attr.height]="height" [attr.viewBox]="'0 0 ' + totalW + ' ' + (height + 30)"
         preserveAspectRatio="xMidYMid meet" style="display:block">
      <!-- Grid lines -->
      @for (t of [0.25, 0.5, 0.75, 1]; track t) {
        <line
          [attr.x1]="0" [attr.x2]="totalW"
          [attr.y1]="height - height * t" [attr.y2]="height - height * t"
          stroke="var(--ink-100)" stroke-width="1"
        />
      }

      <!-- Bars -->
      @for (d of data; track d; let i = $index) {
        <g>
          <rect
            [attr.x]="i * (barW + gap) + gap / 2"
            [attr.y]="height - (d.v / m) * height"
            [attr.width]="barW" [attr.height]="(d.v / m) * height"
            [attr.fill]="d.color || color"
            rx="3"
          />
          <text
            [attr.x]="i * (barW + gap) + gap / 2 + barW / 2"
            [attr.y]="height - (d.v / m) * height - 6"
            font-size="10"
            text-anchor="middle"
            fill="var(--ink-700)"
            font-weight="600"
            font-family="IBM Plex Mono, ui-monospace, monospace"
          class="mono"
          >{{ format ? format(d.v) : d.v }}</text>
          <text
            [attr.x]="i * (barW + gap) + gap / 2 + barW / 2"
            [attr.y]="height + 14"
            font-size="10"
            text-anchor="middle"
            fill="var(--ink-500)"
          >{{ d.l }}</text>
        </g>
      }
    </svg>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class BarChartComponent {
  @Input() data: BarData[] = [];
  @Input() height: number = 160;
  @Input() color: string = 'var(--brand-700)';
  @Input() max?: number;
  @Input() format?: (v: number) => string;

  barW = 36;
  gap = 18;

  get m(): number {
    return this.max ?? Math.max(...this.data.map(d => d.v)) * 1.1;
  }

  get totalW(): number {
    return this.data.length * (this.barW + this.gap);
  }
}
