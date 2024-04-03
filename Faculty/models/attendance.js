// model.js
const mongoose = require('mongoose');

// Define schema
const attendanceSchema = new mongoose.Schema({
    rollno: { type: String, required: true },
    presentDates: [{ type: Date }],
    percentage: { type: Number, default: 0 }
});

// Create model
const AttendanceModel = mongoose.model('Attendance', attendanceSchema);

module.exports = AttendanceModel;
