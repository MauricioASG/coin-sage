# Endpoint: `GET /usuarios/{usuarioid}`
## Obtener Todos los Usuarios

Endpoint para obtener detalles del usuario según su id.

- **Método HTTP:** GET
- **URL:** /usuarios
- **Descripción:** Retorna una lista de todos los usuarios registrados.

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
    ...
  ]

## Respuestas de Errores Posibles
- Código 404 Not Found: No se encontraron usuarios.

  ```json
    {
  "error": "not_found",
  "error_description": "No se encontro al usuario."
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