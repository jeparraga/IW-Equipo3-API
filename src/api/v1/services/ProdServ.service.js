//Commerce
import ProdServ from '../models/ProdServ';
import boom from '@hapi/boom';

//FIC: GET PRODUCTS AND SERVICES LIST
export const getAllProdServ = async () => {
  //let ProdServAll;
  try {
        const ProdServAll = await ProdServ.find();
        return(ProdServAll);
  } catch (error) {
    //res.status(500).json({ message: 'Error: ' + ficError });
    throw boom.internal(error);
  }
};

//FIC: GET PRODUCT OR SERVICE BY ID
export const getOneProdServ = async (id, keyType) => {
  let ProdServOne;
 
  //Sin importar el tipo de keyType, el campo a buscar se llama "id"
  try {
    if (keyType === 'OK' || keyType === 'BK') {
      ProdServOne = await ProdServ.findOne({
      id: id,
      });
    } /*else if (keyType === 'BK') {
        ProdServOne = await ProdServ.findOne({
        id: id,
      });
    }*/
    return(ProdServOne);
  } catch (error) {
    throw boom.internal(error);
  }
};

// POST (ADD) Productos y/o Servicios.
export const postProdServItem = async (paProdServItem) => {
  try {
  const newProdServItem = new ProdServ(paProdServItem);
  return await newProdServItem.save();
  } catch (error) {
  throw error;
  }
};

// Servicio para actualizar un producto/servicio por su ID
export const updateProdServItem = async (id, updatedData) => {
  try {
    // Actualiza el producto/servicio usando el campo 'id' en lugar de '_id'
    const updatedProdServItem = await ProdServ.findOneAndUpdate({ id }, updatedData, { new: true });
    return updatedProdServItem;
  } catch (error) {
    throw error;
  }
};

// Servicio para eliminar un producto/servicio por su ID
export const deleteProdServItem = async (id) => {
  try {
    // Busca el producto/servicio por su ID y elimínalo
    const deletedProdServItem = await ProdServ.findOneAndDelete({ id });
    return deletedProdServItem;
  } catch (error) {
    throw error;
  }
};