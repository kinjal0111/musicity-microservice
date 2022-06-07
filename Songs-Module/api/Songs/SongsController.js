//get Albums songs list 
const {SongsModel:{get_songsid,Add_songs,get_songs,get_songscat}} = require('../../commons/db')
exports.get_songsid = (req,res) => {
    get_songsid(req.params.id,(err,songs)=>{
            console.log("here");
            if(err) res.send(err);
            console.log("songs",songs);
            res.send(songs);
    })
}


exports.get_songs = (req,res) => {
    get_songs((err,songs)=>{
            if(err) res.send(err);
            res.send(songs);
    })
}

exports.get_songscat = (req,res) => {
        get_songscat(req.params.id,(err,songs)=>{
                 console.log("here");
                 if(err) res.send(err);
                 console.log("songs",songs);
                 res.send(songs);
         })
  }


  exports.Add_songs = (req, res) => {
    const data = req.body;
    Add_songs(data, (err, user) => {
        if (err) {
            res.send(err);
            res.json({ status: false, message: 'Somthing went wrong', data: user })
        }else {
            res.send( {message : 'added sucessfully'} );
        }
    })
}