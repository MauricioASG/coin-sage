// TransaccionesController.js
const TransaccionesModel = require('../models/transacciones');

class TransaccionesController {
    static async transaccionesPorUsuarioIdGet(req, res) {
        try {
            const usuarioId = req.params.usuarioId;
            const transacciones = await TransaccionesModel.consultarTransaccionesPorUsuarioId(usuarioId);

            if (transacciones.length === 0) {
                res.status(404).json({
                    error: 'not_found',
                    error_description: 'No se encontraron transacciones para el usuario.'
                });
            } else {
                res.status(200).json(transacciones);
            }
        } catch (error) {
            res.status(500).json({
                error: 'internal_error',
                error_description: 'Ocurrió un problema al consultar las transacciones del usuario.'
            });
        }
    }

    static async transaccionPorIdGet(req, res) {
        try {
            const transaccionId = req.params.transaccionId;
            const transaccion = await TransaccionesModel.consultarTransaccionPorId(transaccionId);

            if (!transaccion) {
                res.status(404).json({
                    error: 'not_found',
                    error_description: 'No se encontró la transacción.'
                });
            } else {
                res.status(200).json(transaccion);
            }
        } catch (error) {
            res.status(500).json({
                error: 'internal_error',
                error_description: 'Ocurrió un problema al consultar la transacción.'
            });
        }
    }
}

module.exports = TransaccionesController;
