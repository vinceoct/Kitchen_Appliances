const mongoose = require(`mongoose`)
const { Schema } = mongoose.Schema
const db = require(`../db`)

const AirFryer = new Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        dimensions: { type: String, required: true },
        capacity: { type: String, required: true },
        material: { type: String, required: true },   
        price: { type: String, required: true},
        image: { type: String, required: true }

    }
    
)

module.exports = AirFryer