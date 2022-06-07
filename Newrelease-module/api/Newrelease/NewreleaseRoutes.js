const express = require('express');
const router = express.Router();

const NewreleaseController = require('./NewreleaseController');


router.get('/',NewreleaseController.get_new_release_songs);
module.exports = router;