const { Schema, model } = require('mongoose');

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    remainingstock: { type: Number, required: true},
    favoriteproduct: { type: String, required: false}
  },
);

const product = model('product', ProductSchema);

module.exports = product