const express = require("express");
const bodyparser =  require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();


const port = process.env.PORT || 8500;


const FavouriteRoutes   = require('./api/Favourite/FavouriteRoutes');
app.use(cors())
//parsedata
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/fav_songs', FavouriteRoutes);



app.listen(port,() => {
    console.log(`listening to port ${port}`)
})

module.exports = app;

