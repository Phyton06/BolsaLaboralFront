import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="chip" [class]="color">
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    .chip {
      display: inline-flex; align-items: center; gap: 4px; padding: 3px 8px; border-radius: 999px;
      font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;
      background: var(--ink-100); color: var(--ink-700);
    }
    .chip.ok { background: var(--ok-100); color: var(--ok-600); }
    .chip.warn { background: var(--warn-100); color: var(--warn-600); }
    .chip.err { background: var(--err-100); color: var(--err-600); }
    .chip.info { background: var(--info-100); color: var(--info-600); }
    .chip.brand { background: var(--brand-100); color: var(--brand-700); }
    .chip.gold { background: var(--gold-100); color: var(--gold-700); }
    .chip.outline { background: transparent; border: 1px solid var(--ink-200); }
  `]
})
export class ChipComponent {
  @Input() color: 'ok' | 'warn' | 'err' | 'info' | 'brand' | 'gold' | 'outline' | '' = '';
}
