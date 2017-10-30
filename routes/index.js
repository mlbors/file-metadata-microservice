/**
 * freeCodeCamp - Back End Development Certification - API Projects
 * Routes - Index
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
const multer = require('multer')
const router = express.Router()

const fileManager = require('../services/files-manager')

/************************************************************/
/************************************************************/

/******************/
/***** UPLOAD *****/
/******************/

const upload = multer({dest: 'uploads/'})

/************************************************************/
/************************************************************/

/******************/
/***** ROUTES *****/
/******************/

/*****/
/***** HOME *****/
/*****/

router.get('/', (req, res) => {
  res.sendFile('/public/index.html')
})

/************************************************************/
/************************************************************/

/*****/
/***** UPLOAD *****/
/*****/

router.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.json({
      name: req.file.originalname,
      size: req.file.size,
    })

    fileManager.clearFolder()
    
  } else {
    res.json({error: 'No file to upload.'})
  }
})

/************************************************************/
/************************************************************/

/******************/
/***** EXPORT *****/
/******************/

module.exports = router