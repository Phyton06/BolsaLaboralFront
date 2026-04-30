import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conv-stat',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="padding:14px;border:1px solid var(--ink-200);border-radius:8px;position:relative;">
      <div style="position:absolute;left:0;top:8px;bottom:8px;width:3px;border-radius:2px;" [style.background]="c"></div>
      <div style="padding-left:8px;">
        <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:.05em;color:var(--ink-500);font-weight:700;">{{ l }}</div>
        <div style="font-family:'IBM Plex Serif';font-size:24px;font-weight:500;color:var(--ink-900);line-height:1.1;margin-top:2px;">{{ v }}</div>
        @if (sub) {
          <div style="font-size:10.5px;color:var(--ink-400);">{{ sub }}</div>
        }
      </div>
    </div>
  `,
})
export class ConvStatComponent {
  @Input() l = '';
  @Input() v: number | string = 0;
  @Input() c = 'var(--ink-400)';
  @Input() sub = '';
}
