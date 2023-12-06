# Endpoint: `GET /usuarios`
## Obtener Todos los Usuarios

Endpoint para obtener todos los usuarios.

- **Método HTTP:** GET
- **URL:** /usuarios
- **Descripción:** Retorna una lista de todos los usuarios registrados o uno en especifico según su id.

### Parámetros

Ninguno.

### Respuestas

- **Código 200 OK:** Se encontraron usuarios.
  ```json
  [
    {
      "id": 1,
      "nombre": "Nombre Usuario 1",
      "email": "usuario1@example.com",
      "contraseña": "contraseñaEncriptada",
      "fecha_registro": "2023-12-01T12:00:00Z"
    },
    {
      "id": 2,
      "nombre": "Nombre Usuario 2",
      "email": "usuario2@example.com",
      "contraseña": "contraseñaEncriptada",
      "fecha_registro": "2023-12-02T12:00:00Z"
    },
    ...
  ]


# Endpoint: `GET /usuarios/{usuarioid}`
## Obtener Todos los Usuarios

Endpoint para obtener detalles del usuario según su id.

- **Método HTTP:** GET
- **URL:** /usuarios/1
- **Descripción:** Retorna el usuarios registrado con ese {usuarioId}.

### Parámetros
- `{usuarioId}` (obligatorio): Identificador único del usuario del cual se desean recuperar la información.

### Respuestas
- **Código 200 OK:** Se encontraron usuarios.
  ```json
  [
    {
      "id": 1,
      "nombre": "Nombre Usuario 1",
      "email": "usuario1@example.com",
      "contraseña": "contraseñaEncriptada",
      "fecha_registro": "2023-12-01T12:00:00Z"
    }
  ]

## Respuestas de Errores Posibles
- Código 404 Not Found: No se encontraron usuarios.

  ```json
    {
  "error": "not_found",
  "error_description": "No se encontraron usuarios."
    }
  ```

- Código 500 Internal Server Error: Error interno del servidor.
  ```json
    {
  "error": "internal_error",
  "error_description": "Ocurrió un problema al consultar los usuarios."
    }
  ```

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un usuario en específico.
