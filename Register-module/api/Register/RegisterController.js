//get Albums songs list 
const {RegisterModel:{get_user}} = require('../../commons/db')
const { hashSync, genSaltSync} = require("bcrypt");



exports.Register = (req, res) => {
    const data = req.body;
    const salt = genSaltSync(10);
    data.password = hashSync(data.password, salt);
    if ( data.name === "" || data.email == "" || data.password === "") {
        res.send( {message : 'please fill all fields'} );
        console.log("fill data data");
    } else {
        console.log("validdata");
        get_user(data, (err, user) => {
            console.log(user);
            if (err) {
                res.send(err);
                res.json({ status: false, message: 'Somthing went wrong', data: user })
            }else {
                res.send( {message : user.message} );
            }
        })

    }

}


