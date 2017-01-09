'use strict'
let Model = require('../models/init')

exports.create_account = function (username, email, callback){
  let account = new Model.account ({ username: username, email:email });
  account.save(function (err) {
    if (err) return handleError(err);
    // saved!
  })
};

exports.login_check = function (username, email){
  let query = Model.account.find({username: username});
  let promise = query.exec();
  return promise;
};
