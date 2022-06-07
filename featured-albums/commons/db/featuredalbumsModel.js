// var dbConn = require('../../config/db.config');

var dbConn = require('../config/db.conn');

module.exports.get_featured_songs = (result) =>{
    dbConn.query('SELECT * from featured_albums fs inner join albums s where fs.album_id = s.id', (err,res) => {
        if(err){
            console.log('error while fetch singers');
            result(null,err);
        }else{
            console.log('fetched successfully');
            result(null,res);
        }
    })
    }