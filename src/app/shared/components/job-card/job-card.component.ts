import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="padding:14px;border:1px solid var(--ink-200);border-radius:10px;background:#fff;display:flex;flex-direction:column;gap:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;">
        <div style="display:flex;gap:10px;flex:1;min-width:0;">
          <div style="width:38px;height:38px;border-radius:6px;background:var(--brand-100);display:grid;place-items:center;flex-shrink:0;color:var(--brand-700);font-weight:700;font-family:'IBM Plex Serif';">
            {{ companyInitials }}
          </div>
          <div style="min-width:0;">
            <div style="display:flex;gap:6px;align-items:center;">
              <div style="font-size:13px;font-weight:600;line-height:1.2;">{{ title }}</div>
              @if (isNew) {
                <span class="chip gold" style="font-size:9px;padding:1px 6px;">NUEVO</span>
              }
            </div>
            <div style="font-size:11.5px;color:var(--ink-500);margin-top:2px;">{{ company }}</div>
          </div>
        </div>
        <div style="text-align:right;flex-shrink:0;margin-left:8px;">
          <div [style.color]="match >= 85 ? 'var(--ok-600)' : match >= 75 ? 'var(--brand-700)' : 'var(--gold-700)'"
            style="font-family:'IBM Plex Serif';font-size:18px;font-weight:600;line-height:1;">{{ match }}%</div>
          <div style="font-size:9px;color:var(--ink-400);text-transform:uppercase;letter-spacing:.05em;font-weight:600;">match</div>
        </div>
      </div>
      <div style="display:flex;gap:14px;font-size:11px;color:var(--ink-600);">
        <span><ng-content select="[name=location]"></ng-content>{{ loc }}</span>
        <span style="font-family:'IBM Plex Mono',monospace;">{{ sal }}</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:5px;">
        @for (t of tags; track t) {
          <span class="chip outline" style="font-size:10px;">{{ t }}</span>
        }
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px;padding-top:8px;border-top:1px solid var(--ink-100);">
        <span class="chip" style="font-size:10px;padding:2px 7px;"
          [style.background]="src === 'Convenio UT' ? 'var(--gold-100)' : 'var(--ink-100)'"
          [style.color]="src === 'Convenio UT' ? 'var(--gold-700)' : 'var(--ink-600)'">
          @if (src === 'Convenio UT') { ◆ } {{ src }}
        </span>
        <button class="btn sm primary">Ver detalle →</button>
      </div>
    </div>
  `,
})
export class JobCardComponent {
  @Input() match = 0;
  @Input() title = '';
  @Input() company = '';
  @Input() loc = '';
  @Input() tags: string[] = [];
  @Input() sal = '';
  @Input() src = '';
  @Input() isNew = false;

  get companyInitials(): string {
    return this.company.split(' ').map(s => s[0]).slice(0, 2).join('');
  }
}
