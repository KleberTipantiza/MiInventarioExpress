const mongoose = require('mongoose');

const express = require('express');
const path = require('path');
const session = require('express-session');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/miinventario', {
 useNewUrlParser:true,
 useUnifiedTopology:true
})
.then(()=> console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'claveSecreta',
    resave: false,
    saveUninitialized: false
}));
app.set('view engine', 'hbs');

// Rutas
const productoRouter = require('./routes/productos');
app.use('/productos', productoRouter);

const authRouter = require('./routes/auth');
app.use('/', authRouter);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Chat en tiempo real con Socket.io
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    console.log('Nuevo cliente conectado:', socket.id);
    socket.on('mensaje', msg => {
        io.emit('mensaje', msg); // Reenviar mensaje a todos los clientes
    });
});

// Inicialización del servidor
server.listen(3000, () => {
    console.log('Servidor activo en http://localhost:3000/login');
});


