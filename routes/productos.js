const express = required('express');
const router = express.router();
const Producto = require('../models/Producto');

// Obtener todos los productos
router.get('/', async (req, res) => {
const productos = await Producto.find();
res.render('productos/lista', { productos });    
});

// Formulario para agregar un nuevo producto
router.get('/nuevo', (req, res) => {
    res.render('productos/nuevo');
});

// Agregar un nuevo producto
router.post('/', async (req, res) => {
const nuevo = new Producto(req.body);
await nuevo.save();
res.redirect('/productos');
});

// Formulario para editar un producto
router.get('/editar/:id', async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.render('productos/editar', { producto });
});

// Actualizar un producto
router.post('/editar/:id', async (req, res) => {
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/productos');
});

// Eliminar un producto
router.post('/eliminar/:id',async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.redirect('/productos');
});

module.exports = router;