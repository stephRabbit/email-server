const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passort');

mongoose.connect(keys.mongoURI);

const app = express();

// Middleware

// Parse body of requests (post, put, or patch) and assign
// it to the req.body of the incoming request object
app.use(bodyParser.json());

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
require('./routes/billingRoutes')(app);

// handle routes defined by front end
if (process.env.NODE_ENV === 'production') {
  // serve production assets main.js or main.css
  app.use(express.static('client/build'));

  // serve index.html file if it can not recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Dev/Prod ports
const PORT = process.env.PORT || 5000;
app.listen(PORT);