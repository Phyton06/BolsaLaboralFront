import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import Swal from 'sweetalert2';
import { signal } from '@angular/core';

@Component({
  selector: 'app-password-request',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './password-request.component.html',
  styleUrl: './password-request.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordRequestComponent {
  email = signal('');
  isLoading = signal(false);
  enviado = signal(false);

  constructor(private authApiService: AuthApiService) {}

  onSubmit(): void {
    if (!this.email().trim()) {
      Swal.fire('Error', 'Ingresa tu correo electrónico', 'warning');
      return;
    }

    this.isLoading.set(true);

    this.authApiService.sendRequestPasswordReset(this.email()).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.enviado.set(true);
      },
      error: () => {
        this.isLoading.set(false);
        this.enviado.set(true);
      }
    });
  }
}
