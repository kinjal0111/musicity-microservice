// var dbConn = require('../../config/db.config');

var dbConn = require('../config/db.conn');
module.exports.get_user = (data, result) => {
    if (data.name === "" || data.email == "" || data.password === "") {
        console.log('error while adding user');

    }
    else {
        const response = dbConn.query(`select * from user where email = ?`,data.email,(err, res) => {
            const [[resdata]] = response._results;
            if(resdata === undefined){
                dbConn.query(`INSERT INTO user SET ? `, data, (err, res) => {
                    console.log("registermodel data", data);
                    if (err || data.name === "" || data.email == "" || data.password === "") {
                        console.log('error while adding user');
                        console.log(err);
                        result(null, err);
                    } else {
                        console.log('data added successfully');
                        result(null, { status: true, message: 'you have been registered.'});
                    }
                })
            }else{
                result(null, { status: false, message: 'TThis EmailId already Exists' });
            }

           
        });
        
        
    }

}