//get Albums songs list 
const {AlbumModel:{get_album,get_albumByCat,Add_album,get_songsAlbum}} = require('../../commons/db')
exports.get_album = (req,res) => {
    get_album((err,songs)=>{         
                if(err) res.send(err);
                res.send(songs);
        })
}

exports.get_albumByCat = (req,res) => {
             get_albumByCat(req.params.id,(err,albums)=>{
                     console.log("here");
                     if(err) res.send(err);
                     console.log("Albums",albums);
                     res.send(albums);
             })
       
}
exports.Add_album = (req, res) => {
        const data = req.body;
        Add_album(data, (err, user) => {
            if (err) {
                res.send(err);
                res.json({ status: false, message: 'Somthing went wrong', data: user })
            }else {
                res.send( {message : 'added sucessfully'} );
            }
        })
    }

    exports.get_songsAlbum = (req,res) => {
        get_songsAlbum(req.params.id,(err,songs)=>{
                if(err) res.send(err);
                res.send(songs);
        })
    }
