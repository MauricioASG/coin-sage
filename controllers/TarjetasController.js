const TarjetasModel = require('../models/tarjetas');

class TarjetasController {
    static async crearTarjeta(req, res) {
        try {
            const datos = req.body;
            const nuevaTarjetaId = await TarjetasModel.crearTarjeta(datos);

            res.status(201).json({
                status: 201,
                message: "Tarjeta creada con éxito",
                nuevaTarjetaId
            });
        } catch (error) {
            res.status(500).json({
                errno: 500,
                error: "internal_error",
                error_description: "Ocurrió un problema al crear la tarjeta."
            });
        }
    }

    static async actualizarTarjeta(req, res) {
        try {
            const id = req.params.id;
            const camposActualizados = req.body;
            const resultado = await TarjetasModel.actualizarTarjeta(id, camposActualizados);

            if (resultado === 0) {
                return res.status(404).json({
                    errno: 404,
                    error: "not_found",
                    error_description: `La tarjeta con ID ${id} no existe.`
                });
            }

            res.status(200).json({
                status: 200,
                message: "Tarjeta actualizada con éxito"
            });
        } catch (error) {
            res.status(500).json({
                errno: 500,
                error: "internal_error",
                error_description: "Ocurrió un problema al actualizar la tarjeta."
            });
        }
    }

    static async eliminarTarjeta(req, res) {
        try {
            const id = req.params.id;
            const resultado = await TarjetasModel.eliminarTarjeta(id);

            if (resultado === 0) {
                return res.status(404).json({
                    errno: 404,
                    error: "not_found",
                    error_description: `La tarjeta con ID ${id} no existe.`
                });
            }

            res.status(200).json({
                status: 200,
                message: "Tarjeta eliminada con éxito"
            });
        } catch (error) {
            res.status(500).json({
                errno: 500,
                error: "internal_error",
                error_description: "Ocurrió un problema al eliminar la tarjeta."
            });
        }
    }
}

module.exports = TarjetasController;

