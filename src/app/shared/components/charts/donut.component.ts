import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [style]="{position:'relative', width:size+'px', height:size+'px'}">
      <svg [attr.width]="size" [attr.height]="size">
        <!-- Background circle -->
        <circle
          [attr.cx]="size/2" [attr.cy]="size/2" [attr.r]="r"
          fill="none" stroke="var(--ink-100)" stroke-width="9"
        />
        <!-- Progress arc -->
        <circle
          [attr.cx]="size/2" [attr.cy]="size/2" [attr.r]="r"
          fill="none" [attr.stroke]="color" stroke-width="9"
          [attr.stroke-dasharray]="c" [attr.stroke-dashoffset]="off"
          stroke-linecap="round"
          [attr.transform]="'rotate(-90 ' + size/2 + ' ' + size/2 + ')'"
        />
      </svg>
      <!-- Center text -->
      <div style="position:absolute; inset:0; display:grid; place-items:center; text-align:center;">
        <div>
          <div [style]="{fontFamily:'IBM Plex Serif', fontSize:'22px', fontWeight:500, color:'var(--ink-900)', lineHeight:1}">{{ label }}</div>
          @if (sublabel) {
            <div [style]="{fontSize:'10.5px', color:'var(--ink-500)', marginTop:'2px'}">{{ sublabel }}</div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class DonutComponent {
  @Input() value = 0;
  @Input() max = 100;
  @Input() size = 110;
  @Input() color = 'var(--brand-700)';
  @Input() label?: string;
  @Input() sublabel?: string;

  get r(): number {
    return this.size / 2 - 10;
  }

  get c(): number {
    return 2 * Math.PI * this.r;
  }

  get off(): number {
    return this.c - (this.value / this.max) * this.c;
  }
}
