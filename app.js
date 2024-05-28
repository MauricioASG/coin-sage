const express = require('express');
const cors = require('cors'); // Importa cors

// rutas de los controladores
const UsuariosController = require('./controllers/UsuariosController');
const TransaccionesController = require('./controllers/TransaccionesController');
const CategoriasController = require('./controllers/CategoriasController');
const TarjetasController = require('./controllers/TarjetasController');

const app = express();
const puerto = 3050; // Asegúrate de que el puerto esté correctamente configurado

// Middleware para permitir CORS
app.use(cors());

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('SiConfirmacion :3');
});

// Rutas para usuarios
app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios/:id', UsuariosController.itemPut); // Actualizar
app.patch('/usuarios/:id', UsuariosController.itemPatch);
app.post('/login', UsuariosController.login); // Agrega la ruta de login
app.post('/crear-cuenta', UsuariosController.crearCuenta); // Nueva ruta para crear cuenta

// Rutas para transacciones
app.get('/transacciones', TransaccionesController.indexGet);
app.get('/transacciones/:id', TransaccionesController.itemGet);
app.post('/transacciones', TransaccionesController.indexPost);

// Rutas para categorias
app.get('/categorias', CategoriasController.indexGet);
app.post('/categorias', CategoriasController.indexPost);

// Rutas para las tarjetas por ID de usuario
app.get('/tarjetas', TarjetasController.indexGet); 
app.post('/tarjetas', TarjetasController.indexPost); 
app.put('/tarjetas/:id', TarjetasController.actualizarTarjeta);
app.delete('/tarjetas/:id', TarjetasController.eliminarTarjeta);

app.listen(puerto, function () {
    console.log(`Servidor ejecutándose en el puerto ${puerto}`);
});
