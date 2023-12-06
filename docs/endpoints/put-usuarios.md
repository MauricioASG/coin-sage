 
# Endpoint: `PUT /usuarios`
## Actualizar los datos de un usuario.

- **Método HTTP:** PUT
- **URL:** /usuarios/:id (reemplaza :id por el ID del usuario)
- **Descripción:** Endpoint para actualizar los datos de un usuario existente.

### Parámetros
id - Identificador único del usuario (entero)

### Ejemplo de uso
  
  ```json
  [
    PUT /usuarios/2
    Content-Type: application/json
    {
            "nombre": "Nuevo Nombre",
            "email": "nuevo_correo@example.com"
    }
  ]
```

## Respuesta de confirmación

- Código de estado: 200 OK.

## Respuestas de Errores Posibles
- Código 400 Bad Request: probelma con la solicitud.

  ```json
    {
    "errno": 400,
    "error": "Bad Request"
    }
  ```

## Notas Adicionales
- Asegurate de incluir datos que sean validos en lo que se quiera actualizar.

