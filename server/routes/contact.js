
const express = require('express');
const router = express.Router();
const ContactController = require('../controller/contactController');


router.post('/submit',ContactController.submitContactDetails);

module.exports = router;