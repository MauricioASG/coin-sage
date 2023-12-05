const TarjetasModel = require('../models/tarjetas');

class TarjetasController {
    static async consultarPorUsuarioId(req, res) {
        try {
            const usuarioId = req.params.usuarioId;
            const tarjetas = await TarjetasModel.consultarPorUsuarioId(usuarioId);
            
            if (!tarjetas || tarjetas.length === 0) {
                return res.status(404).json({
                    errno: 404,
                    error: "not_found",
                    error_description: `No se encontraron tarjetas asociadas al usuario con ID ${usuarioId}.`
                });
            }

            res.status(200).json(tarjetas);
        } catch (error) {
            res.status(500).json({
                errno: 500,
                error: "internal_error",
                error_description: "Ocurrió un problema para procesar la solicitud."
            });
        }
    }
}

module.exports = TarjetasController;

