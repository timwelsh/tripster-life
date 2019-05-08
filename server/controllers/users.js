const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../config/config');

signToken = user => {
    return JWT.sign({
        iss: 'TripsterLife',  // iss is short for issuer
        sub: user._id, 
        iat: new Date().getTime(), // Current time
        exp: new Date().setDate(new Date().getDate() + 1) // Current time plus 1 day ahead
    }, JWT_SECRET);
}

module.exports = {
    signUp: async (req, res, next) => {
        const { email, password } = req.value.body;

        // Check if user with same email
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(403).json({ error: 'Email is already in use'});
        }

        // Create a new user
        const newUser = new User({ email, password });
        await newUser.save();

        // Generate token
        const token = signToken(newUser);
        
        // Respond with token
        res.status(200).json({ token })

    },

    signIn: async (req, res, next) => {
        
    },

    secret: async (req, res, next) => {

    }
}