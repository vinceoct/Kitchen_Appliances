const Router = require('express').Router()
const controllers = require('../controllers/appliancesController')

Router.get('/', controllers.getAllAppliances)
Router.get('/type/:value', controllers.getAppliancesByType)
Router.get('/:id', controllers.getApplianceById)

Router.post('/', controllers.createAppliance)
Router.put('/:id', controllers.updateAppliance)
Router.delete('/:id', controllers.deleteAppliance)


module.exports = Router