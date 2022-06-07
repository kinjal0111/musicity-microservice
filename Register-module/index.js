const express = require("express");
const bodyparser =  require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9600;
const serverless = require('serverless-http')

const RegisterRoutes   = require('./api/Register/RegisterRoutes');
app.use(cors())

//parsedata
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/Register', RegisterRoutes);



app.listen(port,() => {
    console.log(`listening to port ${port}`)
})

module.exports.handler = serverless(app);