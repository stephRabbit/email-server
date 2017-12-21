const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // Err object - null and user.id from DB not profile.id
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

// Google oauth strategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecert,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    // Model instance to create decrete user record
    const existingUser = await User.findOne({ googleId: profile.id });

    // Already exists - null for err object and existingUser
    if (existingUser) return done(null, existingUser);

    // Create new user with this ID
    const user = await new User({ googleId: profile.id }).save();
    done(null, user);
  }
));