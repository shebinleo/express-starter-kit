/**
 * Created by Shebin Leo Vincent on 29/8/16.
 */
const request = require('request')

const baseRequest = request.defaults({
  rejectUnauthorized: false,
  followRedirect: false,
  timeout: 5000
})

module.exports = baseRequest
