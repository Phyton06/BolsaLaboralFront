import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, delay, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

import { LoginRequest } from '../interfaces/LoginRequest';
import { LoginResponse } from '../interfaces/LoginResponse';
import { OnboardingRequest } from '../interfaces/OnboardingRequest';
import { ApiResponse } from '../interfaces/ApiResponse';
import { User } from '../interfaces/User';
import { SolicitudConvenioRequest } from '../interfaces/SolicitudConvenioRequest';
import { ApiEnvelope } from '../interfaces/ApiEnvelope';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ─── Auth ───────────────────────────────────────────────

  /**
   * POST /auth/login
   * Inicia sesión con matrícula y contraseña.
   * Devuelve JWT access token + refresh token + datos del usuario.
   */
  login(objeto: LoginRequest): Observable<HttpResponse<LoginResponse>> {
    return this.http
      .post<ApiEnvelope<LoginResponse>>(`${this.apiUrl}/auth/login`, objeto)
      .pipe(
        map((envelope) =>
          new HttpResponse({
            status: 200,
            body: envelope.data,
          })
        )
      );
  }

  /**
   * POST /auth/logout
   * Cierra sesión agregando el token actual a la blacklist.
   */
  logout(): Observable<HttpResponse<ApiResponse>> {
    return this.http
      .post<ApiEnvelope<{}>>(`${this.apiUrl}/auth/logout`, {})
      .pipe(
        map((envelope) =>
          new HttpResponse({
            status: 200,
            body: { success: envelope.success, message: envelope.message },
          })
        )
      );
  }

  /**
   * POST /auth/onboarding
   * Completa datos de contacto obligatorios en el primer inicio de sesión.
   */
  onboarding(data: OnboardingRequest): Observable<HttpResponse<{ status: string; user: User }>> {
    return this.http
      .post<ApiEnvelope<{ user: { id: number; primer_ingreso: boolean } }>>(
        `${this.apiUrl}/auth/onboarding`,
        data
      )
      .pipe(
        map((envelope) =>
          new HttpResponse({
            status: 200,
            body: {
              status: 'success',
              user: {
                id: envelope.data.user.id,
                primer_ingreso: envelope.data.user.primer_ingreso,
              } as User,
            },
          })
        )
      );
  }

  /**
   * PUT /auth/password
   * Cambia la contraseña del usuario autenticado.
   */
  changePassword(oldPassword: string, newPassword: string): Observable<HttpResponse<ApiResponse>> {
    return this.http
      .put<ApiEnvelope<{}>>(`${this.apiUrl}/auth/password`, {
        old_password: oldPassword,
        new_password: newPassword,
      })
      .pipe(
        map((envelope) =>
          new HttpResponse({
            status: 200,
            body: { success: envelope.success, message: envelope.message },
          })
        )
      );
  }

  // ─── Convenios ──────────────────────────────────────────

  // TODO: Backend pendiente — endpoint no implementado
  solicitarConvenio(data: SolicitudConvenioRequest): Observable<HttpResponse<{ status: string; message: string }>> {
    return of(new HttpResponse({
      status: 200,
      body: {
        status: 'success',
        message: 'Tu solicitud ha sido recibida. El personal de la UT se pondrá en contacto contigo pronto.'
      }
    })).pipe(delay(800));
  }

  // ─── Password Reset ─────────────────────────────────────

  // TODO: Backend pendiente — endpoint no implementado
  sendRequestPasswordReset(email: string): Observable<HttpResponse<ApiResponse>> {
    return of(new HttpResponse({
      status: 200,
      body: { success: true, message: 'Si el correo existe, se enviarán instrucciones.' }
    })).pipe(delay(500));
  }

  // TODO: Backend pendiente — endpoint no implementado
  resetPasswordWithToken(token: string, newPassword: string, confirmPassword: string): Observable<HttpResponse<ApiResponse>> {
    return of(new HttpResponse({
      status: 200,
      body: { success: true, message: 'Contraseña actualizada correctamente.' }
    })).pipe(delay(500));
  }

  // TODO: Backend pendiente — endpoint no implementado
  revokeToken(): Observable<HttpResponse<ApiResponse>> {
    return of(new HttpResponse({
      status: 200,
      body: { success: true, message: 'Token revocado correctamente.' }
    })).pipe(delay(300));
  }
}
