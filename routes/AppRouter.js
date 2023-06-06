const Router = require('express').Router()

const ApplianceRouter = require('./appliancesRouter')


Router.use('/appliances', ApplianceRouter )


module.exports = Router