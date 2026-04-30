import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

export interface NavItem {
  icon: string;
  label: string;
  active?: boolean;
  badge?: string | number;
}

export interface SidebarGroup {
  label?: string;
  items: NavItem[];
}

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <div class="topbar">
      <div class="brand">
        <div class="brand-mark">
          <img src="assets/img/logo-ut-mark.png" alt="UT" />
        </div>
        <div class="brand-text serif">
          <div class="t1">Bolsa de Trabajo</div>
          <div class="t2">UT de la Costa</div>
        </div>
        <div class="divider-v"></div>
      </div>

      <div class="nav">
        @for (item of navItems; track item) {
          <a
            [routerLink]="getLink(item.label)"
            [class.active]="item.active"
            routerLinkActive="active"
          >{{ item.label }}</a>
        }
      </div>

      <div class="right">
        <div class="search">
          <app-icon name="search" [size]="14" color="var(--ink-500)" />
          <span>Buscar…</span>
        </div>
        <app-icon name="bell" [size]="18" color="var(--ink-500)" />
        <div style="display:flex;align-items:center;gap:8px;">
          <div class="avatar">{{ userInitials }}</div>
          <div style="font-size:12px;line-height:1.2;">
            <div style="color:var(--ink-800);font-weight:600;">{{ userName }}</div>
            <div style="color:var(--ink-500);font-size:10.5px;">{{ roleLabel }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TopbarComponent {
  @Input() navItems: NavItem[] = [];
  @Input() userName = '';
  @Input() userInitials = '';
  @Input() role: 'egresado' | 'empresa' | 'admin' = 'egresado';

  get roleLabel(): string {
    const labels: Record<string, string> = {
      egresado: 'Egresado',
      empresa: 'Empresa',
      admin: 'Administración UT'
    };
    return labels[this.role] || '';
  }

  getLink(label: string): string {
    const routes: Record<string, string> = {
      'Inicio': '/inicio',
      'Vacantes': '/ofertas',
      'Evaluaciones': '/evaluaciones',
      'Mi Perfil': '/mi-perfil',
      'Postulaciones': '/mis-postulaciones'
    };
    return routes[label] || '/inicio';
  }
}
