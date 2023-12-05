const CategoriasModel = require('../models/categorias');

class CategoriasController {
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

