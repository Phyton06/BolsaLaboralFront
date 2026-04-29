# Stack Tecnológico - BolsaLaboralFront

## DEPENDENCIAS PRINCIPALES

### Core
```json
{
  "@angular/core": "^17.3.0",
  "@angular/common": "^17.3.0",
  "@angular/compiler": "^17.3.0",
  "@angular/forms": "^17.3.0",
  "@angular/platform-browser": "^17.3.0",
  "@angular/platform-browser-dynamic": "^17.3.0",
  "@angular/router": "^17.3.0",
  "@angular/animations": "^17.3.0",
  "rxjs": "~7.8.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.14.3"
}
```

### UI/UX
```json
{
  "@angular/cdk": "^17.3.10",
  "sweetalert2": "^11.22.3",
  "tailwindcss": "^3.4.17"
}
```

### Auth/Security
```json
{
  "jwt-decode": "^4.0.0"
}
```

### Dev Dependencies
```json
{
  "@angular/cli": "^17.3.17",
  "@angular-devkit/build-angular": "^17.3.17",
  "@angular/compiler-cli": "^17.3.0",
  "typescript": "~5.4.2",
  "karma": "~6.4.0",
  "jasmine-core": "~5.1.0",
  "autoprefixer": "^10.4.21",
  "postcss": "^8.5.6"
}
```

---

## VERSIONES EXACTAS

| Paquete | Versión |
|---------|---------|
| Angular | 17.3.0 |
| Angular CLI | 17.3.17 |
| Angular CDK | 17.3.10 |
| TypeScript | 5.4.2 |
| RxJS | 7.8.0 |
| Tailwind CSS | 3.4.17 |
| SweetAlert2 | 11.22.3 |
| JWT Decode | 4.0.0 |

---

## SCRIPTS NPM

| Comando | Descripción |
|---------|-------------|
| `npm start` | `ng serve` - Desarrollo |
| `npm run build` | `ng build` - Producción |
| `npm run watch` | `ng build --watch` - Desarrollo watcher |
| `npm test` | `ng test` - Testing |

---

## GENERATORS

```bash
# Generar componente
ng g c features/{modulo}/pages/{nombre}

# Generar servicio
ng g s features/{modulo}/services/{nombre}

# Generar guard
ng g guard features/{modulo}/guards/{nombre}

# Generar interface
ng g interface features/{modulo}/interfaces/{nombre}

# Generar interceptor
ng g interceptor core/interceptors/{nombre}
```

---

## BUILD TARGETS

| Target | Output |
|--------|--------|
| production | dist/ |
| development | .angular/ |

---

## NAVEGADOR SOPORTADO

- ES2022+
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
