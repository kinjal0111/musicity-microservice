// var dbConn = require('../../config/db.config');

var dbConn = require('../config/db.conn');



module.exports.get_Singer_list = (result) => {
    dbConn.query('SELECT * from artists limit 6', (err, res) => {
        if (err) {
            console.log('error while fetch singers');
            result(null, err);
        } else {
            console.log('fetched successfully');

            result(null, res);
        }
    })
}

//get limited singers list
module.exports.get_AllSinger_list = (result) => {
    console.log("in all singer model ")
    dbConn.query('SELECT * from artists', (err, res) => {

        if (err) {
            console.log('error while fetch singers');
            result(null, err);
        } else {
            console.log('fetched successfully');

            result(null, res);
        }
    })
}


module.exports.get_Singer_listbyID = (id, result) => {
    dbConn.query('SELECT * from artists where id = ? ', id, (err, res) => {
        if (err) {
            console.log('error while fetch singers');
            result(null, err);
        } else {
            console.log('fetched successfully');

            result(null, res);
        }
    })
}



module.exports.Add_singers = (data, result) => {
    dbConn.query(`INSERT INTO artists SET ? `, data, (err, res) => {
        console.log("artists data", data);
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log('data added successfully');
            result(null, { status: true, message: 'added successfully' });
        }
    })

}

module.exports.get_songs_singers = (id,result) =>{
    dbConn.query(`SELECT * from artists a inner join songs s on a.id = s.artist_id where a.id = ? `,id, (err,res) => {
        if(err){
            console.log('error while fetch songs');
            result(null,err);
        }else{
            console.log('fetched successfully');
            result(null,res);
        }
    })
    }
    