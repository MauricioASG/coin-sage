
# Endpoint: `POST /tarjetas`
## Crear Tarjeta 

- **Método HTTP:** POST
- **URL:** /tarjetas
- **Descripción:** Crea una nueva tarjeta 
  
## Ejemplo de uso
  ```json
  [
    POST /tarjetas
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
- Asegurate de incluir datos que sean validos.