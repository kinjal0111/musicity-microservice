const express = require('express');
const router = express.Router();

const RegisterController = require('./RegisterController');


router.post('/',RegisterController.Register);

module.exports = router;