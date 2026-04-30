import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import { AuthService } from '../../../../core/services/auth/auth.service';
import Swal from 'sweetalert2';
import { signal } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnboardingComponent {
  telefono = signal('');
  correoPersonal = signal('');
  linkedin = signal('');
  isLoading = signal(false);

  constructor(
    private authApiService: AuthApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.telefono().trim() || !this.correoPersonal().trim()) {
      Swal.fire('Error', 'Completa los campos obligatorios', 'warning');
      return;
    }

    this.isLoading.set(true);

    this.authApiService.onboarding({
      telefono: this.telefono(),
      correo_personal: this.correoPersonal(),
      linkedin: this.linkedin()
    }).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res.body?.status === 'success') {
          // Update user in localStorage
          const currentUser = this.authService.getUser();
          if (currentUser) {
            currentUser.primer_ingreso = false;
            localStorage.setItem('user', JSON.stringify(currentUser));
          }
          Swal.fire('Éxito', 'Datos actualizados correctamente', 'success');
          this.router.navigate(['/inicio']);
        }
      },
      error: () => {
        this.isLoading.set(false);
        Swal.fire('Error', 'Ocurrió un error', 'error');
      }
    });
  }
}
