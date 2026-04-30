import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HBarData {
  l: string;
  v: number;
  color?: string;
}

@Component({
  selector: 'app-hbar-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="display:flex; flex-direction:column; gap:10px;">
      @for (d of data; track d; let i = $index) {
        <div style="display:grid; grid-template-columns:1fr 50px; gap:10px; align-items:center;">
          <div>
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
              <span style="font-weight:500; color:var(--ink-800);">{{ d.l }}</span>
            </div>
            <div style="height:8px; background:var(--ink-100); border-radius:999px; overflow:hidden;">
              <div [style]="{width: (d.v/m*100)+'%', height:'100%', background:d.color || color, borderRadius:'999px' }"></div>
            </div>
          </div>
          <div class="mono" style="font-size:11.5px; color:var(--ink-700); text-align:right; font-weight:600;">
             {{ d.v }}
           </div>
        </div>
      }
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HBarListComponent {
  @Input() data: HBarData[] = [];
  @Input() color = 'var(--brand-700)';
  @Input() max?: number;

  get m(): number {
    return this.max ?? Math.max(...this.data.map(d => d.v));
  }
}
