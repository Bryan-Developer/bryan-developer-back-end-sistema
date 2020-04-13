const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
let subCategoriaSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'La DESCRIPCION es Obligatoria']
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categorias',
        required: [true, 'La CATEGORIA es Obligatoria']
    }
});
module.exports = Mongoose.model('SubCategorias', subCategoriaSchema);