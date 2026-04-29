import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nombre = '';
  email = '';
  password = '';
  confirmPassword = '';
  tipo: 'candidato' | 'empresa' = 'candidato';
  telefono = '';
  nombreEmpresa = '';
  isLoading = false;

  constructor(
    private authApiService: AuthApiService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.nombre.trim() || !this.email.trim() || !this.password.trim()) {
      Swal.fire('Error', 'Completa los campos obligatorios', 'warning');
      return;
    }
    if (this.password !== this.confirmPassword) {
      Swal.fire('Error', 'Las contrase&ntilde;as no coinciden', 'warning');
      return;
    }

    this.isLoading = true;

    const data: any = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      confirm_password: this.confirmPassword,
      tipo: this.tipo
    };

    if (this.tipo === 'candidato' && this.telefono) data.telefono = this.telefono;
    if (this.tipo === 'empresa') {
      if (this.nombreEmpresa) data.nombre_empresa = this.nombreEmpresa;
    }

    this.authApiService.register(data).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.body?.token) {
          localStorage.setItem('token', res.body.token);
          localStorage.setItem('refresh_token', res.body.refresh_token || '');
          this.router.navigate(['/inicio']);
        } else {
          Swal.fire('Error', res.body?.message || 'Error al registrarse', 'error');
        }
      },
      error: (e) => {
        this.isLoading = false;
        const msg = e.error?.message || 'Ocurri&oacute; un error al registrarse';
        Swal.fire('Error', msg, 'error');
      }
    });
  }
}
