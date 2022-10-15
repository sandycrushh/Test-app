const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      emailId: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
      },
      
     
    },
    { versionKey: false, timestamps: true }
  );
  
  const userModel = mongoose.model("UserDetail", userSchema);
  module.exports = { userModel };