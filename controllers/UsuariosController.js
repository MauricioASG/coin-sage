//UsuariosContoller.js
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

}

module.exports = UsuariosController;
