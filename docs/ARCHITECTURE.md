# Arquitectura - BolsaLaboralFront

## QUICKREF
- arquitectura, folder structure, estructura carpetas, naming conventions
- standalone components, lazy loading, routing, guards
- servicios, interfaces, patrones Angular
- features/, core/, shared/

---

## ESTRUCTURA DE CARPETAS

```
src/
├── app/
│   ├── core/                      # Singleton services, guards, interceptors, layouts
│   │   ├── services/
│   │   │   └── auth/
│   │   │       └── auth.service.ts        # JWT logic: getToken, isAuthenticated, hasRole
│   │   ├── interceptors/
│   │   │   └── auth/
│   │   │       └── auth.interceptor.ts    # Auto-inject Bearer token
│   │   └── layout/
│   │       └── main-layout/
│   │           ├── main-layout.component.ts
│   │           ├── main-layout.component.html
│   │           └── main-layout.component.css
│   │
│   ├── features/                  # Feature-based modules CON lazy loading
│   │   ├── auth/
│   │   │   ├── pages/
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   ├── password-request/
│   │   │   │   └── password-reset/
│   │   │   ├── services/
│   │   │   │   └── auth-api.service.ts    # API calls: login, register, reset
│   │   │   ├── guards/
│   │   │   │   ├── login.guard.ts
│   │   │   │   └── reset-password.guard.ts
│   │   │   └── interfaces/
│   │   │       ├── ResponseAuth.ts
│   │   │       ├── LoginRequest.ts
│   │   │       ├── RegisterRequest.ts
│   │   │       ├── ResponseRequestPasswordReset.ts
│   │   │       └── ResponseResetPasswordWithToken.ts
│   │   │
│   │   ├── inicio/
│   │   │   ├── pages/
│   │   │   │   └── inicio/
│   │   │   └── guards/
│   │   │       └── inicio.guard.ts        # Auth guard (authGuard)
│   │   │
│   │   ├── ofertas/
│   │   │   ├── pages/
│   │   │   │   ├── ofertas-list/
│   │   │   │   └── ofertas-detail/
│   │   │   ├── services/                  # TODO
│   │   │   └── interfaces/                # TODO
│   │   │
│   │   ├── mis-postulaciones/
│   │   │   ├── pages/
│   │   │   ├── services/                  # TODO
│   │   │   └── interfaces/                # TODO
│   │   │
│   │   └── mi-perfil/
│   │       └── pages/
│   │
│   ├── shared/                    # Reusable UI components
│   │   └── components/            # TODO: buttons, modals, etc.
│   │
│   ├── interfaces/                # Global interfaces
│   ├── app.component.ts
│   ├── app.config.ts              # App providers (HttpClient, interceptors)
│   └── app.routes.ts              # Routes with lazy loading
│
├── environments/
│   ├── environment.ts            # apiUrl: localhost:8080, frontendUrl
│   └── environment.prod.ts
│
├── assets/
├── styles.css                    # Tailwind + CSS variables
├── index.html
└── main.ts
```

---

## NAMING CONVENTIONS

### Componentes (Pages) - en features/
```
{slug-modulo}.component.ts
{slug-modulo}.component.html
{slug-modulo}.component.css

Ubicación: src/app/features/{modulo}/pages/{nombre}/

Ejemplos:
- features/ofertas/pages/ofertas-list/ofertas-list.component.ts
- features/auth/pages/login/login.component.ts
```

### Servicios - CORE vs FEATURES

| Ubicación | Servicio | Responsabilidad |
|-----------|----------|-----------------|
| `core/services/auth/` | AuthService | Lógica JWT (getToken, isAuthenticated, getRoles, hasRole) |
| `features/auth/services/` | AuthApiService | Solo llamadas HTTP (login, register, revokeToken) |
| `features/*/services/` | *Service | API del módulo |

```
{Nombre}Service.ts

Ejemplos:
- core/services/auth/auth.service.ts (JWT logic)
- features/auth/services/auth-api.service.ts (API calls)
```

### Interfaces de API - en features/
```
Response{Nombre}.ts    # Respuesta de API
{Nombre}.ts           # Payload/request

Ubicación: src/app/features/{modulo}/interfaces/

Ejemplos:
- features/auth/interfaces/ResponseAuth.ts
- features/auth/interfaces/LoginRequest.ts
```

