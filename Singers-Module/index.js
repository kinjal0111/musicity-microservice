const express = require("express");
const bodyparser =  require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7500;
const SingersRoutes   = require('./api/Singers/SingersRoutes');
const serverless = require('serverless-http')
app.use(cors())

//parsedata
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/Singers', SingersRoutes);

app.listen(port,() => {
    console.log(`listening to port ${port}`)
})

module.exports.handler = serverless(app);