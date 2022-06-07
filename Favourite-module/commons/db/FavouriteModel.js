
var dbConn = require('../config/db.conn');


module.exports.Add_to_favourite= (data,result) =>{
    dbConn.query(`INSERT INTO favorites SET ? `,data, (err,res) => {
        console.log("playlfavoritesist data",data);
        if(err){
            console.log(err);
            result(null,err);
        }else{
            console.log('data added successfully');
            result(null,{status:true , message: 'added successfully'});
        }
    })
    
    }
    
    module.exports.delete_favorites = (playid,result) =>{
        console.log("delete model" , playid);
        dbConn.query(`DELETE from favorites where song_id = ${playid} `, (err,res) => {
            if(err){
                console.log('error while delete playlist');
                result(null,err);
            }else{
                console.log('deleted successfully');
                result(null,res);
            }
        })
        }
    
    module.exports.get_favorites_songs = (id,result) =>{
            dbConn.query('SELECT * from songs s inner join  favorites f on s.song_id = f.song_id where user_id = ?', id,(err,res) => {
                if(err){
                    console.log('error while fetch singers');
                    result(null,err);
                }else{
                    console.log('fetched successfully');
                    result(null,res);
                }
            })
            }
    