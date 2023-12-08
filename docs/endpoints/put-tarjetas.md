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