import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bench-row',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;">
        <span style="font-weight:500;">{{ l }}</span>
        <span [style.color]="ok ? 'var(--ok-600)' : 'var(--err-600)'" style="font-weight:700;font-size:11.5px;font-family:'IBM Plex Mono',monospace;">
          {{ you }} / <span style="color:var(--ink-500);font-weight:500;">{{ req }}</span>
        </span>
      </div>
      <div class="bar" style="height:7px;position:relative;">
        <div [style.width.%]="you" [style.background]="ok ? 'var(--ok-600)' : 'var(--gold-600)'"></div>
        <div [style.left.%]="req" style="position:absolute;top:-2px;height:11px;width:2px;background:var(--ink-700);"></div>
      </div>
    </div>
  `,
})
export class BenchRowComponent {
  @Input() l = '';
  @Input() req = 0;
  @Input() you = 0;

  get ok(): boolean {
    return this.you >= this.req;
  }
}
