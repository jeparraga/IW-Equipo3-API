import * as EntregaServices from '../services/Entrega.service';
import boom from '@hapi/boom';

//Obtener todas las entregas
export const getAllEntregas = async (req, res, next) => {
  try{
    const EntregasAll = await EntregaServices.getAllEntregas();
    if (!EntregasAll) {
      throw boom.notFound('No se encontraron productos/servicios registrados.');
    } else if (EntregasAll) {
      res.status(200).json(EntregasAll);
    }

    } catch(error) {
      next(error);
    }
  };

//Obtener solo una entrega.
export const getOneEntrega = async (req, res, next) => {
  try {
    //Obtener parametro id mediante la desestructuracion de objetos
  const { id } = req.params;
  const keyType = req.query.keyType || 'OK';
  const EntregasOne = await EntregaServices.getOneEntrega(id, keyType);
  if (!EntregasOne) {
    throw boom.notFound('No se encontraron entregas registradas.');
  } else if (EntregasOne) {
    res.status(200).json(EntregasOne);
  }
}catch(error){
  next(error);
}
};

//API POST (ADD) entrega.
export const postEntrega = async (req, res, next) => {
  try {
    const paEntrega = req.body;
    const newEntregaItem = await EntregaServices.postEntrega(paEntrega);
    if (!newEntregaItem) {
      throw boom.badRequest('No se pudo crear la entrega.');
    } else if (newEntregaItem) {
      res.status(201).json(newEntregaItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Controlador para manejar la solicitud PUT para actualizar una entrega
export const updateEntrega = async (req, res, next) => {
  try {
    const { id } = req.params; // Obtiene el ID del entrega a actualizar
    const updatedData = req.body; // Obtiene los datos actualizados del cuerpo de la solicitud
    const updatedEntrega = await EntregaServices.updateEntrega(id, updatedData); // Llama al servicio para actualizar la entrega
    if (!updatedEntrega) {
      throw boom.notFound('No se encontró la entrega a actualizar.');
    } else {
      res.json(updatedEntrega); // Responde con los datos actualizados de la entrega
    }
  } catch (error) {
    next(error);
  }
};

// Controlador para manejar la solicitud DELETE para eliminar una entrega
export const deleteEntrega = async (req, res, next) => {
  try {
    const { id } = req.params; // Obtiene el ID de la entrega a eliminar
    const deletedEntrega = await EntregaServices.deleteEntrega(id); // Llama al servicio para eliminar la entrega
    if (!deletedEntrega) {
      throw boom.notFound('No se encontró la entrega a eliminar.');
    } else {
      res.json(deletedEntrega); // Responde con los datos de la entrega eliminada
    }
  } catch (error) {
    next(error);
  }
};