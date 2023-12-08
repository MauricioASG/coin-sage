# Endpoint: `GET /transacciones`
## Obtener todas las transacciones

- **Método HTTP:** GET
- **URL:** /transacciones
- **Descripción:** Permite obtener todas las transacciones registradas

### Parámetros
Ninguno.

### Respuestas

- **Código 200 OK:** Se encontraron usuarios.
  ```json
  [
    {
        "id": 1,
        "usuario_id": 1,
        "monto": "50.00",
        "tipo": "Gasto",
        "fecha": "2023-12-05T21:46:27.000Z"
    },
    {
        "id": 2,
        "usuario_id": 2,
        "monto": "100.00",
        "tipo": "Ingreso",
        "fecha": "2023-12-05T21:46:27.000Z"
    },
    ...
  ]



# Endpoint: `GET /transacciones/:id`
## Obtener las transacciones de un usuario

- **Método HTTP:** GET
- **URL:** /transacciones/3
- **Descripción:** Retorna las transacciones de un usuario.

### Parámetros
- `{id}` (obligatorio): Identificador único del usuario del cual se desean recuperar la información.

### Respuestas
- **Código 200 OK:** Se encontraron usuarios.
  ```json
  [
    {
    "id": 3,
    "usuario_id": 3,
    "monto": "75.50",
    "tipo": "Gasto",
    "fecha": "2023-12-05T21:46:27.000Z"
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



