const passport = require('passport');

module.exports = app => {
  // Authenticate client for the first time
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // Turn url code into profile
  // After user comes back auth flow passport.authenicate() middleware
  // pass to handler and redirects to appropriate location
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys')
    }
  );

  // Logout attached by passport kills id in cookie
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Get request to app
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
