import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { environment } from '../../../../environments/environment';

import { LoginRequest } from '../interfaces/LoginRequest';
import { LoginResponse } from '../interfaces/LoginResponse';
import { OnboardingRequest } from '../interfaces/OnboardingRequest';
import { ApiResponse } from '../interfaces/ApiResponse';
import { User } from '../interfaces/User';
import { SolicitudConvenioRequest } from '../interfaces/SolicitudConvenioRequest';

// Mock data
const MOCK_USERS: Record<string, User> = {
  'EGR001': { id: 1, nombre: 'Juan Egresado', rol: 'egresado', primer_ingreso: true },
  'EMP001': { id: 2, nombre: 'Empresa S.A.', rol: 'empresa', primer_ingreso: false },
  'ADM001': { id: 3, nombre: 'Admin UT', rol: 'admin', primer_ingreso: false },
};

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ─── Auth ───────────────────────────────────────────────

  login(objeto: LoginRequest): Observable<HttpResponse<LoginResponse>> {
    const user = MOCK_USERS[objeto.matricula];
    const mockResponse: LoginResponse = {
      token: `fake-jwt-token-${objeto.matricula}-${Date.now()}`,
      user: user || MOCK_USERS['EGR001']
    };

    if (user && objeto.password === 'hash') {
      return of(new HttpResponse({
        status: 200,
        body: mockResponse
      })).pipe(delay(500));
    }

    return of(new HttpResponse({
      status: 401,
      body: { status: 'error', message: 'Credenciales incorrectas' } as any
    })).pipe(delay(500));
  }

  logout(): Observable<HttpResponse<ApiResponse>> {
    return of(new HttpResponse({
      status: 200,
      body: { status: 'success' }
    })).pipe(delay(300));
  }

  onboarding(data: OnboardingRequest): Observable<HttpResponse<{ status: string; user: User }>> {
    const updatedUser: User = {
      id: 1,
      nombre: 'Juan Egresado',
      rol: 'egresado',
      primer_ingreso: false
    };
    return of(new HttpResponse({
      status: 200,
      body: { status: 'success', user: updatedUser }
    })).pipe(delay(500));
  }

  changePassword(oldPassword: string, newPassword: string): Observable<HttpResponse<ApiResponse>> {
    return of(new HttpResponse({
      status: 200,
      body: { status: 'success' }
    })).pipe(delay(500));
  }

  // ─── Convenios ──────────────────────────────────────────

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

  sendRequestPasswordReset(email: string): Observable<HttpResponse<ApiResponse>> {
    return of(new HttpResponse({
      status: 200,
      body: { status: 'success' }
    })).pipe(delay(500));
  }

  resetPasswordWithToken(token: string, newPassword: string, confirmPassword: string): Observable<HttpResponse<ApiResponse>> {
    return of(new HttpResponse({
      status: 200,
      body: { status: 'success' }
    })).pipe(delay(500));
  }

  revokeToken(): Observable<HttpResponse<ApiResponse>> {
    return of(new HttpResponse({
      status: 200,
      body: { status: 'success' }
    })).pipe(delay(300));
  }
}
