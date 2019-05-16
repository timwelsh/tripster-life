const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
// const nodemailer = require('nodemailer');


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
  console.log(path.join(__dirname, "../client/build/index.html"))
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})
// Nodemailer
// async function mail() {

//   // Creates a reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: '',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'ragsdale.jar@gmail.com',
//       pass: 'test1234',
//     }
//   });

//   // Send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: ' "Tripster Life" <admin@tripster.life> ', //sender address
//     to: 'admin@tripster.life, ragsdale.jar@gmail.com', // receiver's address
//     subject: 'Hello', // subject line
//     text: 'Hello, world!', // plain text body
//     html: '<p>Hello, world!</p>' // html body
//   });

//   console.log('Message sent: %s', info.messageId);
// }

// mail().catch(console.error);

module.exports = app;
