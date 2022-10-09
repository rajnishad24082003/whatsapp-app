const express = require("express");
const connectDB = require("./mongodb/database");
const router = require("./routes/router");
const cors = require("cors");
let app =express();
connectDB();
const Pusher = require("pusher");
const { default: mongoose } = require("mongoose");

const pusher = new Pusher({
  appId: "1473296",
  key: "10b0bf381a514eefa2bf",
  secret: "510b40d8759625395d5f",
  cluster: "ap2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});
const db = mongoose.connection;
db.once("open",() => {
    console.log("db connected");
     const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();
    changeStream.on("change",(change)=>{
        console.log(change);
        if(change.operationType == "insert")
        {
            const messageDetails = change.fullDocument;
        pusher.trigger("message","insert",{
            name:messageDetails.name,
            message:messageDetails.message,
            time:messageDetails.time
        })}
        else
        {
            console.log("error on pusher")
        }
    })
})

//middleware
app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("working");
})

app.use("/api/v1/task",router);


app.listen(3000,()=>{
    console.log("listing on port 3000");
})