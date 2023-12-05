# Endpoint: `GET /usuarios/{usuarioId}/categorias`

Permite obtener información sobre las categorías de los movimientos asociados a un usuario mediante su id.

## Parámetros de URL
- `{usuarioId}` (obligatorio): Identificador único del usuario del que se desean recuperar las categorías.

## Ejemplo de Solicitud
```http
GET /usuarios/123/categorias
```

## Respuesta Exitosa (Código 200 OK)
```json
    [
    {"id":1,
    "usuario_id":1,
    "nombre":"Comida",
    "descripcion":"Gastos en alimentación"}
    
    ]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
    {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron categorías asociadas al usuario {usuarioId}."
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

Asegúrate de incluir un ID de usuario válido en la solicitud para obtener información sobre las categorías asociadas a ese usuario en particular.