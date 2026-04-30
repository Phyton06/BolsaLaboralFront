import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { loginGuard } from './features/auth/guards/login.guard';
import { resetPasswordGuard } from './features/auth/guards/reset-password.guard';
import { authGuard } from './features/inicio/guards/inicio.guard';

// Layout
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // RUTAS PÚBLICAS (lazy loading)
  {
    path: 'login',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./features/auth/pages/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: 'solicitar-convenio',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./features/auth/pages/solicitar-convenio/solicitar-convenio.component')
        .then(m => m.SolicitarConvenioComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./features/auth/pages/password-request/password-request.component')
        .then(m => m.PasswordRequestComponent)
  },
  {
    path: 'reset-password',
    canActivate: [resetPasswordGuard],
    loadComponent: () =>
      import('./features/auth/pages/password-reset/password-reset.component')
        .then(m => m.PasswordResetComponent)
  },

  // RUTAS PRIVADAS (con layout y children)
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
      // Ofertas (público dentro de auth, también accesible sin login si se configura)
      {
        path: 'ofertas',
        loadComponent: () =>
          import('./features/ofertas/pages/ofertas-list/ofertas-list.component')
            .then(m => m.OfertasListComponent)
      },
      {
        path: 'ofertas/:id',
        loadComponent: () =>
          import('./features/ofertas/pages/ofertas-detail/ofertas-detail.component')
            .then(m => m.OfertasDetailComponent)
      },
      // Postulaciones (candidato)
      {
        path: 'mis-postulaciones',
        canActivate: [authGuard],
        data: { roles: ['candidato'] },
        loadComponent: () =>
          import('./features/mis-postulaciones/pages/mis-postulaciones.component')
            .then(m => m.MisPostulacionesComponent)
      },
      // Perfil
      {
        path: 'mi-perfil',
        loadComponent: () =>
          import('./features/mi-perfil/pages/mi-perfil.component')
            .then(m => m.MiPerfilComponent)
      },
      // Onboarding
      {
        path: 'onboarding',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/auth/pages/onboarding/onboarding.component')
            .then(m => m.OnboardingComponent)
      }
      // TODO: Agregar rutas para empresa y admin
      // { path: 'mis-ofertas', canActivate: [authGuard], data: { roles: ['empresa'] }, ... }
      // { path: 'gestion-postulaciones/:ofertaId', canActivate: [authGuard], data: { roles: ['empresa'] }, ... }
      // { path: 'admin/usuarios', canActivate: [authGuard], data: { roles: ['admin'] }, ... }
      // { path: 'admin/estadisticas', canActivate: [authGuard], data: { roles: ['admin'] }, ... }
    ]
  },

  // 404
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
