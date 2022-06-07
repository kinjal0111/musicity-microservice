//get Albums songs list 
const {NewreleaseModel:{get_new_release_songs}} = require('../../commons/db')
exports.get_new_release_songs = (req,res) => {
    get_new_release_songs((err,songs)=>{       
              if(err) res.send(err);
              res.send(songs);
      })
}
