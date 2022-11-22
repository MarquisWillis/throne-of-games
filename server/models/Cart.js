const { Schema } = require('mongoose');

const cartSchema = new Schema({
    gameId: {
        type: Schema.Types.ObjectId
    },
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

module.exports = cartSchema;