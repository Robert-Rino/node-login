'use strict'
let express = require('express');
let bodyParser = require('body-parser')
let jsonfile = require('jsonfile')
let mongoose = require('mongoose')

let Model = require('./models/init')
let account_services = require('./services/account_services')

let app = express();
app.set('view engine', 'pug')

mongoose.connect('mongodb://localhost/');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1/', function (req, res) {
  res.send('Hello World')
})

app.post('/api/v1/register', function (req, res) {
  let apply_account = account_services.register_check(req.body.username, req.body.email);
  apply_account.then(function(doc){
    if( doc.length >= 1 ) {
     res.status(400).send('user already exist ! ');
   }
   else {
     let new_account = account_services.create_account(req.body.username, req.body.email);
     new_account.then(function(doc){
       res.sendStatus(200);
     });
   }
  });
})

// TODO: validate user account
// app.post('/api/v1/validate', function(req,res) {
// });

// TODO: let user log in
app.post('/api/v1/login', function (req, res) {
  console.log('login route');
})


app.get('/app/v1/test_tamplate', function(req, res) {
  res.render('template_test', { title: 'Hey', message: 'Hello there !' })
})


app.listen(3000)
module.exports = app;
