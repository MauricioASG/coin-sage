//  /controlles/TarjetasController.js
const CategoriasModel = require('../models/categorias');

class CategoriasController {
    static async getCategorias(req, res) {
        try {
            const categorias = await CategoriasModel.consultar();
            res.send(categorias);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async indexPost(req, res) {
        try {
            const newData = req.body;
            const insertedId = await CategoriasModel.insertar(newData);
            res.status(201).header('Location', `/categorias/${insertedId}`).send({ status: 201, message: 'Created' });
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = CategoriasController;
