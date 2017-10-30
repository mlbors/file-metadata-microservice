/**
 * freeCodeCamp - Back End Development Certification - API Projects
 * File Metadata Microservice
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.10.30
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const express = require('express')
const path = require('path')

const index = require('./routes/index')

/************************************************************/
/************************************************************/

/********************/
/***** SETTINGS *****/
/********************/

const hostname = '0.0.0.0'
const port = process.env.PORT || 4000

/************************************************************/
/************************************************************/

/***************/
/***** APP *****/
/***************/

const app = express()

/************************************************************/
/************************************************************/

/******************/
/***** ROUTES *****/
/******************/

app.use(express.static(path.join(__dirname, '/public')))

app.use('/', index)

app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

/************************************************************/
/************************************************************/

/******************/
/***** LISTEN *****/
/******************/

app.listen(port, hostname, () => {
  console.log('Server running at http://${' + hostname + '}:${' + port + '}/')
})