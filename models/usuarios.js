// models/usuarios.js
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

    static async consultarPorEmail(email) {
        try {
            const usuario = await db.select('*').from('Usuario').where('email', email);
            return usuario;
        } catch (error) {
            throw new Error(`Error al consultar usuario por email: ${error.message}`);
        }
    }

    static async insertar(datos) {
        try {
            const result = await db('Usuario').insert(datos);
            return result[0]; // Retorna el ID del nuevo usuario insertado
        } catch (error) {
            throw new Error(`Error al insertar usuario: ${error.message}`);
        }
    }
    
    static async actualizar(id, campos) {
        try {
            const result = await db('Usuario').where('id', id).update(campos);
            return result; // Retorna la cantidad de registros actualizados
        } catch (error) {
            throw new Error(`Error al actualizar usuario: ${error.message}`);
        }
    }

    static async reemplazar(id, newData) {
        try {
            newData['id'] = id;
            await db('Usuario').where('id', id).del();
            await db('Usuario').insert(newData);
            return id;
        } catch (error) {
            throw new Error(`Error al reemplazar usuario: ${error.message}`);
        }
    }
}

module.exports = UsuariosModel;
