//  /controlles/TransaccionesController.js
const TransaccionesModel = require('../models/transacciones');

class TransaccionesController {


    static async indexGet(req, res) {
        try {
            const data = await TransaccionesModel.consultar();
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async itemGet(req, res) {
        try {
            const id = req.params.id;
            const data = await TransaccionesModel.consultarTransaccionPorId(id);
            if (data.length === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
                return;
            }
            res.send(data[0]);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }


    static async indexPost(req, res) {
        try {
            const newData = req.body;
            const insertedId = await TransaccionesModel.insertar(newData);
            res.status(201)
                .header('Location', `/transacciones/${insertedId}`)
                .send({ status: 201, message: 'Created' });
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async agregarGasto(req, res) {
        try {
          const { usuario_id, categoria_id, monto } = req.body;
          await TransaccionesModel.insertar({ usuario_id, categoria_id, monto, tipo: 'Gasto' });
          res.status(200).send({ message: 'Gasto registrado exitosamente' });
        } catch (error) {
          console.error('Error al registrar el gasto:', error);
          res.status(500).send({ error: 'Error al registrar el gasto' });
        }
      }
}

module.exports = TransaccionesController;
