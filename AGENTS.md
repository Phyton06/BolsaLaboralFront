# Code Review Rules - BolsaLaboralFront

## TypeScript / Angular

- Use `const`/`let`, never `var`
- Prefer interfaces over types
- Avoid `any` - use `unknown` or proper types
- Use Angular Signals for state management
- Follow container/presentational pattern
- Use standalone components
- Prefer `@if` / `@for` over `*ngIf` / `*ngFor`

## Naming

- kebab-case for file names: `ofertas-list.component.ts`
- PascalCase for components/classes: `OfertasListComponent`
- camelCase for variables/methods: `obtenerOfertas()`
- SCREAMING_SNAKE_CASE for constants

## Patterns

- Signals over RxJS for component state
- Async pipes over manual subscriptions
- OnPush change detection
- Lazy loading for routes
- Separation: AuthService (core, JWT logic) vs AuthApiService (features, API calls)

## Security

- Never expose API keys in frontend code
- Sanitize user inputs
- Use HttpInterceptors for auth headers
- Never hardcode API URLs - use environment.ts

## Domain Conventions

- Roles: `candidato`, `empresa`, `admin`
- Estados de postulación: `pendiente`, `revisada`, `aceptada`, `rechazada`
- Estados de oferta: `activa`, `pausada`, `cerrada`
