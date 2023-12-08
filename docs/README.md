# Documentación de la API para sage-coin

Bienvenido a la documentación de la API para mi proyecto "coin-sage". 
A continuación, se presenta una lista de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Usuarios
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /usuarios`](./endpoints//get-usuarios.md)| Recupera la lista de todos los usuarios o de uno en especifico|
| [`POST /usuarios`](./endpoints//post-usuarios.md)| Crear un nuevo usuario|
| [`PUT /usuarios`](./endpoints//put-usuarios.md)| Actualizar datos de un usuario|
| [`PATCH /usuarios/{usuarioId}`](./endpoints//patch-usuarios.md)| Actualizar parcialmente los datos de un usuario existente|

## Tarjetas
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /tarjetas`](./endpoints//get-tajetas.md)   | Obtener las tarjetas registradas|
| [`POST /tarjetas`](./endpoints//post-tarjetas.md)   | Agregar una nueva tarjeta|
| [`Endpoints /usuarios/tarjetas`](./endpoints//Endpoints-tarjetas.md)| PATCH y PUT sobre tarjetas de usuarios|


## Transacciones
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /transacciones`](./endpoints//get-transacciones.md)   | Permite obtener todas las transacciones registradas |
| [`POST /transacciones`](./endpoints//post-transacciones.md)   | Registrar transacciones de usuarios |


## Categorias de gastos
| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /usuarios/{usuarioId}/categorias`](./endpoints//get-categorias-usuario-id.md)   | Obtener las categorías de los movimientos de un usuario|