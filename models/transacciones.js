const db = require('../dbconnection');

class TransaccionesModel {

    static async consultar() {
        try {
            const transacciones = await db.select('*').from('Transacciones');
            return transacciones;
        } catch (error) {
            throw new Error(`Error al consultar transacciones: ${error.message}`);
        }
    }

    static async consultarTransaccionPorId(id) {
        try {
            const transaccion = await db.select('*').from('Transacciones').where('usuario_id', id);
            return transaccion;
        } catch (error) {
            throw new Error(`Error al consultar transacción por ID: ${error.message}`);
        }
    }

    static async insertar(datos) {
        try {
            const result = await db('Transacciones').insert(datos);
            return result[0]; // Retorna el ID del nuevo usuario insertado
        } catch (error) {
            throw new Error(`Error al insertar Transaccion: ${error.message}`);
        }
    }

}

module.exports = TransaccionesModel;
