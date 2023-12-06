# Endpoint: `PATCH /usuarios/{usuarioid}`

### Descripción
Endpoint para actualizar parcialmente los datos de un usuario existente.

- Método: PATCH
- Ruta: `/usuarios/:id` (reemplaza `:id` por el ID del usuario)
- Tipo de contenido: application/json
- Cuerpo de la solicitud: Campos a actualizar del usuario

### Parámetros de Ruta
- `:id` - Identificador único del usuario (entero)

### Respuesta Exitosa
- Código de estado: 200 OK
- Cuerpo de la respuesta: Mensaje de éxito

### Ejemplo de Uso
```http
PATCH /usuarios/1
Content-Type: application/json

{
    "nombre": "Nuevo Nombre",
    "email": "nuevo_correo@example.com"
}
