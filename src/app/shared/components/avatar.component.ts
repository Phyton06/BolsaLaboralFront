import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [style.width.px]="size"
         [style.height.px]="size"
         [style.border-radius]="'50%'"
         [style.display]="'grid'"
         [style.place-items]="'center'"
         [style.font-size.px]="size * 0.36"
         [style.font-weight]="'600'"
         [style.flex-shrink]="'0'"
         [style.background]="c"
         [style.color]="'#fff'">
      {{ initials }}
    </div>
  `,
})
export class AvatarComponent {
  @Input() name = '';
  @Input() size = 32;
  @Input() color?: string;

  get initials(): string {
    return this.name.split(' ').slice(0, 2).map(s => s[0]).join('').toUpperCase();
  }

  get c(): string {
    if (this.color) return this.color;
    const colors = ['#0f6b34', '#1f7a52', '#6b3aa0', '#a06a1c', '#1f6890', '#b03434'];
    return colors[this.name.charCodeAt(0) % colors.length];
  }
}
