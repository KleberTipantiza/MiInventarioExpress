const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miinventario', {
 useNewUrlParser:true,
 useUnifiedTopology:true
})
.then(()=> console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));