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
      // Egresado routes
      {
        path: 'inicio',
        loadComponent: () =>
          import('./features/inicio/inicio.component')
            .then(m => m.InicioComponent)
      },
      {
        path: 'ofertas',
        loadComponent: () =>
          import('./features/ofertas/ofertas-list.component')
            .then(m => m.OfertasListComponent)
      },
      {
        path: 'ofertas/:id',
        loadComponent: () =>
          import('./features/ofertas/ofertas-detail.component')
            .then(m => m.OfertasDetailComponent)
      },
      {
        path: 'mis-postulaciones',
        canActivate: [authGuard],
        data: { roles: ['candidato'] },
        loadComponent: () =>
          import('./features/mis-postulaciones/pages/mis-postulaciones.component')
            .then(m => m.MisPostulacionesComponent)
      },
      {
        path: 'evaluaciones',
        loadComponent: () =>
          import('./features/evaluaciones/evaluacion.component')
            .then(m => m.EvaluacionComponent)
      },
      {
        path: 'mi-radar',
        loadComponent: () =>
          import('./features/reporte/reporte.component')
            .then(m => m.ReporteComponent)
      },
      {
        path: 'mi-perfil',
        loadComponent: () =>
          import('./features/mi-perfil/mi-perfil.component')
            .then(m => m.MiPerfilComponent)
      },
      {
        path: 'guia',
        loadComponent: () =>
          import('./features/guia/guia.component')
            .then(m => m.GuiaComponent)
      },
      {
        path: 'mensajes',
        loadComponent: () =>
          import('./features/mensajes/mensajes.component')
            .then(m => m.MensajesComponent)
      },
      {
        path: 'config',
        loadComponent: () =>
          import('./features/config/config.component')
            .then(m => m.ConfigComponent)
      },

      // Empresa routes
      {
        path: 'empresa/dashboard',
        canActivate: [authGuard],
        data: { roles: ['empresa'] },
        loadComponent: () =>
          import('./features/empresa/dashboard/dashboard.component')
            .then(m => m.EmpresaDashboardComponent)
      },
      {
        path: 'empresa/publicar',
        canActivate: [authGuard],
        data: { roles: ['empresa'] },
        loadComponent: () =>
          import('./features/empresa/publicar/publicar.component')
            .then(m => m.EmpresaPublicarComponent)
      },
      {
        path: 'empresa/candidatos',
        canActivate: [authGuard],
        data: { roles: ['empresa'] },
        loadComponent: () =>
          import('./features/empresa/candidatos/candidatos.component')
            .then(m => m.EmpresaCandidatosComponent)
      },

      // Admin routes
      {
        path: 'admin/dashboard',
        canActivate: [authGuard],
        data: { roles: ['admin'] },
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard.component')
            .then(m => m.AdminDashboardComponent)
      },
      {
        path: 'admin/insercion',
        canActivate: [authGuard],
        data: { roles: ['admin'] },
        loadComponent: () =>
          import('./features/admin/insercion/insercion.component')
            .then(m => m.AdminInsercionComponent)
      },

      // Onboarding
      {
        path: 'onboarding',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/auth/pages/onboarding/onboarding.component')
            .then(m => m.OnboardingComponent)
      },
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
