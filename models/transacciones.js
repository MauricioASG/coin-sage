const db = require('../dbconnection');

class TransaccionesModel {
    static async consultarTransaccionesPorUsuarioId(usuarioId) {
        try {
            const transacciones = await db.select('*')
                .from('Transacciones')
                .where('usuario_id', usuarioId);
            return transacciones;
        } catch (error) {
            throw new Error(`Error al consultar transacciones por usuario ID: ${error.message}`);
        }
    }

    static async consultarTransaccionPorId(transaccionId) {
        try {
            const transaccion = await db.select('*')
                .from('Transacciones')
                .where('id', transaccionId);
            return transaccion;
        } catch (error) {
            throw new Error(`Error al consultar transacción por ID: ${error.message}`);
        }
    }
}

module.exports = TransaccionesModel;
