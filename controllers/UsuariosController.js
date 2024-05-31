// /controlles/UsuariosControlle.js
const UsuariosModel = require('../models/usuarios');
class UsuariosController {
    static async indexGet(req, res) {
        try {
            const data = await UsuariosModel.consultar();
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async indexPost(req, res) {
        try {
            const newData = req.body;
            const insertedId = await UsuariosModel.insertar(newData);
            res.status(201)
                .header('Location', `/usuarios/${insertedId}`)
                .send({ status: 201, message: 'Created' });
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async itemGet(req, res) {
        try {
            const id = req.params.id;
            const data = await UsuariosModel.consultarPorId(id);
            if (data.length === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
                return;
            }
            res.send(data[0]);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async itemPut(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const result = await UsuariosModel.reemplazar(id, updatedData);
            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Updated successfully' });
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;
            const result = await UsuariosModel.actualizar(id, updatedFields);
            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfully updated' });
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async login(req, res) {
        const { email, password } = req.body;
        console.log('Login request received:', { email, password }); // Log para depuración
        try {
            const usuarios = await UsuariosModel.consultarPorEmail(email);
            console.log('User found:', usuarios); // Log para depuración
            if (usuarios.length === 0 || usuarios[0].passw !== password) {
                return res.status(401).send({ message: 'Credenciales inválidas. Inténtalo de nuevo.' });
            }
            res.status(200).send({ message: 'Inicio de sesión exitoso', user: usuarios[0] });
        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).send({ message: 'Error interno del servidor' });
        }
    }

    static async registrarSalario(req, res) {
        try {
          const { salario } = req.body;
          const { id } = req.params;
          const usuario = await UsuariosModel.consultarPorId(id);
          if (usuario[0].salario && parseFloat(usuario[0].salario) > 0) {
            return res.status(400).send({ message: 'El salario ya ha sido registrado' });
          }
          await UsuariosModel.actualizar(id, { salario });
          res.status(200).send({ message: 'Salario registrado exitosamente' });
        } catch (error) {
          res.status(500).send({ error: 'Error al registrar el salario' });
        }
    }
    
      static async crearCuenta(req, res) {
        try {
          const { nombre, email, passw } = req.body;
          const newUser = await UsuariosModel.insertar({ nombre, email, passw });
          res.status(201).send({ user: newUser });
        } catch (error) {
          res.status(500).send({ error: 'Error al crear la cuenta' });
        }
      }

      static async obtenerSalario(req, res) {
        try {
          const { id } = req.params;
          const usuario = await UsuariosModel.consultarPorId(id);
          if (usuario.length === 0) {
            res.status(404).send({ error: 'Usuario no encontrado' });
            return;
          }
          res.send({ salario: usuario[0].salario });
        } catch (error) {
          console.error('Error al obtener el salario del usuario:', error);
          res.status(500).send({ error: 'Error interno del servidor' });
        }
      }
      
}


module.exports = UsuariosController;
