const express = require('express');
const router = express.Router();

const featuredalbumsController = require('./featuredalbumsController');


router.get('/',featuredalbumsController.get_featured_songs);

module.exports = router;