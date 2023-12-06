# Documentación de la API para sage-coin

Bienvenido a la documentación de la API para mi proyecto "coin-sage". 
A continuación, se presenta una lista de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /usuarios`](./endpoints//get-usuarios.md)             | Recupera la lista de todos los usuarios o de uno en especifico|
| [`GET /usuarios/{usuarioid}/transacciones`](./endpoints//get-transacciones-id.md)   | Detalles sobre transacciones de un usuario |
| [`GET /usuarios/{usuarioId}/tarjetas`](./endpoints//get-tajetas-usuario-id.md)   | Obtener las tarjetas asociadas a un usuario|
| [`GET /usuarios/{usuarioId}/categorias`](./endpoints//get-categorias-usuario-id.md)   | Obtener las categorías de los movimientos de un usuario|
| [`POST /usuarios`](./endpoints//post-usuarios.md)]| Crear un nuevo usuario|
| [`PUT /usuarios`](./endpoints//put-usuarios.md)]| Actualizar datos de un usuario|
| [`PATCH /usuarios/{usuarioId}`](./endpoints//patch-usuarios.md)]| Actualizar parcialmente los datos de un usuario existente|
