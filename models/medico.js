const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


var MedicoSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es requerido'] },
    img: { type: String, required: false },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    hospital: { type: Schema.Types.ObjectId, ref: 'Hospital', required: true }
}, { collection: 'medicos' });

MedicoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

// medicoSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = model('Medico', MedicoSchema);