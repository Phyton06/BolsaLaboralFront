import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password-request',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './password-request.component.html',
  styleUrl: './password-request.component.css'
})
export class PasswordRequestComponent {
  email = '';
  isLoading = false;
  enviado = false;

  constructor(private authApiService: AuthApiService) {}

  onSubmit(): void {
    if (!this.email.trim()) {
      Swal.fire('Error', 'Ingresa tu correo electr&oacute;nico', 'warning');
      return;
    }

    this.isLoading = true;

    this.authApiService.sendRequestPasswordReset(this.email).subscribe({
      next: () => {
        this.isLoading = false;
        this.enviado = true;
      },
      error: () => {
        this.isLoading = false;
        // No revelar si el email existe por seguridad
        this.enviado = true;
      }
    });
  }
}
