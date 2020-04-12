const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        unique: true,
        required: [true, 'La DESCRIPCION es Obligatoria']
    }
});
module.exports = Mongoose.model('Categorias', categoriaSchema);