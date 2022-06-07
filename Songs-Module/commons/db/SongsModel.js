// var dbConn = require('../../config/db.config');

var dbConn = require('../config/db.conn');
module.exports.get_songsid = (id,result) =>{
    dbConn.query('SELECT * from songs where song_id = ?',id, (err,res) => {
        if(err){
            console.log('error while fetch singers');
            result(null,err);
        }else{
            console.log('fetched successfully');
           
            result(null,res);
        }
    })
}


module.exports.get_songs = (result) =>{
    dbConn.query('SELECT * from songs', (err,res) => {
        if(err){
            console.log('error while fetch songs');
            result(null,err);
        }else{
            console.log('fetched successfully');
            result(null,res);
        }
    })
    }
    
    //get  album by category name
    module.exports.get_songscat = (id,result) =>{
        dbConn.query('SELECT * from songs where genre = ?',id, (err,res) => {
            if(err){
                console.log('error while fetch singers');
                result(null,err);
            }else{
                console.log('fetched successfully');
               
                result(null,res);
            }
        })
    }
    
    module.exports.Add_songs = (data,result) =>{
        dbConn.query(`INSERT INTO songs SET ? `,data, (err,res) => {
            console.log("songs data",data);
            if(err){
                console.log(err);
                result(null,err);
            }else{
                console.log('data added successfully');
                result(null,{status:true , message: 'added successfully'});
            }
        })
        
        }
    
    