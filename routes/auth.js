const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const usuarios = [
    { usuario: 'admin', password: '$2b$10$9WrW6qYK5YjTg6jMV09fveJIQ/Jks3F.rPf3RHPgGcZP2Zg3zyQ.S' }
];

// Ruta de login
router.get('/login', (req, res) => res.render('login'));

// Procesar login
router.post('/login', async (req, res) => {
    const { usuario, password } = req.body;

    //Validar campos vacios
    if (!usuario || !password) {
        return res.render('login', { error: 'Todos los campos son obligatorios'});
    }
    
    const user = usuarios.find(u => u.usuario === usuario);
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.usuario = usuario;
        res.redirect('/productos');
    } else {
        res.render('login', { error: 'Credenciales invalidas' });
    }
});
// Ruta de logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;