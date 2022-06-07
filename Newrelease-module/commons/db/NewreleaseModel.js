// var dbConn = require('../../config/db.config');

var dbConn = require('../config/db.conn');
//get all featured songs MONTH(CURRENT_DATE())
module.exports.get_new_release_songs = (result) =>{
    dbConn.query('SELECT * from songs where month(created_at) =  3 limit 8', (err,res) => {
        if(err){
            console.log('error while fetch singers');
            result(null,err);
        }else{
            console.log('fetched successfully');
            result(null,res);
        }
    })
    }