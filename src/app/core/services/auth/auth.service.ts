import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { jwtDecode } from 'jwt-decode';

interface JwtRole {
  id: number;
  nombre: string;
}

interface AppJwtPayload {
  sub: number;
  usuario: string;
  perfil_id: number;
  cve_persona: number;
  roles: JwtRole[];
  iat: number;
  exp: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  private decodeToken(): AppJwtPayload | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      return jwtDecode<AppJwtPayload>(token);
    } catch {
      return null;
    }
  }

  getRoles(): JwtRole[] {
    return this.decodeToken()?.roles ?? [];
  }

  hasRole(roleName: string): boolean {
    return this.getRoles().some(r => r.nombre === roleName);
  }

  hasAnyRole(roleNames: string[]): boolean {
    return this.getRoles().some(r => roleNames.includes(r.nombre));
  }

  getUsuario() {
    const decoded = this.decodeToken();
    if (!decoded) return null;
    return {
      id: decoded.sub,
      usuario: decoded.usuario,
      perfil_id: decoded.perfil_id,
      cve_persona: decoded.cve_persona
    };
  }

  isAuthenticated(): boolean {
    const decoded = this.decodeToken();
    if (!decoded) return false;
    return decoded.exp * 1000 > Date.now();
  }

  logout(): void {
    localStorage.clear();
  }
}
