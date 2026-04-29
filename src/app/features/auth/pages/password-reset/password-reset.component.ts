import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent implements OnInit {
  token = '';
  newPassword = '';
  confirmPassword = '';
  isLoading = false;
  tokenValid = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authApiService: AuthApiService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['t'] || '';
      if (!this.token) {
        this.tokenValid = false;
      }
    });
  }

  onSubmit(): void {
    if (!this.newPassword.trim() || !this.confirmPassword.trim()) {
      Swal.fire('Error', 'Completa ambos campos', 'warning');
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      Swal.fire('Error', 'Las contrase&ntilde;as no coinciden', 'warning');
      return;
    }
    if (this.newPassword.length < 8) {
      Swal.fire('Error', 'La contrase&ntilde;a debe tener al menos 8 caracteres', 'warning');
      return;
    }

    this.isLoading = true;

    this.authApiService.resetPasswordWithToken(this.token, this.newPassword, this.confirmPassword).subscribe({
      next: () => {
        this.isLoading = false;
        Swal.fire('Listo', 'Contrase&ntilde;a actualizada correctamente', 'success').then(() => {
          this.router.navigate(['/login']);
        });
      },
      error: () => {
        this.isLoading = false;
        Swal.fire('Error', 'No se pudo actualizar la contrase&ntilde;a. El enlace puede estar expirado.', 'error');
      }
    });
  }
}
