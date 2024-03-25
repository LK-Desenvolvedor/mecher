const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
    
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  age: Number,
  weight: Number,
  sex: {
    type: String,
    enum: ["male", "femeale", "other"]
  }

});

module.exports = mongoose.model("users", usersSchema);