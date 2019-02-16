/**
 * Created by Shebin Leo Vincent on 2/9/16.
 */
const debug = require('debug')('express-starter-kit:routes')
const express = require('express')

const router = express.Router()
router.get('/', (req, res) => {
  debug('Hello World')
  res.send('OK')
})

module.exports = router
