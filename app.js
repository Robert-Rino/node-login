'use strict'
let express = require('express');
let bodyParser = require('body-parser')
let jsonfile = require('jsonfile')
let mongoose = require('mongoose')

let Model = require('./models/init')
let account_services = require('./services/account_services')

let app = express();

mongoose.connect('mongodb://localhost/');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1/', function (req, res) {
  res.send('Hello World')
})

app.post('/api/v1/register', function (req, res) {
  // console.log(req.body)
  // let account = new Model.account({ username: req.body.username, email:req.body.email });
  // account.save(function (err) {
  //   if (err) return handleError(err);
  //   // saved!
  // })
  let new_account = account_services.create_account(req.body.username, req.body.email);
  console.log(new_account);
  if (new_account instanceof Error){
    // console.log(new_account);
    res.sendStatus(400);
  }
  else {
      // console.log(new_account);
      res.sendStatus(200);
  }
})

// TODO: validate user account
// app.post('/api/v1/validate', function(req,res) {
// });

// TODO: let user log in
app.post('/api/v1/login', function (req, res) {
  let login_account = account_services.login_check(req.body.username, req.body.email);
  login_account.then(function(doc){
    if( doc.length >= 0 ) {
     res.status(401).send('user already exist ! ');
   }
   else res.status(200);
  });
})



app.listen(3000)
module.exports = app;
