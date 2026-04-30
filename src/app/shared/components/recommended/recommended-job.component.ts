import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommended-job',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="display:flex;gap:12px;padding:11px;border:1px solid var(--ink-200);border-radius:8px;">
      <div style="width:44px;height:44px;border-radius:6px;background:var(--brand-100);display:grid;place-items:center;flex-shrink:0;color:var(--brand-700);font-weight:700;font-family:'IBM Plex Serif';font-size:16px;">
        {{ companyInitials }}
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:13px;font-weight:600;">{{ title }}</div>
        <div style="font-size:11.5px;color:var(--ink-500);">{{ company }} · {{ loc }}</div>
        <div style="font-size:11px;color:var(--ink-700);margin-top:3px;font-family:'IBM Plex Mono',monospace;">{{ sal }}</div>
      </div>
      <div style="text-align:right;">
        <div [style.color]="match >= 85 ? 'var(--ok-600)' : 'var(--brand-700)'"
          style="font-family:'IBM Plex Serif';font-size:18px;font-weight:600;line-height:1;">{{ match }}%</div>
        <div style="font-size:9.5px;color:var(--ink-400);text-transform:uppercase;letter-spacing:.05em;font-weight:600;">match</div>
      </div>
    </div>
  `,
})
export class RecommendedJobComponent {
  @Input() match = 0;
  @Input() title = '';
  @Input() company = '';
  @Input() loc = '';
  @Input() sal = '';

  get companyInitials(): string {
    return this.company.split(' ').map(s => s[0]).slice(0, 2).join('');
  }
}
