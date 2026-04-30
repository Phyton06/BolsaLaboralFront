import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gauss-curve',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg width="100%" [attr.viewBox]="'0 0 ' + w + ' ' + (h + 20)" style="display:block">
      <path [attr.d]="fillPath" fill="var(--brand-100)" />
      <path [attr.d]="strokePath" fill="none" stroke="var(--brand-700)" strokeWidth="1.5" />
      <line [attr.x1]="mx" [attr.x2]="mx" x1="20" y2="0" stroke="var(--ink-400)" strokeDasharray="3 3" />
      <text [attr.x]="mx" y="14" fontSize="9" fill="var(--ink-500)" textAnchor="middle">μ {{ mean }}</text>
      <line [attr.x1]="sx" [attr.x2]="sx" x1="20" y2="0" stroke="var(--gold-600)" strokeWidth="2" />
      <circle [attr.cx]="sx" cy="20" r="3.5" fill="var(--gold-600)" />
      <text [attr.x]="sx" y="12" fontSize="10" fill="var(--gold-700)" fontWeight="700" textAnchor="middle">tú · {{ score }}</text>
      @if (label) {
        <text x="4" [attr.y]="h + 14" fontSize="9.5" fill="var(--ink-500)">{{ label }}</text>
      }
    </svg>
  `,
})
export class GaussCurveComponent {
  @Input() score = 78;
  @Input() mean = 65;
  @Input() label?: string;

  readonly w = 280;
  readonly h = 100;

  get pts(): Array<[number, number]> {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i <= 60; i++) {
      const x = (i / 60) * this.w;
      const t = (i - 30) / 12;
      const y = this.h - Math.exp(-(t * t) / 2) * (this.h - 12) - 4;
      pts.push([x, y]);
    }
    return pts;
  }

  get pathBase(): string {
    return `M 0 ${this.h} ` + this.pts.map(p => `L ${p[0]} ${p[1]}`).join(' ');
  }

  get fillPath(): string {
    return this.pathBase + ` L ${this.w} ${this.h} Z`;
  }

  get strokePath(): string {
    return `M 0 ${this.h} ` + this.pts.map(p => `L ${p[0]} ${p[1]}`).join(' ');
  }

  get sx(): number {
    return (this.score / 100) * this.w;
  }

  get mx(): number {
    return (this.mean / 100) * this.w;
  }
}
