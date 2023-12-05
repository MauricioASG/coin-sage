# Endpoint: `GET /usuarios/{usuarioid}/transacciones`

Permite obtener la información sobre el usuario con ese {usuarioId}.

## Parámetros de URL
- `{usuarioId}` (obligatorio): Identificador único del usuario del cual se desean recuperar la información.

## Ejemplo de Solicitud
```http
GET /usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id": 1,
    "usuario_id": 1,
    "monto": 250.00,
    "tipo": "Ingreso",
    "fecha": "2023-12-01T12:30:45Z"
  },
  {
    "id": 2,
    "usuario_id": 1,
    "monto": 35.50,
    "tipo": "Gasto",
    "fecha": "2023-12-03T09:15:00Z"
  }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
    {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron transacciones asociadas con el usuario {usuarioId}."
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

## Notas Adicionales

Asegúrate de incluir un ID válido en la solicitud para obtener la información sobre las transacciones de un usuario en específico.

