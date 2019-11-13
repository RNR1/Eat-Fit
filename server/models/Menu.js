const mongoose = require('mongoose')
const mealSchema = require('./Meal').mealSchema
const Schema = mongoose.Schema

const MenuSchema = new Schema({
    dayInWeek: { type: String, required: true },
    breakfast: [],
    lunch: [],
    snack: [],
    dinner: [],
    nutrients: {}
})

const Menu = mongoose.model('Menu', MenuSchema)
module.exports = {Menu, MenuSchema}