import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

import { LoginRequest } from '../interfaces/LoginRequest';
import { ResponseAuth } from '../interfaces/ResponseAuth';
import { RegisterRequest } from '../interfaces/RegisterRequest';
import { ResponseRequestPasswordReset } from '../interfaces/ResponseRequestPasswordReset';
import { ResponseResetPasswordWithToken } from '../interfaces/ResponseResetPasswordWithToken';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(objeto: LoginRequest): Observable<HttpResponse<ResponseAuth>> {
    return this.http.post<ResponseAuth>(
      `${this.apiUrl}/login`,
      objeto,
      { observe: 'response' }
    );
  }

  register(objeto: RegisterRequest): Observable<HttpResponse<ResponseAuth>> {
    return this.http.post<ResponseAuth>(
      `${this.apiUrl}/register`,
      objeto,
      { observe: 'response' }
    );
  }

  sendRequestPasswordReset(email: string): Observable<HttpResponse<ResponseRequestPasswordReset>> {
    return this.http.post<ResponseRequestPasswordReset>(
      `${this.apiUrl}/request-password-reset`,
      { email },
      { observe: 'response' }
    );
  }

  resetPasswordWithToken(
    token: string,
    newPassword: string,
    confirmPassword: string
  ): Observable<HttpResponse<ResponseResetPasswordWithToken>> {
    return this.http.post<ResponseResetPasswordWithToken>(
      `${this.apiUrl}/reset-password`,
      { token, new_password: newPassword, confirm_password: confirmPassword },
      { observe: 'response' }
    );
  }

  revokeToken(): Observable<HttpResponse<{ success: boolean }>> {
    return this.http.post<{ success: boolean }>(
      `${this.apiUrl}/blacklist-token`,
      {},
      { observe: 'response' }
    );
  }
}
