const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Student  schema
const studentSchema = new Schema({
  name: String,
  fatherName: String,
  motherName: String,
  email:String,
  
});



// Define models
const Student = mongoose.model('studentdetails', studentSchema);


module.exports = { Student};
