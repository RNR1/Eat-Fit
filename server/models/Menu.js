const mongoose = require('mongoose')
const mealSchema = require('./Meal')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
    dayInWeek: { type: String, required: true },
    breakfast: mealSchema,
    lunch: mealSchema,
    snack: mealSchema,
    dinner: mealSchema,
    totals: {
        cal: Number,
        fat: Number,
        sugars: Number,
        protein: Number
    }
})

const Menu = mongoose.model("Menu", MenuSchema)
module.exports = Menu