const Mongoose = require('mongoose');
const MongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = Mongoose.Schema;
let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        unique: true,
        required: [true, 'La DESCRIPCION es Obligatoria']
    }
});
categoriaSchema.plugin(MongooseUniqueValidator, { message: '{PATH} debe de ser UNICO' });
module.exports = Mongoose.model('Categorias', categoriaSchema);