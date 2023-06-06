const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
const db = require(`../db`)

const Appliances = new Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        type: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true }

    }
    
)

module.exports = Appliances