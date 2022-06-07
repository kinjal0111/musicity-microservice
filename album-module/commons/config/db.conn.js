const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    user:'sql6496588',
    password: 'pRwJp6Dddt',
    database:'sql6496588'
});

dbConn.connect(function (err){
    if(err){
        console.log("error");
    }else{
    console.log('database connected') }
})

module.exports = dbConn;
