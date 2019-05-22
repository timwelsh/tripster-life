const express = require('express');
const router = require('express-promise-router')();
const MailController = require('../controllers/mailer');

router.route('/sendmail').post(MailController.sendMail);

module.exports = router;