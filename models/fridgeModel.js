const mongoose = require(`mongoose`)
const { Schema } = mongoose.Schema
const db = require(`../db`)

const Fridge = new Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        dimensions: { type: String, required: true },
        capacity: { type: String, required: true },
        hasFreezer: { type: Boolean, required: true },
        numberOfDoors: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true}

    }
    
)

module.exports = Fridge