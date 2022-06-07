//get Albums songs list 
const {SingersModel:{Add_singers,get_AllSinger_list,get_Singer_list,get_Singer_listbyID,get_songs_singers}} = require('../../commons/db')


exports.get_Singer_list = (req,res) => {
    get_Singer_list((err,singers)=>{
            if(err) res.send(err);
            console.log("singers",singers);
            res.send(singers);
    })

}

exports.get_AllSinger_list = (req,res) => {
    
   get_AllSinger_list((err,singers)=>{
    console.log("alll singers listtt ",res)
           console.log("here");
           if(err) res.send(err);
           console.log("singers",singers);
           res.send(singers);
   })
}

exports.get_Singer_listbyID = (req,res) => {
   get_Singer_listbyID(req.params.id,(err,singers)=>{
           console.log("here");
           if(err) res.send(err);
           console.log("singers",singers);
           res.send(singers);
   })

}



exports.Add_singers = (req, res) => {
    const data = req.body;
    Add_singers(data, (err, user) => {
        if (err) {
            res.send(err);
            res.json({ status: false, message: 'Somthing went wrong', data: user })
        }else {
            res.send( {message : 'added sucessfully'} );
        }
    })
}

exports.get_songs_singers = (req,res) => {
    get_songs_singers(req.params.id ,(err,songs)=>{
                console.log("here");
                if(err) res.send(err);
                console.log("songs",songs);
                res.send(songs);
        })
}

