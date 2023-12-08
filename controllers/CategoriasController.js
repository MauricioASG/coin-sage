const CategoriasModel = require('../models/categorias');

class CategoriasController {


    static async indexGet(req, res) {
        try {
            const data = await CategoriasModel.consultar();
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async indexPost(req, res) {
        try {
            const newData = req.body;
            const insertedId = await CategoriasModel.insertar(newData);
            res.status(201)
                .header('Location', `/categorias/${insertedId}`)
                .send({ status: 201, message: 'Created' });
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }


    static async listarCategoriasPorUsuario(req, res) {
        const usuarioId = req.params.usuarioId;
        try {
            const categorias = await CategoriasModel.consultarCategoriasPorUsuarioId(usuarioId);
            if (!categorias || categorias.length === 0) {
                return res.status(404).json({
                    errno: 404,
                    error: 'not_found',
                    error_description: `No se encontraron categorías asociadas al usuario ${usuarioId}.`
                });
            }
            res.send(categorias);
        } catch (error) {
            res.status(500).send({
                errno: 500,
                error: 'internal_error',
                error_description: 'Ocurrió un problema para procesar la solicitud'
            });
        }
    }
}

module.exports = CategoriasController;

