const { Schema, model } = require("mongoose");
const cart = require('./cart');

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: [cart]
})

const user = model('user', userSchema);

module.exports = user