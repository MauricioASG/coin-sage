//UsuariosController.js
const UsuariosModel = require('../models/usuarios'); // Ajustar el nombre del modelo si es diferente

class UsuariosController {
    static async indexGet(req, res){
        try {
            const data = await UsuariosModel.consultar();
            res.send(data);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async itemGet(req, res){
        try {
            const id = req.params.id;
            const data = await UsuariosModel.consultarPorId(id);
            res.send(data);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = UsuariosController;




