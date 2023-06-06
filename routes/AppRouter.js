const Router = require('express').Router()

const AirFryerRouter = require('./airfryerRouter')
const FridgeRouter = require('./fridgeRouter')

Router.use('/airfryers', AirFryerRouter )
Router.use('/refridgerators', FridgeRouter) 