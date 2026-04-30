import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { AuthApiService } from '../../../features/auth/services/auth-api.service';
import { TopbarComponent } from '../../../shared/components/layout/topbar.component';
import { SidebarComponent } from '../../../shared/components/layout/sidebar.component';
import { AiAdvisorComponent } from '../../../shared/components/ai-advisor/ai-advisor.component';

interface NavItem {
  icon: string;
  label: string;
  active?: boolean;
  badge?: string | number;
}

interface SidebarGroup {
  label?: string;
  items: NavItem[];
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    TopbarComponent,
    SidebarComponent,
    AiAdvisorComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  userMenuOpen = signal(false);
  aiOpen = signal(false);
  
  userName = '';
  userInitials = '';
  userRole: 'egresado' | 'empresa' | 'admin' = 'egresado';
  
  navItems: NavItem[] = [];
  sidebarGroups: SidebarGroup[] = [];

  constructor(
    private authService: AuthService,
    private authApiService: AuthApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    this.userName = user?.nombre || 'Usuario';
    this.userInitials = this.getInitials(user?.nombre || '');
    this.userRole = this.getRole(user?.rol);
    this.buildNavigation();
  }

  buildNavigation(): void {
    if (this.userRole === 'empresa') {
      // Empresa navigation
      this.navItems = [
        { icon: 'chart', label: 'Dashboard', active: true },
        { icon: 'briefcase', label: 'Mis Vacantes' },
        { icon: 'users', label: 'Candidatos' },
        { icon: 'user', label: 'Mi Perfil' },
      ];

      this.sidebarGroups = [
        { items: [
          { icon: 'chart', label: 'Dashboard', active: true },
          { icon: 'briefcase', label: 'Mis Vacantes' },
          { icon: 'users', label: 'Candidatos' },
          { icon: 'user', label: 'Mi Perfil' },
        ]},
        { label: 'Recursos', items: [
          { icon: 'settings', label: 'Configuración' },
        ]},
      ];
    } else if (this.userRole === 'admin') {
      this.navItems = [
        { icon: 'chart', label: 'Dashboard', active: true },
        { icon: 'users', label: 'Empresas' },
        { icon: 'user', label: 'Mi Perfil' },
      ];
      this.sidebarGroups = [
        { items: [
          { icon: 'chart', label: 'Dashboard', active: true },
          { icon: 'users', label: 'Empresas' },
          { icon: 'user', label: 'Mi Perfil' },
        ]},
      ];
    } else {
      // Egresado navigation (default)
      this.navItems = [
        { icon: 'home', label: 'Inicio', active: true },
        { icon: 'briefcase', label: 'Vacantes', badge: '128' },
        { icon: 'edu', label: 'Evaluaciones', badge: '2' },
        { icon: 'file', label: 'Mis Postulaciones' },
        { icon: 'user', label: 'Mi Perfil' },
        { icon: 'radar', label: 'Mi Radar' },
      ];

      this.sidebarGroups = [
        { items: [
          { icon: 'home', label: 'Inicio', active: true },
          { icon: 'briefcase', label: 'Vacantes', badge: '128' },
          { icon: 'edu', label: 'Evaluaciones', badge: '2' },
          { icon: 'file', label: 'Mis Postulaciones' },
          { icon: 'user', label: 'Mi Perfil / CV' },
          { icon: 'radar', label: 'Mi Radar' },
        ]},
        { label: 'Recursos', items: [
          { icon: 'book', label: 'Guía de Pruebas' },
          { icon: 'mail', label: 'Mensajes' },
          { icon: 'settings', label: 'Configuración' },
        ]},
      ];
    }
  }

  getInitials(name: string): string {
    return name.split(' ').map((n: string) => n[0]).slice(0, 2).join('').toUpperCase();
  }

  getRole(rol?: string): 'egresado' | 'empresa' | 'admin' {
    if (rol === 'empresa') return 'empresa';
    if (rol === 'admin') return 'admin';
    return 'egresado';
  }

  toggleUserMenu(): void {
    this.userMenuOpen.set(!this.userMenuOpen());
  }

  openAI(): void {
    this.aiOpen.set(true);
  }

  logout(): void {
    this.authApiService.logout().subscribe({
      next: () => this.doLogout(),
      error: () => this.doLogout()
    });
  }

  private doLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
