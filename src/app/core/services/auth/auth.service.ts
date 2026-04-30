import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { User } from '../../../features/auth/interfaces/User';

interface AppJwtPayload {
  sub: number;
  usuario: string;
  rol: string;
  primer_ingreso: boolean;
  iat: number;
  exp: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'token';
  private userKey = 'user';

  constructor() {}

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): User | null {
    const userStr = localStorage.getItem(this.userKey);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr) as User;
    } catch {
      return null;
    }
  }

  setSession(token: string, user: User): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const decoded = jwtDecode<AppJwtPayload>(token);
      return decoded.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  isFirstLogin(): boolean {
    const user = this.getUser();
    return user?.primer_ingreso ?? false;
  }

  hasRole(roleName: string): boolean {
    const user = this.getUser();
    return user?.rol === roleName;
  }

  hasAnyRole(roleNames: string[]): boolean {
    const user = this.getUser();
    return user ? roleNames.includes(user.rol) : false;
  }

  logout(): void {
    localStorage.clear();
  }
}
