const mongoose  = require("mongoose");
const bcrypt = require("bcryptjs");
const taskSchema = new mongoose.Schema({
    task:{type:String,required:true},
    date:{type:String,required:true},
    status:{type:String,required:true},
    priority:{type:String,required:true},
    userId:{type:String,required:true},
},
{timestamps:true}
)


module.exports = mongoose.model("task",taskSchema);