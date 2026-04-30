import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg width="100%" [attr.height]="height + 20" [attr.viewBox]="'0 0 ' + w + ' ' + (height + 20)" preserveAspectRatio="none" style="display:block">
      @for (t of [0.25, 0.5, 0.75]; track t) {
        <line [attr.x1]="0" [attr.x2]="w" [attr.y1]="height * t" [attr.y2]="height * t" stroke="var(--ink-100)" strokeWidth="1" />
      }
      @if (fill) {
        <path [attr.d]="fillPath" [attr.fill]="color" fillOpacity="0.10" />
      }
      <path [attr.d]="path" fill="none" [attr.stroke]="color" strokeWidth="2" strokeLinejoin="round" />
      @for (d of data; track d; let i = $index) {
        <circle [attr.cx]="x(i)" [attr.cy]="y(d.v)" r="2.5" fill="#fff" [attr.stroke]="color" strokeWidth="1.5" />
      }
      @for (d of data; track d; let i = $index) {
        <text [attr.x]="x(i)" [attr.y]="height + 14" fontSize="9" textAnchor="middle" fill="var(--ink-500)">{{ d.l }}</text>
      }
    </svg>
  `,
})
export class LineChartComponent {
  @Input() data: Array<{ l: string; v: number }> = [];
  @Input() height = 140;
  @Input() color = 'var(--brand-700)';
  @Input() fill = true;

  readonly w = 320;

  get max(): number {
    return Math.max(...this.data.map(d => d.v)) * 1.2;
  }

  get min(): number {
    return 0;
  }

  x(i: number): number {
    return (i / (this.data.length - 1)) * this.w;
  }

  y(v: number): number {
    return this.height - ((v - this.min) / (this.max - this.min)) * (this.height - 20) - 10;
  }

  get path(): string {
    return this.data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${this.x(i)} ${this.y(d.v)}`).join(' ');
  }

  get fillPath(): string {
    return `${this.path} L ${this.w} ${this.height} L 0 ${this.height} Z`;
  }
}
