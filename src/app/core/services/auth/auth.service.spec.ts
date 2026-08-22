import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getToken / setSession', () => {
    it('should return null when no token stored', () => {
      expect(service.getToken()).toBeNull();
    });

    it('should store and retrieve token', () => {
      const user = { id: 1, nombre: 'Test', email: 'test@utc.mx', rol: 'egresado', primer_ingreso: false } as any;
      service.setSession('abc123', user);
      expect(service.getToken()).toBe('abc123');
    });
  });

  describe('getUser', () => {
    it('should return null when no user stored', () => {
      expect(service.getUser()).toBeNull();
    });

    it('should return parsed user', () => {
      const user = { id: 1, nombre: 'Luis', rol: 'egresado', primer_ingreso: false };
      localStorage.setItem('user', JSON.stringify(user));
      expect(service.getUser()).toEqual(user as any);
    });

    it('should return null on corrupted JSON', () => {
      localStorage.setItem('user', '{bad json');
      expect(service.getUser()).toBeNull();
    });
  });

  describe('isAuthenticated', () => {
    it('should return false with no token', () => {
      expect(service.isAuthenticated()).toBeFalse();
    });

    it('should return false with expired token', () => {
      // jwtDecode checks exp * 1000 > Date.now()
      const expiredPayload = { sub: 1, usuario: 'test', rol: 'egresado', primer_ingreso: false, iat: 1000000, exp: 1000001 };
      const fakeToken = 'header.' + btoa(JSON.stringify(expiredPayload)) + '.sig';
      expect(service.isAuthenticated()).toBeFalse();
    });

    it('should return true with valid future token', () => {
      const futureExp = Math.floor(Date.now() / 1000) + 3600;
      const payload = { sub: 1, usuario: 'test', rol: 'egresado', primer_ingreso: false, iat: 1000, exp: futureExp };
      const token = 'header.' + btoa(JSON.stringify(payload)) + '.sig';
      service.setSession(token, { id: 1, nombre: 'Test', email: 't@utc.mx', rol: 'egresado', primer_ingreso: false } as any);
      expect(service.isAuthenticated()).toBeTrue();
    });
  });

  describe('hasRole / hasAnyRole', () => {
    it('should match exact role', () => {
      localStorage.setItem('user', JSON.stringify({ id: 1, rol: 'admin' }));
      expect(service.hasRole('admin')).toBeTrue();
      expect(service.hasRole('egresado')).toBeFalse();
    });

    it('should match any of multiple roles', () => {
      localStorage.setItem('user', JSON.stringify({ id: 1, rol: 'empleador' }));
      expect(service.hasAnyRole(['admin', 'empleador'])).toBeTrue();
      expect(service.hasAnyRole(['admin', 'egresado'])).toBeFalse();
    });

    it('should return false when no user', () => {
      expect(service.hasRole('admin')).toBeFalse();
      expect(service.hasAnyRole(['admin'])).toBeFalse();
    });
  });

  describe('isFirstLogin', () => {
    it('should return true when primer_ingreso is true', () => {
      localStorage.setItem('user', JSON.stringify({ primer_ingreso: true }));
      expect(service.isFirstLogin()).toBeTrue();
    });

    it('should return false when primer_ingreso is false', () => {
      localStorage.setItem('user', JSON.stringify({ primer_ingreso: false }));
      expect(service.isFirstLogin()).toBeFalse();
    });

    it('should return false when no user', () => {
      expect(service.isFirstLogin()).toBeFalse();
    });
  });

  describe('logout', () => {
    it('should clear all localStorage', () => {
      service.setSession('token123', { id: 1 } as any);
      service.logout();
      expect(localStorage.getItem('token')).toBeNull();
      expect(localStorage.getItem('user')).toBeNull();
    });
  });
});
