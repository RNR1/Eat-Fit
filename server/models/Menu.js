const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
    dayInWeek: { type: String, required: true },
    breakfast: {type: Schema.Types.ObjectId, ref: 'Meal'},
    lunch: {type: Schema.Types.ObjectId, ref: 'Meal'},
    snack:{type: Schema.Types.ObjectId, ref: 'Meal'},
    dinner:{type: Schema.Types.ObjectId, ref: 'Meal'},
    totals: {
        cal: Number,
        fat: Number,
        sugars: Number,
        protein: Number
    }
})

const Menu = mongoose.model("menu", MenuSchema)
module.exports = Menu