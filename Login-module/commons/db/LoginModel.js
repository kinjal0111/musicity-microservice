// var dbConn = require('../../config/db.config');

var dbConn = require('../config/db.conn');
module.exports.get_login= (data,result) =>{
    console.log("login model data",data);
   const no = dbConn.query(`SELECT * from user where email = ? `,data, (err,res) => {
     [[no_resultss]] = no._results
   if((no_resultss === undefined)){
       
        result(null,err);
   }else{
        console.log('data added successfully',res);
        result(null,res);
    }
})
}