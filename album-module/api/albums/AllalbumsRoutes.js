const express = require('express');
const router = express.Router();

const AllalbumsController = require('./AllalbumsController');


router.get('/',AllalbumsController.get_album);
router.get('/:id',AllalbumsController.get_albumByCat);
router.post('/',AllalbumsController.Add_album);

router.get('/songs/:id',AllalbumsController.get_songsAlbum);

module.exports = router;