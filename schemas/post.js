const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let post = new Schema({
    title: {
        type: String,
        required: true
    },
    logo: {
        type: String,
    },
    topic: {
        type: String,
        required: true
    },
    num: {
        type: Number,
        required: true
    },
    feeds : [Schema.Types.Mixed]
})

module.exports = mongoose.model("posts",post);