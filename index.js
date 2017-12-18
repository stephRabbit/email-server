const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User');
require('./services/passort');

mongoose.connect(keys.mongoURI);

const app = express();

// Enable and connect passort to use cookies
app.use(
  cookieSession({
    // Days|Hours|Minutes|Seconds|Milliseconds - 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// Dev/Prod ports
const PORT = process.env.PORT || 5000;
app.listen(PORT);