const express = require('express');
const router = express.Router();

const FavouriteController = require('./FavouriteController');

router.post('/',FavouriteController.Add_to_favourite);
router.delete('/',FavouriteController.delete_favorites);
router.get('/:id',FavouriteController.get_favorites_songs);

module.exports = router;