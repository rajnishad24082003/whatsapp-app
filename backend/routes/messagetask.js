const mongoose =require("mongoose");
let messagecontent = require("../dataSchema/messageschema");

const getalltask = async (req,res)=>{
const data = await messagecontent.find({});
res.send(data);
}

const createtask = async (req,res)=>{
    try{
        console.log(req.body)
messagecontent.create({
    message:req.body.message,
    name:req.body.name,
    time:req.body.time
});
    }
    catch (err){
        console.log(err);
    }
res.status(201).redirect("http://localhost:3001")
}

module.exports = {getalltask,createtask};