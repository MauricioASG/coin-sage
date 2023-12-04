const CategoriasModel = require('../models/categorias');

class CategoriasController {
    static async listarCategoriasPorUsuario(req, res) {
        const usuarioId = req.params.usuarioId;
        try {
            const categorias = await CategoriasModel.consultarCategoriasPorUsuarioId(usuarioId);
            res.send(categorias);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = CategoriasController;

