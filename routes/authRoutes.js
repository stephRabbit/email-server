const passport = require('passport');

module.exports = app => {
  // Authenticate client for the first time
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // Turn url code into profile
  app.get('/auth/google/callback', passport.authenticate('google'));

  // Logout attached by passport kills id in cookie
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // Get request to app
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
