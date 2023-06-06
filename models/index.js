const mongoose = require('mongoose')
const applianceSchema = require('./appliancesModel.js')

const Appliances= mongoose.model('Appliance', applianceSchema)


module.exports = {
    Appliances,
}