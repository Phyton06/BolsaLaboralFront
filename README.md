# BolsaLaboral Frontend

[![CI](https://github.com/Phyton06/BolsaLaboralFront/actions/workflows/deploy.yml/badge.svg)](https://github.com/Phyton06/BolsaLaboralFront/actions/workflows/deploy.yml)
[![Tests](https://img.shields.io/badge/tests-28%20passed-brightgreen)](https://github.com/Phyton06/BolsaLaboralFront/actions/workflows/deploy.yml)

> Angular 17 SPA for the university job board — connects graduates with employers through AI-powered matching.

**Development:** AI-assisted development was used for implementation acceleration; architecture, database design, feature decisions, integration and validation were performed by the team.

<details>
<summary>Version en español</summary>

## BolsaLaboral Frontend

> SPA Angular 17 para la bolsa de trabajo universitaria — conecta egresados con empresas mediante match impulsado por IA.

**Desarrollo:** Se utilizó desarrollo asistido por IA para acelerar la implementación; la arquitectura, diseño de base de datos, decisiones de funcionalidad, integración y validación fueron realizadas por el equipo.

### Características principales

- **Dashboard personalizado** por rol (egresado, empresa, administrador)
- **Ofertas laborales** con filtros por carrera, ubicación y tipo
- **Match IA** que evalúa habilidades, experiencia e inglés contra el perfil idóneo
- **Evaluaciones técnicas** con banco de preguntas y generación por IA
- **Radar de empleabilidad** con radar chart y recomendaciones personalizadas
- **CV Builder** con exportación a PDF
- **Chat asesor** para orientación profesional
- **Mensajería** entre egresados y empresas
- **Panel admin** con dashboard, inserción masiva y gestión de convenios

### Stack

- Angular 17 (standalone components, lazy loading)
- TypeScript 5.4
- Tailwind CSS
- Angular Material
- RxJS
- Chart.js / ng2-charts

### Requisitos

- Node.js >= 18
- npm >= 9

### Instalación

```bash
npm install
```

### Desarrollo

```bash
ng serve --port 4201
```

### Build

```bash
ng build --configuration production
```

</details>

## Features

- **Role-based dashboard** — egresado, empresa, and admin get tailored views
- **Job listings** with filters by career, location, and type
- **AI job matching** — evaluates skills, experience, and English level against an ideal profile
- **Technical assessments** with question bank and AI-generated questions
- **Employability radar** — radar chart with personalized recommendations
- **CV Builder** with PDF export
- **Advisor chat** for professional guidance
- **Messaging** between graduates and companies
- **Admin panel** — dashboard, bulk data insertion, and agreement management

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Angular 17 (standalone, lazy loading) |
| Language | TypeScript 5.4 |
| Styling | Tailwind CSS |
| UI | Angular Material |
| Reactive | RxJS |
| Charts | Chart.js / ng2-charts |

## Prerequisites

- Node.js >= 18
- npm >= 9

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
ng serve --port 4201

# Open http://localhost:4201
```

## Build

```bash
ng build --configuration production
# Output: dist/bolsa-laboral-front/
```

## Testing

```bash
ng test --watch=false --browsers=ChromeHeadless   # unit tests
```

| Suite | Tests | What it covers |
|-------|-------|----------------|
| AuthService | 10 | JWT decode, session, roles, logout |
| authInterceptor | 2 | Bearer token injection |
| loginGuard | 3 | Redirect when authenticated |
| authGuard (inicio) | 3 | Redirect when unauthenticated, role check |
| DashboardService | 5 | Radar normalization, eval filtering, sorting |

**CI:** GitHub Actions runs tests on every push and PR before deploy.

## Engineering Metrics

| Metric | Value |
|--------|-------|
| Build output | 1.9MB (48 chunks) |
| Main bundle | 464KB |
| Total JS | 1.5MB |
| Deployment | GitHub Pages, auto-deploy from main |

## Project Structure

```
src/
├── app/
│   ├── core/           # Layout, interceptors, guards
│   ├── features/       # Feature modules (lazy-loaded)
│   │   ├── auth/       # Login, password reset, onboarding
│   │   ├── admin/      # Admin dashboard & data insertion
│   │   ├── empresa/    # Company dashboard, publish jobs, candidates
│   │   ├── ofertas/    # Job listings & detail
│   │   ├── mis-postulaciones/  # My applications
│   │   ├── evaluaciones/       # Assessments & results
│   │   ├── mi-perfil/  # Profile management
│   │   ├── reporte/    # Employability radar
│   │   ├── mensajes/   # Messaging
│   │   ├── guia/       # User guide
│   │   └── config/     # Settings
│   └── shared/         # Shared components, pipes, directives
├── assets/
└── environments/
```

## Test Credentials

| Role | Matrícula | Password |
|------|-----------|----------|
| Egresado | `20240001` | `test1234` |
| Empresa | `EMP001` | `test1234` |
| Admin | `ADMIN01` | `test1234` |

## Related Repos

- [BolsaLaboralBack](https://github.com/phyton06/BolsaLaboralBack) — REST API (PHP + Flight + PostgreSQL)

## License

Academic project — Universidad Tecnológica de la Costa

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Browser   │────▶│   Angular   │────▶│  Backend    │
│   (SPA)     │     │   Router    │     │  (PHP API)  │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                    ┌──────┴──────┐
                    │   Features  │
                    │  (lazy)     │
                    └─────────────┘
```

- **Core** — Layout, HTTP interceptors, auth guards
- **Features** — Lazy-loaded modules (auth, admin, company, jobs, applications, assessments, profile, reports, messaging)
- **Shared** — Reusable components, pipes, directives
