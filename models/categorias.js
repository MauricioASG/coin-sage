const db = require('../dbconnection');

class CategoriasModel {
    static async consultarCategoriasPorUsuarioId(usuarioId) {
        try {
            const categorias = await db.select('*').from('Categorias').where('usuario_id', usuarioId);
            return categorias;
        } catch (error) {
            throw new Error(`Error al consultar categorías por ID de usuario: ${error.message}`);
        }
    }
}

module.exports = CategoriasModel;

