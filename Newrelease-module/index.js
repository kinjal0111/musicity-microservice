const express = require("express");
const bodyparser =  require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4200;
const serverless = require('serverless-http');

const NewreleaseRoutes   = require('./api/Newrelease/NewreleaseRoutes');
app.use(cors())

//parsedata
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// app.get('/',(req,res) => {
    
//     res.send('hello world')
// });

//importing all albums routes
// const AllalbumsRoutes = require('./AllalbumsRoutes');
app.use('/Newrelease', NewreleaseRoutes);



app.listen(port,() => {
    console.log(`listening to port ${port}`)
})

module.exports.handler = serverless(app);