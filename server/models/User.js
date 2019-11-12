const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password:{ type: Number, required: true },
    height:{ type: Number, required: true },
    weight:{ type: Number, required: true },
    age:{ type: Number, required: true },
    gender:{ type: String, required: true },
    BMR:{ type: Number, required: true },
    menu:[{type: Schema.Types.ObjectId, ref: 'Menu'}]
})

const User = mongoose.model("User", userSchema)
module.exports = User