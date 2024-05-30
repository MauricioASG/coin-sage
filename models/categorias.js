// /models/categorias.js
const db = require('../dbconnection');

class CategoriasModel {


    static async consultar() {
        try {
            const categorias = await db.select('*').from('Categorias');
            return categorias;
        } catch (error) {
            throw new Error(`Error al consultar las categorias de gastos: ${error.message}`);
        }
    }


    static async insertar(datos) {
        try {
            const result = await db('Categorias').insert(datos);
            return result[0]; // Retorna el ID del nuevo usuario insertado
        } catch (error) {
            throw new Error(`Error al insertar categoria: ${error.message}`);
        }
    }



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

