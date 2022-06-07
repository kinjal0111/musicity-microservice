const express = require("express");
const bodyparser =  require('body-parser');
const serverless = require('serverless-http');
const mysql = require('mysql');
const cors = require('cors');
const serverless2 = require('serverless')
const app = express();
const port = process.env.PORT || 8000;


const featuredalbumsRoutes   = require('./api/featuredalbums/featuredalbumsRoutes');
app.use(cors())

//parsedata
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// app.get('/',(req,res) => {
    
//     res.send('hello world')
// });

//importing all albums routes
// const AllalbumsRoutes = require('./AllalbumsRoutes');
app.use('/fsongs',featuredalbumsRoutes);



app.listen(port,() => {
    console.log(`listening to port ${port}`)
})

module.exports.handler = serverless(app);