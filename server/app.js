const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const creds = require('');
const router = require("express").Router();

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
// app.use("*", function(req, res) {
//   console.log(path.join(__dirname, "../client/build/index.html"));
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Nodemailer
// async function mail() {

  // Creates a reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: creds.nodemailer.USER,
      pass: creds.nodemailer.PASS,
    }
  });

  app.post('/send', (req, res, next) => {
    // const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n message: ${message} `
  
    const mail = {
      from: 'admin@tripstir.life',
      to: 'ragsdale.jar@gmail.com',  //Change to email address that you want to receive messages on
      subject: 'New Message via Tripstir',
      html: `<p>${content}</p>`
    }
    console.log(mail);
    console.log("Hello?");
    transporter.sendMail(mail, (err, data) => {
      console.log("Sent?");
      if (err) {
        console.log(err);
        res.json({
          msg: 'fail'
        })
      } else {
        console.log("Successfully sent");
        res.json({
          msg: 'success'
        });
      }
    });

    // // Send mail with defined transport object
    // let info = await transporter.sendMail({
    //   from: ' "Tripster Life" <admin@tripster.life> ', //sender address
    //   to: 'admin@tripster.life, ragsdale.jar@gmail.com', // receiver's address
    //   subject: 'Hello', // subject line
    //   text: 'Hello, world!', // plain text body
    //   html: '<p>Hello, world!</p>' // html body
    // });
  });


  // console.log('Message sent: %s', info.messageId);
// }

// mail().(console.error);

module.exports = app;
