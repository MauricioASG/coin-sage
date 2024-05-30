//  /controlles/TarjetasController.js
const TarjetasModel = require('../models/tarjetas');

class TarjetasController {

    static async indexGet(req, res) {
        try {
            const data = await TarjetasModel.consultar();
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async indexPost(req, res) {
        try {
            const newData = req.body;
            const insertedId = await TarjetasModel.crearTarjeta(newData);
            res.status(201)
                .header('Location', `/tarjetas/${insertedId}`)
                .send({ status: 201, message: 'Created' });
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
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

