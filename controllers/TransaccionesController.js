const TransaccionesModel = require('../models/transacciones'); 

class TransaccionesController {
    static async transaccionesPorUsuarioIdGet(req, res){
        try {
            const usuarioId = req.params.usuarioId;
            const transacciones = await TransaccionesModel.consultarTransaccionesPorUsuarioId(usuarioId);
            res.send(transacciones);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async transaccionPorIdGet(req, res){
        try {
            const transaccionId = req.params.transaccionId;
            const transaccion = await TransaccionesModel.consultarTransaccionPorId(transaccionId);
            res.send(transaccion);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = TransaccionesController;
