import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { loginGuard } from './login.guard';
import { AuthService } from '../../../core/services/auth/auth.service';

describe('loginGuard', () => {
  let router: Router;
  let authService: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
  });

  afterEach(() => localStorage.clear());

  const runGuard = () => {
    const route = {} as any;
    const state = { root: {} } as any;
    return TestBed.runInInjectionContext(() => loginGuard(route, state));
  };

  it('should allow access when not authenticated', () => {
    expect(runGuard()).toBeTrue();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should redirect to /inicio when already authenticated', () => {
    const futureExp = Math.floor(Date.now() / 1000) + 3600;
    const payload = { sub: 1, usuario: 'test', rol: 'egresado', primer_ingreso: false, iat: 1000, exp: futureExp };
    const token = 'header.' + btoa(JSON.stringify(payload)) + '.sig';
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ id: 1, rol: 'egresado' }));

    expect(runGuard()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/inicio']);
  });
});
