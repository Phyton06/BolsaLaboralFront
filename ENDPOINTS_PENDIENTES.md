# Endpoints Pendientes — BolsaLaboralBack

> Estado actual: Solo están implementados los 4 endpoints de auth listados al final.
> Esta documentación describe los endpoints que el **frontend necesita** pero que el **backend aún no tiene**.

---

## ❌ Auth — Password Recovery (NO implementados)

### POST /auth/request-password-reset
Solicita envío de email con token para recuperar contraseña.

**Request:**
```json
{
  "email": "usuario@email.com"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Si el correo está registrado, se enviarán instrucciones de recuperación."
}
```

**Response (404):**
```json
{
  "success": false,
  "error": "No se encontró un usuario con ese correo"
}
```

---

### POST /auth/reset-password
Cambia la contraseña usando el token recibido por email.

**Request:**
```json
{
  "token": "abc123...",
  "new_password": "nueva123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Contraseña actualizada correctamente"
}
```

**Response (400):**
```json
{
  "success": false,
  "error": "Token inválido o expirado"
}
```

---

### POST /auth/refresh-token
Renueva el access token usando el refresh token.

**Request:**
```json
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Token renovado correctamente",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIs..."
  }
}
```

---

### POST /auth/validate-token
Valida un token JWT sin requerir sesión activa.

