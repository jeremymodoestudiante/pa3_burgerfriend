const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'El username es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'La password es obligatoria']
    },
    role: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        enum: ["admin", "supervisor", "cliente"], 
        default: "cliente"
    },
    estado: {
        type: Boolean,
        required: [true, 'El estado es obligatorio'],
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);