# Componentes - BolsaLaboralFront

## QUICKREF
- component, page, service, guard, route, interface
- ng generate, template, código
- crear modulo, nuevo componente

---

## 1. PAGE COMPONENT

### Template Estándar (TypeScript)
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MiServicioService } from '../../../services/mi-servicio.service';

@Component({
  selector: 'app-mi-componente',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css'
})
export class MiComponenteComponent implements OnInit {

  isLoading = false;
  mensaje: string | null = null;
  datos: any[] = [];

  constructor(
    private miService: MiServicioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.isLoading = true;
    this.mensaje = null;

    this.miService.getDatos().subscribe({
      next: (res) => {
        if (res.success && res.data?.length > 0) {
          this.datos = res.data;
        } else {
          this.mensaje = 'No hay información.';
        }
        this.isLoading = false;
      },
      error: (e) => {
        this.isLoading = false;
        console.error(e);
        this.mensaje = 'Ocurrió un error.';
      }
    });
  }
}
```

### Template Estándar (HTML)
```html
<!-- Wrapper -->
<div class="bg-background min-h-full p-4">
  <!-- Card -->
  <div class="rounded-xl border border-border bg-card shadow-sm overflow-hidden">

    <!-- Header -->
    <div class="px-4 py-3 border-b border-border">
      <h2 class="text-xl font-semibold text-card-foreground">Título</h2>
    </div>

    <!-- Contenido -->
    <div class="p-4">
      <!-- Loading -->
      <div *ngIf="isLoading" class="flex flex-col items-center justify-center py-16">
        <span class="animate-spin h-10 w-10 border-4 border-primary/30 border-t-primary rounded-full mb-4"></span>
        <p class="text-sm text-muted-foreground">Cargando...</p>
      </div>

      <!-- Mensaje vacío -->
      <div *ngIf="!isLoading && mensaje" class="flex flex-col items-center justify-center py-16 text-center">
        <p class="text-lg font-medium text-foreground">{{ mensaje }}</p>
      </div>

      <!-- Resultados -->
      <div *ngIf="!isLoading && datos.length > 0">
        <div *ngFor="let item of datos">
          <!-- contenido -->
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## 2. SERVICIO

### Template Estándar
```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MiServicioService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDatos(params?: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/endpoint`, { params });
  }

  crearDato(data: any): Observable<HttpResponse<any>> {
    return this.http.post(`${this.apiUrl}/endpoint`, data, { observe: 'response' });
  }

  actualizarDato(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/endpoint/${id}`, data);
  }

  eliminarDato(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/endpoint/${id}`);
  }
}
```

---

## 3. INTERFACE

### Response Interface
```typescript
// features/mi-modulo/interfaces/ResponseMiDatos.ts
export interface ResponseMiDatos {
  success: boolean;
  message?: string;
  data: MiDatoItem[];
}

export interface MiDatoItem {
  id: number;
  nombre: string;
}
```

---

## 4. GUARD

### Auth Guard (con roles)
```typescript
// guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  const requiredRoles = route.data['roles'] as string[];
  if (requiredRoles?.length && !authService.hasAnyRole(requiredRoles)) {
    router.navigate(['/inicio']);
    return false;
  }

  return true;
};
```

### Login Guard (redirect si ya autenticado)
```typescript
export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    router.navigate(['/inicio']);
    return false;
  }

  return true;
};
```

---

## 5. ROUTES (LAZY LOADING - OBLIGATORIO)

```typescript
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // PÚBLICAS (lazy loading)
  {
    path: 'login',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./features/auth/pages/login/login.component')
        .then(m => m.LoginComponent)
  },

  // PRIVADAS (lazy loading con layout)
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('./features/inicio/pages/inicio/inicio.component')
            .then(m => m.InicioComponent)
      },
      {
        path: 'mis-postulaciones',
        canActivate: [authGuard],
        data: { roles: ['candidato'] },
        loadComponent: () =>
          import('./features/mis-postulaciones/pages/mis-postulaciones.component')
            .then(m => m.MisPostulacionesComponent)
      }
    ]
  },

  { path: '**', redirectTo: '/login' }
];
```

---

## 6. AUTH INTERCEPTOR

```typescript
// core/interceptors/auth/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(authReq);
  }

  return next(req);
};
```

En app.config.ts:
```typescript
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom(AppRoutingModule)
  ]
};
```

---

## 7. AUTH SERVICES (CORE + FEATURES)

### AuthService (core) - Solo lógica JWT
```typescript
// core/services/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  private decodeToken(): AppJwtPayload | null {
    const token = this.getToken();
    if (!token) return null;
    try { return jwtDecode<AppJwtPayload>(token); } catch { return null; }
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

  isAuthenticated(): boolean {
    const decoded = this.decodeToken();
    if (!decoded) return false;
    return decoded.exp * 1000 > Date.now();
  }

  logout(): void {
    localStorage.clear();
  }
}
```

### AuthApiService (features) - Solo API calls
```typescript
// features/auth/services/auth-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<HttpResponse<ResponseAuth>> {
    return this.http.post<ResponseAuth>(`${this.apiUrl}/login`, data, { observe: 'response' });
  }

  register(data: RegisterRequest): Observable<HttpResponse<ResponseAuth>> {
    return this.http.post<ResponseAuth>(`${this.apiUrl}/register`, data, { observe: 'response' });
  }

  revokeToken(): Observable<HttpResponse<any>> {
    return this.http.post(`${this.apiUrl}/blacklist-token`, {}, { observe: 'response' });
  }
}
```

---

## FLUJO DE CREACIÓN DE MÓDULO

1. **Crear servicio**: `ng g s features/mi-modulo/services/mi-servicio`
2. **Crear interfaces**: manualmente en `features/mi-modulo/interfaces/`
3. **Crear componente**: `ng g c features/mi-modulo/pages/mi-componente`
4. **Agregar ruta**: en `app.routes.ts` con `loadComponent`
5. **Crear guard** (si needed): `ng g guard features/mi-modulo/guards/mi-guard`
6. **Agregar al menú**: en `main-layout.component.html`
