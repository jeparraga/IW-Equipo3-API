import * as mongoose from 'mongoose';

const prodservSchema = new mongoose.Schema({
  id: {type : Number},
  nombre: {type : String},
  precio: {type : Number},
});

prodservSchema.set('timestamps', false);

export default mongoose.model(
    'cat_prod_serv',
    prodservSchema,
    'cat_prod_serv'
  );