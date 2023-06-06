const mongoose = require('mongoose')
const applianceSchema = require('./appliancesModel')

const Appliance = mongoose.model('Appliance', applianceSchema)


module.exports = Appliance