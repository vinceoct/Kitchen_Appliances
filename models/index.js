const mongoose = require('mongoose')
const fridgeSchema = require('./fridgeModel.js')
const airfryerSchema = require('./airfryerModel.js')


const Fridge = mongoose.model('Fridge', fridgeSchema)
const AirFryer= mongoose.model('AirFryer', airfryerSchema)


module.exports = {
    Fridge,
    AirFryer
}