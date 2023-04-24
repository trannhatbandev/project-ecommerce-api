const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  record_type: {
    type: String,
    required: [true, "Please enter record type!"],
  },
  record_id: {
    type: String,
    required: [true, "Please enter record id"],
  },
  data: {
    type: String,
    required: [true, "Please enter data"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  }
});


module.exports = mongoose.model("Log", logSchema);