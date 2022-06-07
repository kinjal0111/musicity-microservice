const express = require('express');
const router = express.Router();

const SingersController = require('./SingersController');

router.get('/', SingersController.get_Singer_list);
router.get('/:id', SingersController.get_Singer_listbyID);
router.get('/all-singers', SingersController.get_AllSinger_list);
router.post('/', SingersController.Add_singers);
router.get('/songsinger/:id',SingersController.get_songs_singers);

module.exports = router;