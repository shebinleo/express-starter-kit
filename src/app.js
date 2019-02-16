/**
 * Created by Shebin Leo Vincent on 2/9/16.
 */
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const routes = require('./routes')

const app = express()

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'))
}
app.use(helmet())
app.use(cors({ maxAge: 60 * 60 * 24 }))
app.use(bodyParser.json({ limit: '50mb' }))

app.use('/', routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
      .json({
        message: err.message,
        error: err
      })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
    .json({
      message: err.message,
      error: {}
    })
})

// handle a rejected promise
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)
  // Recommended: send the information to whatever crash reporting service you use
})
// handle a rejected promise
process.on('uncaughtException', (reason) => {
  console.log('Uncaught Exception at:', reason.stack || reason)
  // Recommended: send the information to whatever crash reporting service you use
})

module.exports = app
