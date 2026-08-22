import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './inicio.guard';
import { AuthService } from '../../../core/services/auth/auth.service';

describe('authGuard (inicio)', () => {
  let router: Router;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });
    router = TestBed.inject(Router);
  });

  afterEach(() => localStorage.clear());

  const runGuard = (routeData: any = {}) => {
    const route = { data: routeData } as any;
    const state = { root: {} } as any;
    return TestBed.runInInjectionContext(() => authGuard(route, state));
  };

  const setAuthenticated = () => {
    const futureExp = Math.floor(Date.now() / 1000) + 3600;
    const payload = { sub: 1, usuario: 'test', rol: 'egresado', primer_ingreso: false, iat: 1000, exp: futureExp };
    const token = 'header.' + btoa(JSON.stringify(payload)) + '.sig';
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ id: 1, rol: 'egresado' }));
  };

  it('should allow access when authenticated and no required roles', () => {
    setAuthenticated();
    expect(runGuard({})).toBeTrue();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should redirect to /login when not authenticated', () => {
    expect(runGuard()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should redirect when authenticated but missing required role', () => {
    setAuthenticated();
    expect(runGuard({ roles: ['admin'] })).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/inicio']);
  });
});
