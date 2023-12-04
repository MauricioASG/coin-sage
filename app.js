const express = require('express');
//rutas de los controladores
const UsuariosController = require('./controllers/UsuariosController');
const TransaccionesController = require('./controllers/TransaccionesController');
const CategoriasController = require('./controllers/CategoriasController');
const TarjetasController = require('./controllers/TarjetasController');

const app = express();
const puerto = 80;

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('SiConfirmacion :3');
});

// Rutas para usuarios
app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id', UsuariosController.itemGet);

// Rutas para transacciones
app.get('/usuarios/:usuarioId/transacciones', TransaccionesController.transaccionesPorUsuarioIdGet);
app.get('/usuarios/:usuarioId/transacciones/:transaccionId', TransaccionesController.transaccionPorIdGet);

// Rutas para categorias
app.get('/usuarios/:usuarioId/categorias', CategoriasController.listarCategoriasPorUsuario);

// Rutas para las tarjetas por ID de usuario
app.get('/usuarios/:usuarioId/tarjetas', TarjetasController.consultarPorUsuarioId);

app.listen(puerto, function () {
    console.log('Servidor ejecutándose en el puerto ' + puerto + '');
});
