const { Schema, model} = require("mongoose");

const User = new Schema({
  name: { type: String, required: true},
  email : {type:String, require: true},
  password : {type:String, require : true},
  createdAt: { type: Date, default: Date.now },
});

const UserModel = model("Users", User)

module.exports = UserModel