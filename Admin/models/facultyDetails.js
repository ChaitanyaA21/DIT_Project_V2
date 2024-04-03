const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Student  schema
const facultySchema = new Schema({
  facultyId:String,
  name: String,
  email:String,
  mobileNo:Number,
  experience:Number,
  designation:String
});



// Define models
const Faculty = mongoose.model('facultydetails', facultySchema);


module.exports = Faculty;
