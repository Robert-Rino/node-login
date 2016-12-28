'use strict'
let express = require('express');
let bodyParser = require('body-parser');
let jsonfile = require('jsonfile')

// let fileIo = require('./services/file_io');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1/', function (req, res) {
  res.send('Hello World')
})

app.post('/api/v1/register', function (req, res) {
  console.log(req.body);
  let file = 'data.json'
  let obj = { [req.body.username]: req.body.email}
  jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
  })
  res.sendStatus(200)
})

app.listen(3000)
module.exports = app;
