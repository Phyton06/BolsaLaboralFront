import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-filter-group',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="border-top:1px solid var(--ink-100);padding:12px 0 4px;">
      <div style="font-size:11.5px;font-weight:600;color:var(--ink-700);margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;">
        {{ label }}
        <app-icon name="chevD" [size]="12" color="var(--ink-400)" />
      </div>
      <ng-content></ng-content>
    </div>
  `,
})
export class FilterGroupComponent {
  @Input() label = '';
}
