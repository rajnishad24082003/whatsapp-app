const mongoose =require("mongoose");

const messageshema = mongoose.Schema({
    message: String,
    name:String,
    time:String,
})

module.exports = mongoose.model("messagecontent",messageshema);