### Guards - en features/
```
{nombre}.guard.ts

Ubicación: src/app/features/{modulo}/guards/

Ejemplos:
- features/auth/guards/login.guard.ts
- features/inicio/guards/inicio.guard.ts (authGuard)
```

### Interceptores - en core/
```
{nombre}.interceptor.ts

Ubicación: src/app/core/interceptors/

Ejemplos:
- core/interceptors/auth/auth.interceptor.ts
```

---

## PATRONES DE ARQUITECTURA

### 1. Standalone Components
```typescript
@Component({
  selector: 'app-ofertas-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ofertas-list.component.html',
  styleUrl: './ofertas-list.component.css'
})
export class OfertasListComponent implements OnInit {
  // ...
}
```

### 2. Routing con Lazy Loading (OBLIGATORIO)
```typescript
// app.routes.ts - siempre usar loadComponent
export const routes: Routes = [
  // Público
  {
    path: 'login',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./features/auth/pages/login/login.component')
        .then(m => m.LoginComponent)
  },
  // Privado con layout y children
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
      }
    ]
  }
];
```

### 3. Servicios con HttpClient
```typescript
@Injectable({ providedIn: 'root' })
export class OfertasService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOfertas(params?: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/ofertas`, { params });
  }

  postularse(ofertaId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/postulaciones`, { oferta_id: ofertaId });
  }
}
```

### 4. Guards (Protección de rutas)
```typescript
// inicio.guard.ts (authGuard)
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  // Check roles if specified
  const requiredRoles = route.data['roles'] as string[];
  if (requiredRoles?.length && !authService.hasAnyRole(requiredRoles)) {
    router.navigate(['/inicio']);
    return false;
  }

  return true;
};
```

---

## ESTRUCTURA DE MÓDULO NUEVO (features/)

Para crear un nuevo módulo en features/:

```
src/app/features/{nombre-modulo}/
├── pages/
│   └── {nombre-modulo}/
│       ├── {nombre-modulo}.component.ts
│       ├── {nombre-modulo}.component.html
│       └── {nombre-modulo}.component.css
├── services/
│   └── {nombre-modulo}.service.ts   # API calls
├── interfaces/
│   ├── Response{Nombre}.ts
│   └── {Nombre}.ts
└── guards/
    └── {nombre}.guard.ts           # Si necesita guard
```

Y agregar la ruta en app.routes.ts con lazy loading:
```typescript
{
  path: 'nombre-modulo',
  canActivate: [authGuard],
  data: { roles: ['candidato'] },
  loadComponent: () =>
    import('./features/{nombre-modulo}/pages/{nombre-modulo}/{nombre-modulo}.component')
      .then(m => m.{Nombre}Component)
}
```

---

## FLUJO DE DATOS

```
1. PAGE COMPONENT
   ↓ (llama servicio)
2. SERVICE
   ↓ (HttpClient request)
3. API BACKEND (BolsaLaboralBack)
   ↓ (response)
4. SERVICE
   ↓ (Observable)
5. PAGE COMPONENT
   ↓ (suscribe)
6. TEMPLATE (HTML)
```

---

## ERROR HANDLING

```typescript
this.ofertasService.getOfertas().subscribe({
  next: (res) => { /* éxito */ },
  error: (e) => {
    console.error(e);
    if (e.status === 404 && e.error?.message) {
      this.mensaje = e.error.message;
    } else {
      this.mensaje = 'Ocurrió un error al obtener la información.';
    }
  }
});
```

---

## MEJORES PRÁCTICAS

1. **Siempre** usar `standalone: true` en componentes
2. **Siempre** incluir `CommonModule`, `FormsModule`, `RouterModule` en imports
3. **Nunca** hardcodear URLs de API - usar `environment.ts`
4. **Siempre** manejar errores en suscripciones
5. **Siempre** implementar `OnDestroy` para limpiar suscripciones
6. **Usar** `ChangeDetectionStrategy.OnPush` cuando sea posible
7. **Separar** lógica JWT (core/AuthService) de llamadas HTTP (features/AuthApiService)
