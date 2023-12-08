# Endpoint: `GET /categorias`

- **Método HTTP:** GET
- **URL:** /categorias
- **Descripción:** Permite obtener una lista de todas las categorias de gastos.

## Parámetros de URL
- ninguno
## Ejemplo de Solicitud
```http
GET /categorias
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "usuario_id": 1,
        "nombre": "Comida",
        "descripcion": "Gastos en alimentación"
    },
    {
        "id": 2,
        "usuario_id": 2,
        "nombre": "Salario",
        "descripcion": "Ingresos mensuales"
    },
    ...
]
```


## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
    {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron categorías de gastos."
    }
  ```

