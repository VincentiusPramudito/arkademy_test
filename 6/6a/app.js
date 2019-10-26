    require('dotenv').config()
    const express = require('express');
    const routes = require('./routes/');
    const mongoose = require('mongoose');
    const app = express();
    const port = process.env.PORT || 3000;
    const errHandling = require('./middlewares/errHandling')
    const cors = require('cors')
    mongoose.connect('mongodb://localhost/arkademy', { useNewUrlParser:true, useFindAndModify: false })
    .then(()=> {
         console.log('Database connected')
    })
    .catch(err => {
         console.log(err)
         console.log('Database failed to connect')
    })
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(cors())
    app.use('/', routes);
    app.use(errHandling)
    app.listen(port, function() {
         console.log('App listening on port', port);
    })
    
    module.exports = app