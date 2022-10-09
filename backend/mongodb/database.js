const mongoose = require("mongoose");

const mongodb_url = "our mongodb uri";

const connectDB = async () => {
    try{
    const conn = await mongoose.connect(mongodb_url);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(err)
    {
        console.log(err);
    }
};


module.exports = connectDB;
