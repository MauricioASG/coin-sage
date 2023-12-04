const express = require('express');
const UsuariosController = require('./controllers/UsuariosController');
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

app.listen(puerto, function () {
    console.log('Servidor ejecutándose en el puerto ' + puerto + '');
});
