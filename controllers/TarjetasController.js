const TarjetasModel = require('../models/tarjetas');

class TarjetasController {
    static async consultarPorUsuarioId(req, res) {
        try {
            const usuarioId = req.params.usuarioId;
            const tarjetas = await TarjetasModel.consultarPorUsuarioId(usuarioId);
            res.send(tarjetas);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}

module.exports = TarjetasController;
