// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_51HrCWKJ241YA5d2XWDwhWR2iX1hwcnPBtGOAiW9h89GbIKcePGjxoRYiODRNdeDMPuGVaZI50c91PpsjgGBXUOzm00wcWG20fP');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: 'usd',
  // Verify your integration in this guide by including this parameter
  metadata: {integration_check: 'accept_a_payment'},
});
