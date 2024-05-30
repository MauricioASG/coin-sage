// /models/tarjetas.js
const db = require('../dbconnection');

class TarjetasModel {

    static async consultar() {
        try {
            const tarjetas = await db.select('*').from('Tarjetas');
            return tarjetas;
        } catch (error) {
            throw new Error(`Error al consultar tarjetas: ${error.message}`);
        }
    }

    static async consultarPorUsuarioId(usuarioId) {
        try {
            const tarjetas = await db.select('*').from('Tarjetas').where('usuario_id', usuarioId);
            return tarjetas;
        } catch (error) {
            throw new Error(`Error al consultar tarjetas por ID de usuario: ${error.message}`);
        }
    }

    static async crearTarjeta(datos) {
        try {
            const result = await db('Tarjetas').insert(datos);
            return result[0];
        } catch (error) {
            throw new Error(`Error al crear tarjeta: ${error.message}`);
        }
    }

    static async actualizarTarjeta(id, campos) {
        try {
            const result = await db('Tarjetas').where('id', id).update(campos);
            return result;
        } catch (error) {
            throw new Error(`Error al actualizar tarjeta: ${error.message}`);
        }
    }

    static async eliminarTarjeta(id) {
        try {
            const result = await db('Tarjetas').where('id', id).del();
            return result;
        } catch (error) {
            throw new Error(`Error al eliminar tarjeta: ${error.message}`);
        }
    }
}

module.exports = TarjetasModel;

