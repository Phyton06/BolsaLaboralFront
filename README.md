# BolsaLaboral Frontend

> Angular 17 SPA for the university job board — connects graduates with employers through AI-powered matching.

<details>
<summary>Version en español</summary>

## BolsaLaboral Frontend

> SPA Angular 17 para la bolsa de trabajo universitaria — conecta egresados con empresas mediante match impulsado por IA.

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
