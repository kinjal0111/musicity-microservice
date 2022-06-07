const express = require('express');
const router = express.Router();

const SongsController = require('./SongsController');

router.get('/:id',SongsController.get_songsid);
router.get('/',SongsController.get_songs);
router.get('/songs_cat/:id',SongsController.get_songscat);
router.post('/',SongsController.Add_songs);

module.exports = router;