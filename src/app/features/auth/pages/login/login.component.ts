import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  isLoading = false;

  constructor(
    private authApiService: AuthApiService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.email.trim() || !this.password.trim()) {
      Swal.fire('Error', 'Completa todos los campos', 'warning');
      return;
    }

    this.isLoading = true;

    this.authApiService.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.body?.token && res.body?.refresh_token) {
          localStorage.setItem('token', res.body.token);
          localStorage.setItem('refresh_token', res.body.refresh_token);
          this.router.navigate(['/inicio']);
        } else {
          Swal.fire('Error', 'Credenciales incorrectas', 'error');
        }
      },
      error: (e) => {
        this.isLoading = false;
        if (e.status === 401) {
          Swal.fire('Error', 'Usuario o contrase&ntilde;a incorrectos', 'error');
        } else {
          Swal.fire('Error', 'Ocurri&oacute; un error al iniciar sesi&oacute;n', 'error');
        }
      }
    });
  }
}
