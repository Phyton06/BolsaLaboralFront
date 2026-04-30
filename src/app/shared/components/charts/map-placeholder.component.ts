import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-placeholder',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="position:relative; height:240px; background:#f5f3ee; border-radius:8px; overflow:hidden; border:1px solid var(--ink-200);">
      <svg width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet" style="position:absolute;inset:0;">
        <path d="M 30 90 Q 50 60 90 70 Q 130 55 170 70 Q 210 60 250 70 Q 300 65 340 90 Q 360 110 350 140 Q 330 170 290 175 Q 250 185 220 200 Q 180 215 150 200 Q 120 195 100 175 Q 60 165 40 140 Q 20 115 30 90 Z"
          fill="#e8e3d6" stroke="#c8c2b1" strokeWidth="1" />
        <path d="M 100 90 L 120 140 M 170 80 L 180 160 M 240 80 L 230 170 M 290 100 L 280 165" stroke="#d8d3c4" strokeWidth="1" fill="none" />
        @for (i of [0,1,2,3,4]; track i) {
          <line [attr.x1]="0" [attr.x2]="400" [attr.y1]="50 + i*40" [attr.y2]="50 + i*40" stroke="rgba(15,107,52,.06)" />
        }
      </svg>
      @for (pin of pins; track pin; let i = $index) {
        <div [style.left.%]="pin.x" [style.top.%]="pin.y" style="position:absolute; transform:translate(-50%,-100%);">
          <div [style.width.px]="18 + pin.n * 1.5" [style.height.px]="18 + pin.n * 1.5"
            style="border-radius:50% 50% 50% 0; background:var(--brand-700); transform:rotate(-45deg);
            display:grid; place-items:center; color:#fff; font-size:9px; font-weight:700;
            border:2px solid #fff; box-shadow:0 2px 6px rgba(0,0,0,.25);">
            <span style="transform:rotate(45deg);">{{ pin.n }}</span>
          </div>
        </div>
      }
      <div class="mono" style="position:absolute;bottom:8px;left:8px;font-size:9px;color:var(--ink-400);text-transform:uppercase;letter-spacing:.06em;">
         ◇ vista regional · convenios activos
       </div>
    </div>
  `,
})
export class MapPlaceholderComponent {
  @Input() pins: Array<{ x: number; y: number; n: number; name?: string }> = [];
}
