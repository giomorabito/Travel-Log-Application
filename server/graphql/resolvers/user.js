const User = require('../../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// MAKE SURE TO PUT THIS IN A SECRET FILE
const SECRET_KEY = 'oPXA96op!u%,`:}eT^.!|hvXohA~fa';

module.exports = {
    Mutation: {
        async register(
            _,
            {
                registerInput: { username, email, password, confirmPassword}
            },
            context,
            info
        ) {
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString
            });

            const res = await newUser.save();

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, SECRET_KEY, { expiresIn: '1h'});

            return{
                ...res._doc,
                id: res._id,
                token
            };
        }
    }
};