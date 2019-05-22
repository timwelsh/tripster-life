const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

require('dotenv').config();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://localhost/TripsterLifeTEST', { useNewUrlParser: true });
} else {
  mongoose.connect('mongodb://localhost/TripsterLife', { useNewUrlParser: true });
}

const app = express();
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Middlewares moved morgan into if for clear tests
if (!process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'));
}

app.use(express.json());

// Static
app.use(express.static(path.join(__dirname, "../client/build/")));

// Routes
app.use('/users', require('./routes/users'));
app.use('/mail', require('./routes/mailer'));


app.use("*", function(req, res) {
  console.log(path.join(__dirname, "../client/build/index.html"));
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = app;
