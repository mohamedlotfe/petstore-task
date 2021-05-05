const mongoose = require('mongoose');
const Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

const productSchema = new Schema({
    name: String,
    company_id: { type: ObjectId, default: null },
    price: Number
});

module.exports = mongoose.model('product', productSchema, 'product');