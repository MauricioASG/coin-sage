# Endpoint: `POST /crear-cuenta`
## Crear una Nueva Cuenta de Usuario

Endpoint para crear una nueva cuenta de usuario.

- **Método HTTP:** POST
- **URL:** /crear-cuenta
- **Descripción:** Crea una nueva cuenta de usuario con los datos proporcionados.

### Parámetros

- **nombre** (obligatorio): Nombre del usuario.
- **email** (obligatorio): Email del usuario.
- **passw** (obligatorio): Contraseña del usuario.

### Ejemplo de Solicitud

```json
{
  "nombre": "Nombre Usuario",
  "email": "usuario@example.com",
  "passw": "contraseña123"
}

```
### Código 201 Created: Cuenta creada exitosamente.
  ```json
{
  "message": "Cuenta creada exitosamente",
  "user": {
    "id": 1,
    "nombre": "Nombre Usuario",
    "email": "usuario@example.com",
    "passw": "contraseña123",
    "fecha_registro": "2023-12-01T12:00:00Z"
  }
}
```

### Código 400 Bad Request: Datos de solicitud inválidos.
  ```json
{
  "error": "invalid_request",
  "error_description": "Los datos proporcionados no son válidos."
}
  ```

### Código 500 Internal Server Error: Error interno del servidor.
  ```json
{
  "error": "internal_error",
  "error_description": "Ocurrió un problema al crear la cuenta."
}
  ```