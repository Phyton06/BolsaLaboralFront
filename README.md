# BolsaLaboralFront

> **Proyecto desarrollado para el Hackathon DITI 2026 — Universidad Tecnológica de la Costa**

Frontend del sistema de **Bolsa de Trabajo** de la Universidad Tecnológica de la Costa. Permite a candidatos buscar y postularse a ofertas de empleo, y a empresas publicar vacantes y gestionar postulaciones.

## 🚀 Cómo iniciar

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente.

## 🏗️ Arquitectura

Todo el código reside bajo `src/app/` y se divide en tres bloques:

- **`core/`**: Servicios Singleton (AuthService, interceptors HTTP, guards, layout). Sin UI components aquí.
- **`shared/`**: Componentes UI reutilizables (botones, modales, etc.). Agnósticos a la lógica de negocio.
- **`features/`**: Lógica de negocio por módulo. Cada feature es independiente con lazy loading.

### Features

| Feature | Rutas | Rol |
|---------|-------|-----|
| `auth/` | `/login`, `/register`, `/forgot-password`, `/reset-password` | Público |
| `inicio/` | `/inicio` | Todos (auth) |
| `ofertas/` | `/ofertas`, `/ofertas/:id` | Todos (auth) |
| `mis-postulaciones/` | `/mis-postulaciones` | Candidato |
| `mi-perfil/` | `/mi-perfil` | Todos (auth) |

## 🛠️ Stack

| Tecnología | Versión |
|------------|---------|
| Angular | 17.3 |
| TypeScript | 5.4 |
| Tailwind CSS | 3.4 |
| SweetAlert2 | 11 |
| JWT Decode | 4 |
| Angular CDK | 17.3 |

## 🔧 Comandos

```bash
ng serve                    # Desarrollo
ng build --configuration production  # Producción
ng test                     # Testing
```

## 📐 Convenciones

- **Standalone components** siempre
- **Lazy loading** con `loadComponent` en todas las rutas
- **Signals** over RxJS para estado de componente
- **OnPush** change detection
- `@if` / `@for` sobre `*ngIf` / `*ngFor`

Ver `AGENTS.md` y `docs/` para más detalles.

## 🔗 Backend

Este frontend consume la API de [BolsaLaboralBack](https://github.com/Phyton06/BolsaLaboralBack).

---

Desarrollado para el **Hackathon DITI 2026** — **Universidad Tecnológica de la Costa**.
