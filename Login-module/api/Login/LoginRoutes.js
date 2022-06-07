const express = require('express');
const router = express.Router();

const LoginController = require('./LoginController');


router.post("/", LoginController.get_login);

module.exports = router;