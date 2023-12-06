 
# Endpoint: `POST /usuarios`
## Crear un Nuevo Usuario

- **Método HTTP:** POST
- **URL:** /usuarios
- **Descripción:** Endpoint para crear un nuevo usuario.

### Parámetros
 "nombre": "Nombre del Usuario",
  "email": "correo@example.com",
  "passw": "contraseña"

### Ejemplo de uso
  
```http
[
POST /usuarios
Content-Type: application/json

{
    "nombre": "Nombre del Usuario",
    "email": "correo@example.com",
    "passw": "contraseña"
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
- Asegurate de incluir datos que sean validos en nombre, email y passw (contraseña)