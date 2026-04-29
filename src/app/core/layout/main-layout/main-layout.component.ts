import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { AuthApiService } from '../../auth/services/auth-api.service';
import { CommonModule as NgCommon } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  sidebarOpen = false;
  username: string | null = null;
  isCandidate = false;
  isEmpresa = false;
  isAdmin = false;

  constructor(
    private authService: AuthService,
    private authApiService: AuthApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const usuario = this.authService.getUsuario();
    this.username = usuario?.usuario || null;
    this.isCandidate = this.authService.hasRole('candidato');
    this.isEmpresa = this.authService.hasRole('empresa');
    this.isAdmin = this.authService.hasRole('admin');
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout(): void {
    this.authApiService.revokeToken().subscribe({
      next: () => this.doLogout(),
      error: () => this.doLogout()
    });
  }

  private doLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
