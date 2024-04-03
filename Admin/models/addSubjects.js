const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Student  schema
const subjectSchema = new Schema({
    branch: String,
    semester:Number,
    subjectName:String,
    subjectCode:String
});
// Define models
const Subjects = mongoose.model('subjectdetails', subjectSchema);


module.exports = Subjects;
