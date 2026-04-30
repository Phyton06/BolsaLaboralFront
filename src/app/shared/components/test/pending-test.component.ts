import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-pending-test',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="display:flex;align-items:center;gap:12px;padding:12px;border:1px solid var(--ink-200);border-radius:8px;">
      <div [style.background]="catColor" style="width:4px;height:36px;border-radius:2px;flex-shrink:0;"></div>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;">
          <span [style.color]="catColor" style="font-size:10px;text-transform:uppercase;letter-spacing:.06em;font-weight:700;">{{ cat }}</span>
          @if (warn) {
            <span class="chip warn">Empresa</span>
          }
        </div>
        <div style="font-size:13px;font-weight:600;">{{ title }}</div>
        <div style="font-size:11px;color:var(--ink-500);margin-top:2px;display:flex;gap:10px;">
          <span><app-icon name="clock" [size]="11" style="display:inline;" /> {{ mins }}</span>
          <span>· {{ due }}</span>
        </div>
      </div>
      <button class="btn primary sm">Iniciar</button>
    </div>
  `,
})
export class PendingTestComponent {
  @Input() cat = '';
  @Input() title = '';
  @Input() mins = '';
  @Input() due = '';
  @Input() warn = false;

  get catColor(): string {
    const colors: Record<string, string> = {
      'Psicométrica': 'var(--brand-700)',
      'Cognitiva': 'var(--viz-4)',
      'Técnica': 'var(--ok-600)',
      'Proyectiva': 'var(--gold-700)',
    };
    return colors[this.cat] || 'var(--brand-700)';
  }
}
