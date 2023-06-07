const Appliance  = require('../models')
const db = require('../db')

const getAllAppliances = async (req, res) => {
    try {
        const appliances = await Appliance.find()
        return res.status(200).json({ appliances })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllAppliances
}