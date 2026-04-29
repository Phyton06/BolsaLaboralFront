# Estilos - BolsaLaboralFront

## QUICKREF
- tailwind, colores CSS, variables, dark mode, theme
- diseño estándar, card, header, tabla, spinner

---

## DISEÑO ESTÁNDAR (SIEMPRE usar)

### Wrapper Exterior
```html
<div class="bg-background min-h-full p-4">
```

### Card Principal
```html
<div class="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
```

### Header
```html
<div class="px-4 py-3 border-b border-border">
  <h2 class="text-xl font-semibold text-card-foreground">Título</h2>
</div>
```

### Contenido
```html
<div class="p-4">
  <!-- filtros, tablas, etc. -->
</div>
```

---

## COLORES CSS (Variables)

### Modo Claro (Default)
```css
:root {
  --background: 245 245 245;
  --foreground: 12 10 9;
  --card: 255 255 255;
  --card-foreground: 12 10 9;
  --primary: 0 135 121;
  --primary-foreground: 248 255 251;
  --secondary: 0 55 56;
  --secondary-foreground: 248 255 251;
  --border: 229 231 235;
  --muted-foreground: 107 114 128;
}
```

### Modo Oscuro
```css
.dark {
  --background: 12 10 9;
  --foreground: 250 250 250;
  --card: 24 24 27;
  --card-foreground: 250 250 250;
  --primary: 0 135 121;
  --primary-foreground: 248 255 251;
  --secondary: 40 158 146;
  --secondary-foreground: 12 10 9;
  --border: 55 65 81;
  --muted-foreground: 156 163 175;
}
```

---

## TAILWIND CONFIG

```javascript
// tailwind.config.js
colors: {
  'utc-primary': '#008779',  // verde UTC

  // semantic colors (usan variables CSS)
  'background': 'rgb(var(--background) / <alpha-value>)',
  'foreground': 'rgb(var(--foreground) / <alpha-value>)',
  'card': 'rgb(var(--card) / <alpha-value>)',
  'card-foreground': 'rgb(var(--card-foreground) / <alpha-value>)',
  'primary': {
    DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
    foreground: 'rgb(var(--primary-foreground) / <alpha-value>)'
  },
  'secondary': {
    DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
    foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)'
  },
  'border': 'rgb(var(--border) / <alpha-value>)',
  'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)'
}
```

---

## COMPONENTES UI

### Botón Primary
```html
<button class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 text-sm font-medium">
  texto
</button>
```

### Botón Secondary
```html
<button class="px-4 py-2 border border-border text-foreground hover:bg-muted text-sm font-medium">
  texto
</button>
```

### Input/Select
```html
<input
  type="text"
  class="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground
         text-base focus:outline-none focus:ring-2 focus:ring-primary"
/>
```

### Label
```html
<label class="block text-sm font-medium text-muted-foreground mb-1">Label</label>
```

---

## LOADING SPINNER

### Estándar
```html
<div class="flex flex-col items-center justify-center py-16">
  <span class="animate-spin h-10 w-10 border-4 border-primary/30 border-t-primary rounded-full mb-4"></span>
  <p class="text-sm text-muted-foreground">Cargando información...</p>
</div>
```

---

## MENSAJE VACÍO/ERROR

```html
<div class="flex flex-col items-center justify-center py-16 text-center">
  <div class="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
    <svg class="h-8 w-8 text-muted-foreground">
      <!-- icon -->
    </svg>
  </div>
  <p class="text-lg font-medium text-foreground">Mensaje principal</p>
  <p class="text-sm text-muted-foreground mt-1">Mensaje secundario</p>
</div>
```

---

## BADGES / TAGS

```html
<!-- Success -->
<span class="inline-flex items-center px-2 py-1 rounded-md text-sm font-bold bg-emerald-600 text-white">
  Aceptada
</span>

<!-- Warning -->
<span class="inline-flex items-center px-2 py-1 rounded-md text-sm font-bold bg-amber-500 text-white">
  Pendiente
</span>

<!-- Error -->
<span class="inline-flex items-center px-2 py-1 rounded-md text-sm font-bold bg-red-600 text-white">
  Rechazada
</span>

<!-- Info -->
<span class="inline-flex items-center px-2 py-1 rounded-md text-sm font-bold bg-blue-600 text-white">
  Revisada
</span>
```

---

## RESPONSIVE

### Patrón Standard
```html
<!-- Mobile: cards -->
<div class="md:hidden">
  contenido mobile
</div>

<!-- Desktop: tabla -->
<div class="hidden md:block">
  contenido desktop
</div>
```

### Grid Responsive
```html
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
  <!-- elementos -->
</div>
```
