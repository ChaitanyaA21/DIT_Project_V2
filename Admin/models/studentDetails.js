const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Student  schema
const studentSchema = new Schema({
  rollNo:String,
  name: String,
  fatherName: String,
  motherName: String,
  email:String,
  mobileNo:Number,
  dob:Date,
  branch:String,
  address:String,
  nationality:String,
  is_reRegistered:Boolean
});



// Define models
const Student = mongoose.model('studentdetails', studentSchema);


module.exports = Student;
