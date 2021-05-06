const mongoose = require('mongoose');
const Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;
const bidSchema = new Schema({ username: String, amount: Number });

const petSchema = new Schema({
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    price: { type: Number, default: 0 },
    age: { type: Number, default: 0 },
    status: { type: String, default: "available" },
    bids: { type: [bidSchema], default: [] }
});

module.exports = mongoose.model('pet', petSchema, 'pet');