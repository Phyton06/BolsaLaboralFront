import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-check',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label style="display:flex;align-items:center;gap:8px;padding:4px 4px;cursor:pointer;font-size:12px;color:var(--ink-700);">
      <span [style.background]="on ? 'var(--brand-700)' : '#fff'"
        [style.border]="'1px solid ' + (on ? 'var(--brand-700)' : 'var(--ink-300)')"
        style="width:14px;height:14px;border-radius:3px;display:grid;place-items:center;color:#fff;flex-shrink:0;">
        @if (on) {
          <app-icon name="check" [size]="10" [stroke]="3" />
        }
      </span>
      {{ l }}
    </label>
  `,
})
export class CheckComponent {
  @Input() l = '';
  @Input() on = false;
}
