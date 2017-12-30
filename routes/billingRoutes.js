const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecertKey);
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  // Check authenication with requireLogin middleware
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id, // obtained with Stripe.js
      description: "$5 for 5 credits"
    });

    // Passport setups up current user
    // Add credits and save user model
    req.user.credits += 5;
    const user = await req.user.save(); 

    // Respond to request with updated user
    res.send(user);
  });
};