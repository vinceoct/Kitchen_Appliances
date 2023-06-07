const Router = require('express').Router()
const controllers = require('../controllers/appliancesController')

Router.get('/', controllers.getAllAppliances)
Router.get('/:id', controllers.getApplianceById)

module.exports = Router