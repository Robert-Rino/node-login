'use strict'
let express = require('express');
let bodyParser = require('body-parser')
let jsonfile = require('jsonfile')
let mongoose = require('mongoose')

let Model = require('./models/init')

let app = express();

mongoose.connect('mongodb://localhost/');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1/', function (req, res) {
  res.send('Hello World')
})

app.post('/api/v1/register', function (req, res) {
  console.log(req.body)
  let account = new Model.account({ username: req.body.username, email:req.body.email });
  account.save(function (err) {
    if (err) return handleError(err);
    // saved!
  })
  res.sendStatus(200)
})

app.listen(3000)
module.exports = app;
