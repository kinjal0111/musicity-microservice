// var dbConn = require('../../config/db.config');

var dbConn = require('../config/db.conn');
// var  module.exports = ( module.exports) => {
//     this.id =    module.exports.id;
//     this.song_id = song.song_id;
//     this.created_at = new Date;
//     this.updated_at = new Date;

// }

module.exports.get_album = (result) =>{
dbConn.query('SELECT a.id,slug,name,cname,image,a.category_id,a.created_at,a.updated_at from albums a inner join categories c on a.category_id = c.id ', (err,res) => {
    if(err){
        console.log('error while fetch singers');
        result(null,err);
    }else{
        console.log('fetched successfully');
        result(null,res);
    }
})
}

//get  album by category name
    module.exports.get_albumByCat = (id,result) =>{
    dbConn.query('SELECT * from albums a inner join categories c on a.category_id = c.id where cname = ? ',id, (err,res) => {
        if(err){
            console.log('error while fetch singers');
            result(null,err);
        }else{
            console.log('fetched successfully');
           
            result(null,res);
        }
    })
    }


        module.exports.Add_album = (data,result) =>{
        dbConn.query(`INSERT INTO albums SET ? `,data, (err,res) => {
            console.log("albums data",data);
            if(err){
                console.log(err);
                result(null,err);
            }else{
                console.log('data added successfully');
                result(null,{status:true , message: 'added successfully'});
            }
        })
        
        }
        module.exports.get_songsAlbum = (id,result) =>{
            dbConn.query('SELECT * from songs inner join albums on songs.album_id = albums.id where album_id = ?',id, (err,res) => {
                if(err){
                    console.log('error while fetch singers');
                    result(null,err);
                }else{
                    console.log('fetched song album successfully');
                   
                    result(null,res);
                }
            })
        }

