import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funnel',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="display:flex;flex-direction:column;gap:6px;">
      @for (s of stages; track s; let i = $index) {
        <div style="display:grid;grid-template-columns:140px 1fr 60px;gap:10px;align-items:center;font-size:12px;">
          <span style="color:var(--ink-700);font-weight:500;">{{ s.l }}</span>
          <div style="height:20px;background:var(--ink-50);border-radius:3px;position:relative;">
            <div [style.width.%]="(s.v / max) * 100" style="height:100%;border-radius:3px;display:flex;align-items:center;padding-left:8px;color:#fff;font-size:10.5px;font-weight:600;"
              [style.background]="i === stages.length - 1 ? 'var(--ok-600)' : 'var(--brand-' + (700 - i * 100 < 400 ? 400 : 700 - i * 100) + ')'">
              {{ s.v }}
            </div>
          </div>
          <span style="text-align:right;font-size:11px;color:var(--ink-500);font-weight:600;font-family:'IBM Plex Mono',monospace;">{{ s.p }}%</span>
        </div>
      }
    </div>
  `,
})
export class FunnelComponent {
  @Input() stages: Array<{ l: string; v: number; p: number }> = [];

  get max(): number {
    return this.stages.length > 0 ? this.stages[0].v : 1;
  }
}
