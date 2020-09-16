const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


var hospitalSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es requerido'] },
    img: { type: String, required: false },
    usuario: { required: [true, 'El usuario es requerido'], type: Schema.Types.ObjectId, ref: 'Usuario' }
}, { collection: 'hospitales' });

hospitalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

// hospitalSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = model('Hospital', hospitalSchema);