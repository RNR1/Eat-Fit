const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
    name: { type: String, required: true },
    meal: String,
    servingUnit: { type: String, required: true },
    cal: { type: Number, required: true },
    fat:{ type: Number, required: true },
    prot:{ type: Number, required: true },
    sugars:{ type: Number, required: true },
    img:{ type: String },
    consumed: Boolean
})

const Food = mongoose.model('Food', foodSchema)
module.exports = {Food, foodSchema}