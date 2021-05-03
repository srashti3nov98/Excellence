const mongoose = require('mongoose')

const test3Schema = new mongoose.Schema({
    roundone: {
        type: String,
        required: true,
    },
    testscore: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
})
module.exports = mongoose.model('Test3', test3Schema)