import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import { AuthService } from '../../../../core/services/auth/auth.service';
import Swal from 'sweetalert2';

type RoleType = 'egresado' | 'empresa' | 'admin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['../../styles/auth-layout.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  matricula = signal('');
  password = signal('');
  isLoading = signal(false);
  showPassword = signal(false);

  // Auto-detección de rol por prefijo de matrícula
  detectedRole = computed<RoleType | null>(() => {
    const m = this.matricula().trim().toUpperCase();
    if (!m) return null;
    if (m.startsWith('EGR')) return 'egresado';
    if (m.startsWith('EMP')) return 'empresa';
    if (m.startsWith('ADM')) return 'admin';
    return null;
  });

  detectedRoleLabel = computed(() => {
    const role = this.detectedRole();
    if (!role) return '';
    const labels: Record<RoleType, string> = {
      egresado: 'Egresado UT',
      empresa: 'Empresa con convenio',
      admin: 'Personal UT · Vinculación',
    };
    return labels[role];
  });

  roleColor = computed(() => {
    const role = this.detectedRole();
    const colors: Record<RoleType, string> = {
      egresado: 'var(--brand-700)',
      empresa: 'var(--gold-700)',
      admin: 'var(--viz-4)',
    };
    return role ? colors[role] : '';
  });

  roleBadgeBg = computed(() => {
    const role = this.detectedRole();
    return role ? 'var(--brand-50)' : '';
  });

  roleBadgeBorder = computed(() => {
    const color = this.roleColor();
    return color ? `${color}33` : '';
  });

  constructor(
    private authApiService: AuthApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  togglePassword(): void {
    this.showPassword.update(v => !v);
  }

  onSubmit(): void {
    if (!this.matricula().trim() || !this.password().trim()) {
      Swal.fire('Error', 'Completa todos los campos', 'warning');
      return;
    }

    this.isLoading.set(true);

    this.authApiService.login({
      matricula: this.matricula(),
      password: this.password()
    }).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res.body?.token && res.body?.user) {
          this.authService.setSession(res.body.token, res.body.user);

          if (res.body.user.primer_ingreso) {
            this.router.navigate(['/onboarding']);
          } else {
            const role = res.body.user.rol;
            if (role === 'empresa') {
              this.router.navigate(['/empresa/dashboard']);
            } else if (role === 'admin') {
              this.router.navigate(['/admin/dashboard']);
            } else {
              this.router.navigate(['/inicio']);
            }
          }
        } else {
          Swal.fire('Error', 'Credenciales incorrectas', 'error');
        }
      },
      error: (e) => {
        this.isLoading.set(false);
        if (e.status === 401) {
          Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
        } else {
          Swal.fire('Error', 'Ocurrió un error al iniciar sesión', 'error');
        }
      }
    });
  }
}
