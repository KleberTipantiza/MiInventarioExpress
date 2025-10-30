const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    description: String,
    imagen: String,
});

module.exports = mongoose.model('Producto', productoSchema);