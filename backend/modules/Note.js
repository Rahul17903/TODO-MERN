const mongoose = require('mongoose')
const {Schema, model} = mongoose


const Note = new Schema({
    title:{type:String, required: true},
    content :{type: String,  required: true},
    user : {type :mongoose.Schema.Types.ObjectId, ref:'User', required:true}
},{timestamps:true})

module.exports = model("Notes",Note)