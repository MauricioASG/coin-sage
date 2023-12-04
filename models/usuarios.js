//usuarios.js
const db = require('../dbconnection');

class UsuariosModel {
    static async consultar() {
        try {
            const usuarios = await db.select('*').from('Usuario');
            return usuarios;
        } catch (error) {
            throw new Error(`Error al consultar usuarios: ${error.message}`);
        }
    }

    static async consultarPorId(id) {
        try {
            const usuario = await db.select('*').from('Usuario').where('id', id);
            return usuario;
        } catch (error) {
            throw new Error(`Error al consultar usuario por ID: ${error.message}`);
        }
    }
}

module.exports = UsuariosModel;
