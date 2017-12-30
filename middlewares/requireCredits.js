module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Sorry, you are out of credits!' });
  }

  // Middleware is complete, passes it on to the
  // "next" middleware in the chain
  next();
};