'use strict'
let supertest = require('supertest')
let should = require('should')
let app = require('../app')


describe('API root route', function () {
  it('should return status code 200', function (done) {
    supertest(app)
      .get('/api/v1/')
      .expect(200, 'Hello World', done)
  })
})

// TODO: save user data to fs system
describe('save user data to fs system', function () {
  it('should return status code 200', function (done) {
    supertest(app)
      .post('/api/v1/register')
      .field('username', 'robert')
      .field('email', 'robert@mail.com')
      .expect(200, done)
  })
  it('it should reture status code 501 for duplicated account', function(done){
    supertest(app)
      .post('/api/v1/register')
      .field('username', 'robert')
      .field('email', 'robert@mail.com')
      .expect(501,done)
  })
})
