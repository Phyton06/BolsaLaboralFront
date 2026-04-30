import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legend',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="display:flex;align-items:center;gap:10px;">
      <div [style.background]="color" style="width:10px;height:10px;border-radius:2px;flex-shrink:0;"></div>
      <div style="flex:1;font-size:12.5px;">{{ l }}</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:var(--ink-700);font-weight:600;">{{ v }}</div>
    </div>
  `,
})
export class LegendComponent {
  @Input() color = '';
  @Input() l = '';
  @Input() v = '';
}
