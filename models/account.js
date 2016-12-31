'use strict'
let mongoose = require('mongoose')

let schema = new mongoose.Schema({ username: 'string', email: 'string' });
let Account = mongoose.model('Account', schema);

module.exports = Account;
