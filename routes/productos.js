const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');
const upload = require('../uploads/middleware');
const { body, validationResult } = require('express-validator');

// Obtener todos los productos
router.get('/', async (req, res) => {
const productos = await Producto.find();
res.render('productos/lista', { productos });    
});

// Formulario para agregar un nuevo producto
router.get('/nuevo', (req, res) => {
    res.render('productos/nuevo');
});

// Agregar un nuevo producto con carga de imagen y validación
router.post('/', 
    upload.single('imagen'), 
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('precio').isFloat({ min: 0}).withMessage('Precio invalido'),
    async (req, res) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.render('productos/nuevo', {
                errores: errores.array(),
                datos: req.body
            });
        }

        const nuevo = new Producto({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            imagen: req.file ? '/uploads/' + req.file.filename : ''
        });

        await nuevo.save();
        res.redirect('/productos');
    }
);

// Formulario para editar un producto
router.get('/editar/:id', async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.render('productos/editar', { producto });
});

// Actualizar un producto
router.post('/editar/:id', async (req, res) => {
    await Producto.findByIdAndUpdate(req.params.id, {
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion
    });
    res.redirect('/productos');
});

// Eliminar un producto
router.post('/eliminar/:id',async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.redirect('/productos');
});

// Ruta para el chat en tiempo real
router.get('/chat', (req, res) => {
    res.render('chat');
});

module.exports = router;
