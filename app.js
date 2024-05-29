const express = require('express');
const cors = require('cors');

// Rutas de los controladores
const UsuariosController = require('./controllers/UsuariosController');
const TransaccionesController = require('./controllers/TransaccionesController');
const CategoriasController = require('./controllers/CategoriasController');
const TarjetasController = require('./controllers/TarjetasController');

const app = express();
const puerto = 3050;

// Middleware para permitir CORS
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('SiConfirmacion :3');
});

// Rutas para usuarios
app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios/:id', UsuariosController.itemPut); // Actualizar
app.patch('/usuarios/:id', UsuariosController.itemPatch);
app.post('/usuarios/:id/salario', UsuariosController.registrarSalario);
app.post('/login', UsuariosController.login); // Ruta de login
app.post('/crear-cuenta', UsuariosController.crearCuenta); // Ruta para crear cuenta

// Rutas para transacciones
app.get('/transacciones', TransaccionesController.indexGet);
app.get('/transacciones/:id', TransaccionesController.itemGet);
app.post('/transacciones', TransaccionesController.indexPost);
app.post('/transacciones/gasto', TransaccionesController.agregarGasto);

// Rutas para categorías
app.get('/categorias', CategoriasController.getCategorias);
app.post('/categorias', CategoriasController.indexPost);

// Rutas para las tarjetas por ID de usuario
app.get('/tarjetas', TarjetasController.indexGet); 
app.post('/tarjetas', TarjetasController.indexPost); 
app.put('/tarjetas/:id', TarjetasController.actualizarTarjeta);
app.delete('/tarjetas/:id', TarjetasController.eliminarTarjeta);

app.listen(puerto, () => {
    console.log(`Servidor ejecutándose en el puerto ${puerto}`);
});
