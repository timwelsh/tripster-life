const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const creds = require('../server/configuration');
const router = require('express-promise-router')();
require('dotenv').config();

console.log(process.env)

if (!process.env['SENDER_EMAIL'] || !process.env['SENDER_PASS']) {
  console.error(`SENDER_EMAIL or SENDER_PASS not set in env. (process.env['SENDER_EMAIL']...)`);
  process.exit(1);
}

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://localhost/TripsterLifeTEST', { useNewUrlParser: true });
} else {
  mongoose.connect('mongodb://localhost/TripsterLife', { useNewUrlParser: true });
}

const app = express();

app.use(express.static(path.join(__dirname, "../client/build/")))

app.use(cors());

// Middlewares moved morgan into if for clear tests
if (!process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());

// Routes
app.use('/users', require('./routes/users'));

app.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: email, //sender address
    to: 'admin@tripster.life, ragsdale.jar@gmail.com', // receiver's address
    subject: 'New Message from Tripstir', // subject line
    text: content, // plain text body
    // html: '<p>Hello, world!</p>' // html body
  }
  
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      });
    }
  });
});

app.use("*", function(req, res) {
  console.log(path.join(__dirname, "../client/build/index.html"));
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Nodemailer
let transporter = nodemailer.createTransport({
  // port: 587,
  // secure: false, // true for 465, false for other ports
  host: 'smtp.gmail.com',
  service: 'Gmail',
  auth: {
    type: 'login',
    user: process.env['SENDER_EMAIL'],
    pass: process.env['SENDER_PASS'],
  }
});

async function mail() {
  // Creates a reusable transporter object using the default SMTP transport
  // console.log(`EMAIL: ${process.env.SENDER_EMAIL}, PASS: ${process.env.SENDER_PASS}`)

  // Send mail with defined transport object
  let info = await transporter.sendMail();

  console.log('Message sent: %s', info.messageId);
}

module.exports = app;
