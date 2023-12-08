
### Crear Tarjeta para Usuario
**Descripción:** Crea una nueva tarjeta asociada a un usuario específico.
- Método: POST
- Ruta: `/usuarios/:usuarioId/tarjetas`
- Parámetros de Ruta: `:usuarioId` - Identificador único del usuario (entero)
- Cuerpo de la solicitud: Datos de la nueva tarjeta a crear
- Respuesta Exitosa:
  - Código de estado: 201 Created
  - Cuerpo de la respuesta: Mensaje de éxito y ID de la nueva tarjeta creada

### Ejemplo de uso
  ```json
  [
    POST /usuarios/123/tarjetas
    Content-Type: application/json
    {
        "tipo": "Crédito",
        "nombre_titular": "John Doe",
        "numero_tarjeta": "1234567890123456",
        "fecha_vencimiento": "2024-12-31"
    }
  ]
```

## Respuesta de confirmación

- Código 201 indica que se ha creado un recurso de acuerdo con la solicitud POST.

  ```json
  {
    "status": 201,
    "message": "Created"
  }
  ```

## Respuestas de Errores Posibles
- Código 400 Bad Request: probelma con la solicitud.

  ```json
    {
    "errno": 400,
    "error": "Bad Request"
    }
  ```

## Notas Adicionales
- Asegurate de incluir datos que sean validos para que funcione