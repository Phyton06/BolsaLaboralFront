import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24"
         fill="none" [attr.stroke]="color" [attr.stroke-width]="strokeWidth"
         stroke-linecap="round" stroke-linejoin="round"
         [style]="{ flexShrink: '0', display: 'block' }">
      @switch (name) {
        @case ('home') { <path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /> }
        @case ('briefcase') { <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" /> }
        @case ('user') { <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /> }
        @case ('users') { <circle cx="9" cy="8" r="4" /><path d="M2 21c0-4 3-6 7-6s7 2 7 6" /><circle cx="17" cy="9" r="3" /><path d="M22 19c0-3-2-5-5-5" /> }
        @case ('chart') { <path d="M4 19V5" /><path d="M20 19H4" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8" width="3" height="10" /><rect x="17" y="14" width="3" height="4" /> }
        @case ('file') { <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" /><path d="M14 3v6h6" /> }
        @case ('search') { <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /> }
        @case ('bell') { <path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21a2 2 0 004 0" /> }
        @case ('filter') { <path d="M3 5h18l-7 9v6l-4-2v-4z" /> }
        @case ('plus') { <path d="M12 5v14M5 12h14" /> }
        @case ('check') { <path d="M20 6L9 17l-5-5" /> }
        @case ('x') { <path d="M18 6L6 18M6 6l12 12" /> }
        @case ('chevR') { <path d="M9 6l6 6-6 6" /> }
        @case ('chevD') { <path d="M6 9l6 6 6-6" /> }
        @case ('map') { <path d="M9 4l-6 2v14l6-2 6 2 6-2V4z" /><path d="M9 4v14M15 6v14" /> }
        @case ('star') { <path d="M12 2l3 6 7 1-5 3-6-3-7 1z" /> }
        @case ('download') { <path d="M12 4v12" /><path d="M6 12l6 6 6-6" /><path d="M4 21h16" /> }
        @case ('upload') { <path d="M12 20V8" /><path d="M6 12l6-6 6 6" /><path d="M4 4h16" /> }
        @case ('book') { <path d="M4 5a2 2 0 012-2h13v17H6a2 2 0 00-2 2V5z" /><path d="M4 19a2 2 0 002-2h13" /> }
        @case ('clock') { <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /> }
        @case ('location') { <path d="M12 21s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /> }
        @case ('money') { <circle cx="12" cy="12" r="9" /><path d="M9 14c0 1 1 2 3 2s3-1 3-2-1.5-3-2-3-1-3 1-3 3-1 3 2" /><path d="M12 7v2M12 15v2" /> }
        @case ('settings') { <circle cx="12" cy="12" r="3" /><path d="M19 12c0 .7-.1 1.3-.2 2l2 1.5-2 3.5-2.3-1c-1 .8-2.2 1.4-3.5 1.7L12.5 22h-1l-.5-2.3c-1.3-.3-2.5-.9-3.5-1.7L5 19l-2-3.5L5 14c-.1-.7-.2-1.3-.2-2s.1-1.3.2-2L3 8.5 5 5l2.5 1c1-.8 2.2-1.4 3.5-1.7L11.5 2h1l.5 2.3c1.3.3 2.5.9 3.5 1.7L19 5l2 3.5-2 1.5c.1.7.2 1.3.2 2z" /> }
        @case ('grid') { <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /> }
        @case ('target') { <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /> }
        @case ('edu') { <path d="M3 9l9-4 9 4-9 4z" /><path d="M7 11v5c0 1 2 3 5 3s5-2 5-3v-5" /> }
        @case ('radar') { <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="M12 3v18M3 12h18" /> }
        @case ('eye') { <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7z" /><circle cx="12" cy="12" r="3" /> }
        @case ('arrowR') { <path d="M5 12h14" /><path d="M13 6l6 6-6 6" /> }
        @case ('flame') { path d="M12 2c1 4 4 5 4 9a4 4 0 11-8 0c0-2 1-3 1-4 1 1 1 2 2 2 0-2-1-4 1-7z" /> }
        @case ('mail') { <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /> }
      }
    </svg>
  `,
  styles: [`
    :host { display: inline-flex; align-items: center; justify-content: center; }
  `]
})
export class IconComponent {
  @Input() name: string = 'home';
  @Input() size: number = 16;
  @Input() color: string = 'currentColor';
  @Input() stroke: number | string = 1.6;

  get strokeWidth(): string | number {
    return typeof this.stroke === 'string' ? this.stroke : this.stroke.toString();
  }
}
