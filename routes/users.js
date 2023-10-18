const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/hrrr");

const userSchema = mongoose.Schema({
  image:String,
  carname:String,
  price:Number,
  varient:String,
  fule:String,
  color:String,
  profilelike:{
    type:String,
    default: 0
  }
  
});
module.exports = mongoose.model("user",userSchema);