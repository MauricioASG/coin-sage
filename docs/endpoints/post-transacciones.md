# Endpoint: `POST /transacciones`
## Crear Tarjeta 

- **Método HTTP:** POST
- **URL:** /transacciones
- **Descripción:** Agrega una nueva transacción
  
## Ejemplo de uso
  ```json
  [
    POST /transacciones
    Content-Type: application/json
    {
        "usuario_id": 5,
        "monto": "20.00",
        "tipo": "Gasto"
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