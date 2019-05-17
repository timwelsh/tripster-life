const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const creds = require('../server/configuration');
const router = require('express-promise-router')();

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
app.use("*", function(req, res) {
  console.log(path.join(__dirname, "../client/build/index.html"));
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


// Nodemailer
async function mail() {
  
  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    axios({
      method: 'POST',
      url: 'localhost:3000/contact',
      data: {
        name,
        email,
        message
      }
    }).then((response) => {
      if (response.data.msg === 'success') {
        alert('Message sent.');
        this.resetForm();
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.');
      }
    });
  }
  
  function resetForm() {
    document.getElementById('contactForm').reset();
  }

  // Creates a reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'tripster.life',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: creds.nodemailer.USER,
      pass: creds.nodemailer.PASS,
    }
  });

  router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${content} `
  
    var mail = {
      from: name,
      to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
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

  // Send mail with defined transport object
  let info = await transporter.sendMail({
    from: ' "Tripster Life" <admin@tripster.life> ', //sender address
    to: 'admin@tripster.life, ragsdale.jar@gmail.com', // receiver's address
    subject: 'Hello', // subject line
    text: 'Hello, world!', // plain text body
    html: '<p>Hello, world!</p>' // html body
  });

  console.log('Message sent: %s', info.messageId);
}

mail().catch(console.error);

module.exports = app;
