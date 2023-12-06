## Endpoints de Tarjetas

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

### Actualizar Tarjeta

**Descripción:** Actualiza los detalles de una tarjeta específica.

- Método: PUT
- Ruta: `/tarjetas/:id`
- Parámetros de Ruta: `:id` - Identificador único de la tarjeta (entero)
- Cuerpo de la solicitud: Campos actualizados de la tarjeta
- Respuesta Exitosa:
  - Código de estado: 200 OK
  - Cuerpo de la respuesta: Mensaje de éxito

### Ejemplo de uso
  ```json
  [
    PUT /tarjetas/789
    Content-Type: application/json
    {
        "tipo": "Débito",
        "nombre_titular": "Jane Smith"
    }
  ]
```

### Eliminar Tarjeta

**Descripción:** Elimina una tarjeta específica.

- Método: DELETE
- Ruta: `/tarjetas/:id`
- Parámetros de Ruta: `:id` - Identificador único de la tarjeta (entero)
- Respuesta Exitosa:
  - Código de estado: 200 OK
  - Cuerpo de la respuesta: Mensaje de éxito

### Ejemplo de uso
- DELETE /tarjetas/456
