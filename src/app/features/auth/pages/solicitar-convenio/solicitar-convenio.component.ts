import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitar-convenio',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './solicitar-convenio.component.html',
  styleUrls: ['../../styles/auth-layout.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitarConvenioComponent {
  nombreEmpresa = signal('');
  correo = signal('');
  telefono = signal('');
  representante = signal('');
  isLoading = signal(false);

  constructor(
    private authApiService: AuthApiService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (
      !this.nombreEmpresa().trim() ||
      !this.correo().trim() ||
      !this.telefono().trim() ||
      !this.representante().trim()
    ) {
      Swal.fire('Error', 'Completa todos los campos obligatorios', 'warning');
      return;
    }

    this.isLoading.set(true);

    this.authApiService.solicitarConvenio({
      nombre_empresa: this.nombreEmpresa(),
      correo: this.correo(),
      telefono: this.telefono(),
      representante: this.representante()
    }).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res.body?.status === 'success') {
          Swal.fire({
            icon: 'success',
            title: 'Solicitud enviada',
            text: res.body.message,
            confirmButtonColor: 'var(--brand-700)'
          }).then(() => {
            this.router.navigate(['/login']);
          });
        }
      },
      error: () => {
        this.isLoading.set(false);
        Swal.fire('Error', 'Ocurrió un error al enviar la solicitud', 'error');
      }
    });
  }
}
