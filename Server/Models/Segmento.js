const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
let segmentoSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'La DESCRICIÓN es obligatoria']
    },
    subCategorias: {
        type: [Schema.Types.ObjectId],
        ref: 'SubCategorias',
        required: [true, 'La SUB CATEGORIA es Obligatoria']
    }
});
module.exports = Mongoose.models('Segmentos', segmentoSchema);