const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required: [true, "Please enter the title of your todo"]
    },
    todoDate: Date
})

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;