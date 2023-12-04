const db = require('../dbconnection');

class TarjetasModel {
    static async consultarPorUsuarioId(usuarioId) {
        try {
            const tarjetas = await db.select('*').from('Tarjetas').where('usuario_id', usuarioId);
            return tarjetas;
        } catch (error) {
            throw new Error(`Error al consultar tarjetas por ID de usuario: ${error.message}`);
        }
    }
}

module.exports = TarjetasModel;
