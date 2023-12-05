const UsuariosModel = require('../models/usuarios'); 

class UsuariosController {
    static async indexGet(req, res){
        try {
            const data = await UsuariosModel.consultar();
            if (!data || data.length === 0) {
                res.status(404).json({
                    error: 'not_found',
                    error_description: 'No se encontraron usuarios.'
                });
            } else {
                res.status(200).json(data);
            }
        } catch (error) {
            res.status(500).json({
                error: 'internal_error',
                error_description: 'Ocurrió un problema al consultar los usuarios.'
            });
        }
    }

    static async itemGet(req, res){
        try {
            const id = req.params.id;
            const data = await UsuariosModel.consultarPorId(id);
            if (!data || data.length === 0) {
                res.status(404).json({
                    error: 'not_found',
                    error_description: 'No se encontró el usuario.'
                });
            } else {
                res.status(200).json(data);
            }
        } catch (error) {
            res.status(500).json({
                error: 'internal_error',
                error_description: 'Ocurrió un problema al consultar el usuario.'
            });
        }
    }
}

module.exports = UsuariosController;



