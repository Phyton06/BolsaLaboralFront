import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';

@Component({
  selector: 'app-highlight',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="display:flex;gap:10px;padding:10px;background:var(--ink-50);border-radius:6px;">
      <div [style.color]="color"><app-icon [name]="icon" [size]="16" /></div>
      <div>
        <div style="font-size:12px;font-weight:600;color:var(--ink-800);">{{ t }}</div>
        <div style="font-size:11.5px;color:var(--ink-500);margin-top:1px;">{{ s }}</div>
      </div>
    </div>
  `,
})
export class HighlightComponent {
  @Input() icon = '';
  @Input() color = '';
  @Input() t = '';
  @Input() s = '';
}
