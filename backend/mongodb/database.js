const mongoose = require("mongoose");

const mongodb_url = "mongodb+srv://raj:afM5Xbls4vstpkeM@cluster0.tsplknf.mongodb.net/?retryWrites=true&w=majority";

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