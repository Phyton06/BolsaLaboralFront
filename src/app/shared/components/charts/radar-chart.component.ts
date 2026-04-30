import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg [attr.width]="size" [attr.height]="size" style="display:block">
      <!-- Rings -->
      @for (rv of rings; track rv) {
        <polygon
          [attr.points]="getRingPoints(rv)"
          fill="none"
          stroke="var(--ink-200)"
          stroke-width="1"
        />
      }

      <!-- Axes -->
      @for (axis of axes; track axis; let i = $index) {
        <line
          [attr.x1]="cx" [attr.y1]="cy"
          [attr.x2]="getAxisEnd(i)[0]" [attr.y2]="getAxisEnd(i)[1]"
          stroke="var(--ink-200)" stroke-width="1"
        />
      }

      <!-- Datasets -->
      @for (ds of datasets; track ds; let di = $index) {
        <g>
          <polygon
            [attr.points]="getDatasetPoints(ds.values)"
            [attr.fill]="ds.color"
            [attr.fill-opacity]="ds.fillOpacity ?? 0.15"
            [attr.stroke]="ds.color"
            stroke-width="2"
          />
          @for (v of ds.values; track v; let i = $index) {
            <circle
              [attr.cx]="getPoint(i, v)[0]"
              [attr.cy]="getPoint(i, v)[1]"
              r="3"
              [attr.fill]="ds.color"
            />
          }
        </g>
      }

      <!-- Labels -->
      @for (axis of axes; track axis; let i = $index) {
        <text
          [attr.x]="getLabelPos(i)[0]"
          [attr.y]="getLabelPos(i)[1]"
          font-size="10.5"
          text-anchor="middle"
          dominant-baseline="middle"
          fill="var(--ink-600)"
          font-weight="500"
        >{{ axis }}</text>
      }
    </svg>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class RadarChartComponent implements OnChanges {
  @Input() axes: string[] = [];
  @Input() datasets: { values: number[]; color: string; fillOpacity?: number }[] = [];
  @Input() size: number = 260;

  cx = 0; cy = 0; r = 0; n = 0;
  rings = [0.25, 0.5, 0.75, 1];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['size'] || changes['axes']) {
      this.cx = this.size / 2;
      this.cy = this.size / 2;
      this.r = this.size / 2 - 30;
      this.n = this.axes.length;
    }
  }

  getRingPoints(rv: number): string {
    return this.axes.map((_, idx) => {
      const [x, y] = this.getPoint(idx, rv);
      return `${x},${y}`;
    }).join(' ');
  }

  getAxisEnd(i: number): [number, number] {
    const angle = (Math.PI * 2 * i) / this.n - Math.PI / 2;
    return [this.cx + Math.cos(angle) * this.r, this.cy + Math.sin(angle) * this.r];
  }

  getDatasetPoints(values: number[]): string {
    return values.map((v, i) => {
      const [x, y] = this.getPoint(i, v);
      return `${x},${y}`;
    }).join(' ');
  }

  getPoint(i: number, v: number): [number, number] {
    const angle = (Math.PI * 2 * i) / this.n - Math.PI / 2;
    return [this.cx + Math.cos(angle) * this.r * v, this.cy + Math.sin(angle) * this.r * v];
  }

  getLabelPos(i: number): [number, number] {
    const angle = (Math.PI * 2 * i) / this.n - Math.PI / 2;
    return [this.cx + Math.cos(angle) * (this.r * 1.15), this.cy + Math.sin(angle) * (this.r * 1.15)];
  }
}
