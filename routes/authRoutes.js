const passport = require('passport');

module.exports = app => {
  // Authenticate client for the first time
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // Turn url code into profile
  app.get('/auth/google/callback', passport.authenticate('google'));
};
