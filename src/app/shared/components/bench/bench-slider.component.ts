import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bench-slider',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px;">
        <div>
          <span style="font-size:12px;font-weight:600;color:var(--ink-800);">{{ label }}</span>
          @if (req) {
            <span class="chip err" style="font-size:9px;padding:1px 6px;margin-left:6px;">OBLIGATORIO</span>
          }
          <div style="font-size:10.5px;color:var(--ink-500);">{{ cat }}</div>
        </div>
        <span style="font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:700;" [style.color]="c">{{ value }}</span>
      </div>
      <div style="height:8px;background:var(--ink-100);border-radius:999px;position:relative;">
        <div [style.width.%]="value" [style.background]="c" style="height:100%;border-radius:999px;"></div>
        <div [style.left.%]="value" style="position:absolute;top:-3px;width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid {{ c }};transform:translateX(-50%);"></div>
      </div>
    </div>
  `,
})
export class BenchSliderComponent {
  @Input() label = '';
  @Input() cat = '';
  @Input() value = 0;
  @Input() c = 'var(--brand-700)';
  @Input() req = false;
}
