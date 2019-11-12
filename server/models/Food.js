const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
    name: { type: String, required: true },
    servingUnit: { type: String, required: true },
    cal: { type: Number, required: true },
    fat:{ type: Number, required: true },
    prot:{ type: Number, required: true },
    sugars:{ type: Number, required: true },
    img:{ type: String, required: true },
    consumed: {type: Boolean, required: true}
})

const Food = mongoose.model('Food', foodSchema)
module.exports = {Food, foodSchema}