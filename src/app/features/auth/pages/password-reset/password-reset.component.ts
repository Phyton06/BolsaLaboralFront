import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import Swal from 'sweetalert2';
import { signal } from '@angular/core';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordResetComponent implements OnInit {
  token = signal('');
  newPassword = signal('');
  confirmPassword = signal('');
  isLoading = signal(false);
  tokenValid = signal(true);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authApiService: AuthApiService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const t = params['t'] || '';
      this.token.set(t);
      if (!t) {
        this.tokenValid.set(false);
      }
    });
  }

  onSubmit(): void {
    if (!this.newPassword().trim() || !this.confirmPassword().trim()) {
      Swal.fire('Error', 'Completa ambos campos', 'warning');
      return;
    }
    if (this.newPassword() !== this.confirmPassword()) {
      Swal.fire('Error', 'Las contraseñas no coinciden', 'warning');
      return;
    }
    if (this.newPassword().length < 8) {
      Swal.fire('Error', 'La contraseña debe tener al menos 8 caracteres', 'warning');
      return;
    }

    this.isLoading.set(true);

    this.authApiService.resetPasswordWithToken(this.token(), this.newPassword(), this.confirmPassword()).subscribe({
      next: () => {
        this.isLoading.set(false);
        Swal.fire('Listo', 'Contraseña actualizada correctamente', 'success').then(() => {
          this.router.navigate(['/login']);
        });
      },
      error: () => {
        this.isLoading.set(false);
        Swal.fire('Error', 'No se pudo actualizar la contraseña. El enlace puede estar expirado.', 'error');
      }
    });
  }
}
