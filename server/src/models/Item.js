const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de item es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion de item es obligatorio']
    },
    categoria: {
            type: String,
            required: [true, 'La categoria de item es obligatorio']
    },
    stock: {
        type: Number,
        required: [true, 'El stock de item es obligatorio']
    },
    precio: {
        type: Number,
        required: [true, 'El precio de item es obligatorio']
    },
    estado: {
        type: Boolean,
        required: [true, 'El estado de item es obligatorio']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);