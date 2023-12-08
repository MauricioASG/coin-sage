
# Endpoint: `POST /categorias`
## Crear Tarjeta 

- **Método HTTP:** POST
- **URL:** /categorias
- **Descripción:** Agregar una nueva categoría de gasto o ingreso
  
## Ejemplo de uso
  ```json
  [
    POST /categorias
    Content-Type: application/json
    {
    "usuario_id": 1,
    "nombre": "Gymnasio",
    "descripcion": "Gastos mensuales"
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
- Asegurate de incluir datos que sean validos.