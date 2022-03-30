const User = require('../../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../config');
const { UserInputError } = require('apollo-server-errors');
const { validateRegisterInput, validateLoginInput } = require('./util/validators.js')

function generateToken(user){
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            name: user.name,
        },
        SECRET_KEY,
        { expiresIn: '1h' },
    )
}

module.exports = {
    async login({ email, password }){
    const { errors, valid } = validateLoginInput(email, password);

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const emailAddress = await User.findOne({ email });
      if (!emailAddress) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }

      const match = await bcrypt.compare(password, emailAddress.password);
      if (!match) {
        errors.general = 'Wrong credentials';
        throw new UserInputError('Wrong credentials', { errors });
      }

      const token = generateToken(emailAddress);
      return {
        ...emailAddress._doc,
        id: emailAddress._id,
        token
      };
    },
    async register(
        {
            registerInput: { name, email, password, confirmPassword }
        },
    ) {

        const {valid, errors} = validateRegisterInput(
            name, email, password, confirmPassword
        );
        if(!valid){
            throw new UserInputError('Errors', {errors});
        }

        const emailAddress = await User.findOne({email});
        if(emailAddress){
            throw new UserInputError('Email exists in database', {
                errors: {
                    emailAddress: 'This email is already linked to an account.'
                }
            })
        }

        password = await bcrypt.hash(password, 12);
        const newUser = new User({
            name,
            email,
            password,
            createdAt: new Date().toISOString()
        });

        const res = await newUser.save();
        const token = generateToken(res);

        return{
            ...res._doc,
            id: res._id,
            token
        };
    }
};