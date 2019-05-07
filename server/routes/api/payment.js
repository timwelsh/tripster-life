const config = require('../../config/config');

module.exports = (app) => {
    // Returns the fields needed
    app.post('/api/stripe/account/get', function (req, res, next) {
        const stripeAccountID = '';

        if (!stripeAccountID) {
            res.send({
                success: false,
                message: 'Missing Stripe Account.',
                setupBegan: false,
            });
        } else {
            res.send({
                success: true,
                message: 'Stripe account',
                setupBegan: true,
                error: null
            })
        }
    })
}