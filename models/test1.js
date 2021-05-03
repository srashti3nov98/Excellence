const mongoose = require('mongoose')

const test1Schema = new mongoose.Schema({
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
    }
})
module.exports = mongoose.model('Test1', test1Schema)
