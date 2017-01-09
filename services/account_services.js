'use strict'
let Model = require('../models/init')

exports.create_account = function (username, email, callback){
  let account = new Model.account ({ username: username, email:email });
  let save_account_promise = account.save();
  return save_account_promise;
};

exports.register_check = function (username, email){
  let query = Model.account.find({username: username});
  let loin_check_promise = query.exec();
  return loin_check_promise;
};
