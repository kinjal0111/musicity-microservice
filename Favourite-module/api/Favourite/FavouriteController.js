//get Albums songs list 
const {FavouriteModel:{Add_to_favourite,delete_favorites, get_favorites_songs}} = require('../../commons/db');

exports.Add_to_favourite = (req, res) => {
    const data = req.body;
  
    Add_to_favourite(data, (err, user) => {
        if (err) {
            res.send(err);
            res.json({ status: false, message: 'Somthing went wrong', data: user })
        }else {
            res.send( {message : 'added sucessfully'} );
        }
    })
}

exports.delete_favorites = (req,res) => {
    console.log(req);
    delete_favorites(req.body.song_id,(err,songs)=>{
          console.log("here");
          if(err) res.send(err);
          console.log("songs",songs);
          res.send(songs);
  })
}

exports.get_favorites_songs = (req,res) => {
    get_favorites_songs(req.params.id ,(err,songs)=>{
              if(err) res.send(err);
              console.log("songs",songs);
              res.send(songs);
      })
}