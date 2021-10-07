const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    age: { type: Nubmer, required: true },
    city: { type: String, required: true },
    gender: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Student = new mongoose.model("student", studentSchema);

module.exports = User;
