const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
const db = require(`../db`)

const applianceSchema = new Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        type: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports =  applianceSchema 