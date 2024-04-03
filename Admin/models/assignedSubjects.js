const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Student  schema
const assignSubSchema = new Schema({
  facultyId:String,
  branch: String,
  semester:Number,
  subjectCode:String
});



// Define models
const AssignSubjects = mongoose.model('assignSubjects', assignSubSchema);


module.exports = AssignSubjects;
