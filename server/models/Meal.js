const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mealSchema = new Schema({
    foods: [{type: Schema.Types.ObjectId, ref: 'Food'}]
})

const Meal = mongoose.model("Meal", mealSchema)
module.exports = Meal