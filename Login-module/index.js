const express = require("express");
const bodyparser =  require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3700;
const serverless = require('serverless-http')

const LoginRoutes   = require('./api/Login/LoginRoutes');
app.use(cors())

//parsedata
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/login', LoginRoutes);
app.listen(port,() => {
    console.log(`listening to port ${port}`)
})
module.exports.handler = serverless(app);