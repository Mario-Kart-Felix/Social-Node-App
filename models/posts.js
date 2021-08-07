var mongoose = require("mongoose");

var Schema = mongoose.Schema;



var postSchema = new Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    date: {type: String, required: true},
    likes: {type: Array},
    comments: {type: Array},
    userId: {type: String, required: true}

});


module.exports = mongoose.model("Post", postSchema);