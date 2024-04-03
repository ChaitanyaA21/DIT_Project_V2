const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Student  schema
const studentSchema = new Schema({
  rollNo:String,
  password: { type: String, default: "Student123"},
});



// Define models
const StudentLogin = mongoose.model('studentLogins', studentSchema);


module.exports = StudentLogin;