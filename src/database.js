const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/tienda')
    .then(db => console.log('BASE DE DATOS CONECTADA', db.connection.host))
    .catch(err => console.error(err));