import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { ChipComponent } from '../chip/chip.component';
import { NavItem, SidebarGroup } from './topbar.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, ChipComponent],
  template: `
    <div class="sidebar">
      @for (group of groups; track group) {
        @if (group.label) {
          <div class="group">{{ group.label }}</div>
        }
        @for (item of group.items; track item) {
          <a
            class="item"
            [class.active]="item.active"
            [routerLink]="getLink(item.label)"
            routerLinkActive="active"
          >
            <app-icon [name]="item.icon" [size]="15" />
            <span>{{ item.label }}</span>
            @if (item.badge) {
              <span class="badge">{{ item.badge }}</span>
            }
          </a>
        }
      }
    </div>
  `,
  styles: []
})
export class SidebarComponent {
  @Input() groups: SidebarGroup[] = [];

  getLink(label: string): string {
    const routes: Record<string, string> = {
      'Inicio': '/inicio',
      'Vacantes': '/ofertas',
      'Evaluaciones': '/evaluaciones',
      'Mis postulaciones': '/mis-postulaciones',
      'Mi perfil / CV': '/mi-perfil',
      'Mi radar': '/mi-radar',
      'Guía de pruebas': '/guia',
      'Mensajes': '/mensajes',
      'Configuración': '/config'
    };
    return routes[label] || '/inicio';
  }
}
