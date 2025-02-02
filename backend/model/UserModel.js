const { model } = require('mongoose');

const { UserSchema } = require('../schemas/UserSchema');

const User = new model('user', UserSchema);

module.exports = User;
