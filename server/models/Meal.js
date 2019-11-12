const mongoose = require('mongoose')
const foodSchema = require('./Food')
const Schema = mongoose.Schema

const mealSchema = new Schema({
    foods: [ foodSchema]
})

const Meal = mongoose.model("Meal", mealSchema)
module.exports = Meal