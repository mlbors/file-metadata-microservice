/**
 * freeCodeCamp - Back End Development Certification - API Projects
 * Services - Files Manager
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.10.10
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const fs = require('fs')
const path = require('path')

/************************************************************/
/************************************************************/

/************************/
/***** CLEAR FOLDER *****/
/************************/

exports.clearFolder = () => {
  const directory = path.join(__dirname, '../uploads/')
  if (fs.existsSync(directory))
    fs.readdirSync(directory).forEach(file => {
      const currentPath = directory + '/' + file
      fs.unlinkSync(currentPath)
  })
}