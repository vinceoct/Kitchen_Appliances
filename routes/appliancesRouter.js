const Router = require('express').Router()
const controllers = require('../controllers/appliancesController')

Router.get('/', controllers.getAllAppliances)

module.exports = Router