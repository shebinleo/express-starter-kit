/**
 * Created by Shebin Leo Vincent on 30/8/17.
 */
const logger = require('morgan')
logger.silent = true

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../src/bin/www')
const should = chai.should() // eslint-disable-line no-unused-vars
const expect = chai.expect

chai.use(chaiHttp)

//  Our parent block
describe('Routes', () => {
  /*
    * Test the /GET healthz route
    */
  describe('GET /', () => {
    it('it should GET home response', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.eql(null)
          res.should.have.status(200)
          res.text.should.be.a('string')
          res.text.should.be.equal('OK')
          done()
        })
    })
  })
})
