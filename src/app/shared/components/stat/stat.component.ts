import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stat">
      <div class="label">{{ label }}</div>
      <div class="value">
        {{ value }}@if (suffix) {<span>{{ suffix }}</span>}
      </div>
      @if (delta) {
        <div class="delta" [class.down]="down">{{ delta }}</div>
      }
    </div>
  `,
  styles: []
})
export class StatComponent {
  @Input() label!: string;
  @Input() value!: string | number;
  @Input() suffix?: string;
  @Input() delta?: string;
  @Input() down?: boolean;
}
