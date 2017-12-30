module.exports = (req, res, next) => {
  if (! req.user) {
    return res.status(401).send({ error: 'You must be logged in!' });
  }

  // Middleware is complete, passes it on to the
  // "next" middleware in the chain
  next();
};