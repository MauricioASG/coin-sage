# Endpoint: `GET /usuarios/{usuarioId}/tarjetas`

Permite obtener información sobre las tarjetas asociadas a un usuario mediante su identificador único.

## Parámetros de URL
- `{usuarioId}` (obligatorio): Identificador único del usuario del que se desean recuperar las tarjetas.

## Ejemplo de Solicitud
```http
GET /usuarios/5/tarjetas
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id": 5,
    "usuario_id": 5,
    "tipo": "Crédito",
    "nombre_titular": "Laura Pérez",
    "numero_tarjeta": "9876543298765432",
    "fecha_vencimiento": "2027-02-01T00:00:00.000Z"
  }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
    {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron tarjetas asociadas al usuario {usuarioId}."
    }
  ```

- Código 500 Internal Server Error:
  ```json
    {
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
    }
  ```
## Notas adicionales
Asegúrate de incluir un ID de usuario válido en la solicitud para obtener información sobre las tarjetas asociadas a ese usuario en particular. 

