// const path = require('path');
// const express = require('express');
// const app = express();
// const morgan = require('morgan');
const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost/BoletasBd', { useNewUrlParser: true })
    .then(db => console.log("DB conectada"))
    .catch(err => console.log(err));

//import routes
// const routesApp = require('./src/routes/routesApp');

//settings
// app.set('port', process.env.PORT ||3000);
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine', 'ejs')
//middlewares
// app.use(morgan('dev'));
// app.use(express.urlencoded({extended: false}));
//routes
// app.use('/', routesApp);

//starting the server
// app.listen(app.get('port'),()=>{
//     console.log(`Server on port ${app.get('port')}`);
// });
