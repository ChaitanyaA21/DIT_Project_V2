const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the faculty  schema
const FacultySchema = new Schema({
  facultyId:String,
  password: { type: String, default: "Faculty123"},
});



// Define models
const FacultyLogin = mongoose.model('facultyLogins', FacultySchema);


module.exports = FacultyLogin;