**Request:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "valid": true,
    "user": {
      "id": 1,
      "matricula": "20240001",
      "rol": "egresado"
    }
  }
}
```

---

## ❌ Ofertas (NO implementado)

### GET /ofertas
Lista ofertas disponibles (pública o filtrada).

**Query params:** `?page=1&per_page=20&estado=activa&search=desarrollo`

**Response (200):**
```json
{
  "success": true,
  "message": "Ofertas obtenidas correctamente",
  "data": [
    {
      "id": 1,
      "titulo": "Desarrollador Full Stack",
      "descripcion": "Buscamos...",
      "requisitos": ["React", "Node.js"],
      "salario": "40000-60000",
      "ubicacion": "Remoto",
      "estado": "activa",
      "empresa": {
        "id": 5,
        "nombre": "Tech Corp"
      },
      "fecha_publicacion": "2026-04-28T10:00:00Z"
    }
  ],
  "pagination": {
    "total": 150,
    "page": 1,
    "per_page": 20,
    "total_pages": 8
  }
}
```

---

### GET /ofertas/{id}
Detalle de una oferta específica.

**Response (200):**
```json
{
  "success": true,
  "message": "Oferta obtenida correctamente",
  "data": {
    "id": 1,
    "titulo": "Desarrollador Full Stack",
    "descripcion": "Descripción completa...",
    "requisitos": ["React", "Node.js", "PostgreSQL"],
    "beneficios": ["Seguro médico", "Home office"],
    "salario": "40000-60000",
    "ubicacion": "Remoto",
    "estado": "activa",
    "empresa": {
      "id": 5,
      "nombre_comercial": "Tech Corp",
      "giro": "Tecnología",
      "descripcion": "Empresa dedicada a..."
    },
    "fecha_publicacion": "2026-04-28T10:00:00Z",
    "fecha_cierre": "2026-05-28T23:59:59Z"
  }
}
```

---

### POST /ofertas
Crea una nueva oferta (solo empresas autenticadas).

**Auth:** Bearer token (rol: empresa)

**Request:**
```json
{
  "titulo": "Desarrollador Full Stack",
  "descripcion": "Buscamos desarrollador con experiencia en...",
  "requisitos": ["React", "Node.js", "PostgreSQL"],
  "beneficios": ["Seguro médico", "Home office"],
  "salario": "40000-60000",
  "ubicacion": "Remoto",
  "fecha_cierre": "2026-05-28"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Oferta publicada correctamente",
  "data": {
    "id": 42,
    "titulo": "Desarrollador Full Stack",
    "estado": "activa"
  }
}
```

---

### PUT /ofertas/{id}
Actualiza una oferta existente (solo empresa propietaria).

**Auth:** Bearer token (rol: empresa, dueño de la oferta)

**Request:**
```json
{
  "titulo": "Desarrollador Full Stack Senior",
  "descripcion": "Descripción actualizada...",
  "requisitos": ["React", "Node.js", "PostgreSQL", "AWS"],
  "salario": "50000-70000"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Oferta actualizada correctamente",
  "data": {
    "id": 42,
    "titulo": "Desarrollador Full Stack Senior"
  }
}
```

---

### DELETE /ofertas/{id}
Elimina/desactiva una oferta (solo empresa propietaria o admin).

**Auth:** Bearer token (rol: empresa o admin)

**Response (200):**
```json
{
  "success": true,
  "message": "Oferta eliminada correctamente"
}
```

---

### GET /mis-ofertas
Ofertas publicadas por la empresa autenticada.

**Auth:** Bearer token (rol: empresa)

**Query params:** `?page=1&per_page=20&estado=activa`

**Response (200):**
```json
{
  "success": true,
  "message": "Ofertas obtenidas correctamente",
  "data": [
    {
      "id": 42,
      "titulo": "Desarrollador Full Stack",
      "estado": "activa",
      "postulaciones_count": 15,
      "fecha_publicacion": "2026-04-28T10:00:00Z"
    }
  ],
  "pagination": {
    "total": 5,
    "page": 1,
    "per_page": 20,
    "total_pages": 1
  }
}
```

---

## ❌ Postulaciones (NO implementado)

### POST /postulaciones
El candidato se postula a una oferta.

**Auth:** Bearer token (rol: egresado)

**Request:**
```json
{
  "oferta_id": 42,
  "carta_presentacion": "Estimado equipo, me interesa esta posición porque..."
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Postulación enviada correctamente",
  "data": {
    "id": 100,
    "oferta_id": 42,
    "estado": "pendiente",
    "fecha_postulacion": "2026-04-29T15:30:00Z"
  }
}
```

**Response (409):**
```json
{
  "success": false,
  "error": "Ya te postulaste a esta oferta"
}
```

---

### GET /mis-postulaciones
Postulaciones del candidato autenticado.

**Auth:** Bearer token (rol: egresado)

**Query params:** `?page=1&per_page=20&estado=pendiente`

**Response (200):**
```json
{
  "success": true,
  "message": "Postulaciones obtenidas correctamente",
  "data": [
    {
      "id": 100,
      "oferta": {
        "id": 42,
        "titulo": "Desarrollador Full Stack",
        "empresa": "Tech Corp"
      },
      "estado": "pendiente",
      "fecha_postulacion": "2026-04-29T15:30:00Z"
    }
  ],
  "pagination": {
    "total": 3,
    "page": 1,
    "per_page": 20,
    "total_pages": 1
  }
}
```

---

### GET /ofertas/{id}/postulaciones
Postulaciones de una oferta (solo empresa propietaria).

**Auth:** Bearer token (rol: empresa, dueño de la oferta)

**Query params:** `?page=1&per_page=20&estado=pendiente`

**Response (200):**
```json
{
  "success": true,
  "message": "Postulaciones obtenidas correctamente",
  "data": [
    {
      "id": 100,
      "candidato": {
        "id": 1,
        "nombre": "Juan Perez Garcia",
        "email": "juan@email.com"
      },
      "carta_presentacion": "Estimado equipo...",
      "estado": "pendiente",
      "fecha_postulacion": "2026-04-29T15:30:00Z"
    }
  ],
  "pagination": {
    "total": 15,
    "page": 1,
    "per_page": 20,
    "total_pages": 1
  }
}
```

---

### PUT /postulaciones/{id}/estado
Cambia el estado de una postulación (pendiente → revisada → aceptada/rechazada).

**Auth:** Bearer token (rol: empresa, dueño de la oferta)

**Request:**
```json
{
  "estado": "revisada"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Estado de postulación actualizado correctamente",
  "data": {
    "id": 100,
    "estado": "revisada"
  }
}
```

---

## ❌ Perfil — Candidatos (NO implementado)

### GET /mi-perfil
Perfil del candidato autenticado.

**Auth:** Bearer token (rol: egresado)

**Response (200):**
```json
{
  "success": true,
  "message": "Perfil obtenido correctamente",
  "data": {
    "id": 1,
    "nombre": "Juan",
    "apellido_paterno": "Perez",
    "apellido_materno": "Garcia",
    "contacto": {
      "telefono": "+521234567890",
      "correo_personal": "juan@email.com",
      "linkedin": "https://linkedin.com/in/juan"
    },
    "habilidades": ["JavaScript", "TypeScript", "Angular"],
    "cv_url": "https://storage.example.com/cv-juan.pdf"
  }
}
```

---

### PUT /mi-perfil
Actualiza perfil del candidato.

**Auth:** Bearer token (rol: egresado)

**Request:**
```json
{
  "nombre": "Juan",
  "apellido_paterno": "Perez",
  "apellido_materno": "Garcia",
  "habilidades": ["JavaScript", "TypeScript", "Angular", "React"]
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Perfil actualizado correctamente",
  "data": {
    "id": 1,
    "nombre": "Juan Perez Garcia"
  }
}
```

---

### POST /mi-perfil/cv
Sube archivo CV del candidato.

**Auth:** Bearer token (rol: egresado)

**Content-Type:** `multipart/form-data`

**Request:**
```
file: <binary> (PDF, DOC, DOCX — max 5MB)
```

**Response (200):**
```json
{
  "success": true,
  "message": "CV subido correctamente",
  "data": {
    "cv_url": "https://storage.example.com/cv-juan.pdf"
  }
}
```

---

## ❌ Perfil — Empresas (NO implementado)

### GET /mi-empresa
Perfil de la empresa autenticada.

**Auth:** Bearer token (rol: empresa)

**Response (200):**
```json
{
  "success": true,
  "message": "Perfil de empresa obtenido correctamente",
  "data": {
    "id": 5,
    "nombre_comercial": "Tech Corp",
    "razon_social": "Tech Corp S.A. de C.V.",
    "giro": "Tecnología",
    "descripcion": "Empresa dedicada al desarrollo de software...",
    "sitio_web": "https://techcorp.com",
    "contacto": {
      "telefono": "+521234567890",
      "correo_personal": "contacto@techcorp.com",
      "linkedin": "https://linkedin.com/company/techcorp"
    },
    "logo_url": "https://storage.example.com/logo-techcorp.png"
  }
}
```

---

### PUT /mi-empresa
Actualiza perfil de la empresa.

**Auth:** Bearer token (rol: empresa)

**Request:**
```json
{
  "nombre_comercial": "Tech Corp",
  "giro": "Tecnología",
  "descripcion": "Descripción actualizada...",
  "sitio_web": "https://techcorp.com"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Perfil de empresa actualizado correctamente",
  "data": {
    "id": 5,
    "nombre_comercial": "Tech Corp"
  }
}
```

---

## ❌ Administración (NO implementado)

### GET /admin/usuarios
Lista de usuarios (solo admin).

**Auth:** Bearer token (rol: admin)

**Query params:** `?page=1&per_page=20&rol=egresado&search=juan`

**Response (200):**
```json
{
  "success": true,
  "message": "Usuarios obtenidos correctamente",
  "data": [
    {
      "id": 1,
      "matricula": "20240001",
      "rol": "egresado",
      "nombre": "Juan Perez Garcia",
      "primer_ingreso": false,
      "fecha_registro": "2026-01-15T10:00:00Z"
    }
  ],
  "pagination": {
    "total": 50,
    "page": 1,
    "per_page": 20,
    "total_pages": 3
  }
}
```

---

### PUT /admin/usuarios/{id}/rol
Cambia rol de usuario (solo admin).

**Auth:** Bearer token (rol: admin)

**Request:**
```json
{
  "rol": "empresa"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Rol de usuario actualizado correctamente",
  "data": {
    "id": 1,
    "rol": "empresa"
  }
}
```

---

### GET /admin/estadisticas
Estadísticas del sistema (solo admin).

**Auth:** Bearer token (rol: admin)

**Response (200):**
```json
{
  "success": true,
  "message": "Estadísticas obtenidas correctamente",
  "data": {
    "total_usuarios": 150,
    "total_ofertas": 45,
    "total_postulaciones": 320,
    "ofertas_activas": 30,
    "convenios_activos": 12
  }
}
```

---

## ✅ Endpoints Implementados (Auth Module)

| Método | Endpoint | Auth | Descripción |
|--------|----------|------|-------------|
| `POST` | `/auth/login` | No | Login con matrícula y contraseña |
| `POST` | `/auth/logout` | Sí | Cierra sesión (blacklist token) |
| `POST` | `/auth/onboarding` | Sí | Completa datos de contacto |
| `PUT` | `/auth/password` | Sí | Cambia contraseña |
| `GET` | `/auth/health` | No | Health check |

---

> **Nota:** Todos los endpoints implementados devuelven respuestas en formato envelope:
> ```json
> { "success": true, "message": "...", "data": { ... } }
> ```
> Los errores siguen este formato:
> ```json
> { "success": false, "error": "...", "ticket": "ERR-20260429-0042" }
> ```
