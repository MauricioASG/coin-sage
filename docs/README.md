# Documentación de la API para sage-coin

Bienvenido a la documentación de la API para mi proyecto "coin-sage". 
A continuación, se presenta una lista de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /usuarios`](./endpoints//get-usuarios.md)             | Recupera la lista de todos los usuarios registrados |
| [`GET /usuarios/{id}`](./endpoints//get-usuarios-id.md)          | Obtiene información detallada sobre un usuario específico. |
| [`GET /usuarios/{usuarioid}/transacciones`](./endpoints//get-transacciones-id.md)   | detalles sobre transacciones de un usuario |
| [`GET /usuarios/{usuarioId}/tarjetas`](./endpoints//get-tajetas-usuario-id.md)   | obtener las tarjetas asociadas a un usuario|
| [`GET /usuarios/{usuarioId}/categorias`](./endpoints//get-categorias-usuario-id.md)   | obtener las categorías de los movimientos de un usuario|