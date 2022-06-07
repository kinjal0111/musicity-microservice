//get Albums songs list 
const {featuredalbumsModel:{get_featured_songs}} = require('../../commons/db');


exports.get_featured_songs = (req,res) => {
      get_featured_songs((err,songs)=>{
                console.log("here");
                if(err) res.send(err);
                console.log("songs",songs);
                res.send(songs);
        })
    
}
