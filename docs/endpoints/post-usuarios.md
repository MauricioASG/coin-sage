 
# Endpoint: `Post /usuarios`
## Crear nuevo Usuario

Endpoint para crear nuevos usuarios.

- **Método HTTP:** POST
- **URL:** /usuarios
- **Descripción:** Retorna una lista de todos los usuarios registrados.

### Parámetros

Ninguno.

### Respuestas
 /
 Recibe una petición para crear un recurso:
  
```http
[
{"nombre":"Nuevo tema"

}
]
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
- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un usuario en específico.