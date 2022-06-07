const express = require("express");
const bodyparser =  require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;
const AllalbumsRoutes   = require('./api/albums/AllalbumsRoutes');

app.use(cors())

//parsedata
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/albums', AllalbumsRoutes);

app.listen(port,() => {
    console.log(`listening to port ${port}`)
})

module.exports = app

