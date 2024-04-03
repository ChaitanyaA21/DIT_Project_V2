
// const markAttendance=(req,res)=>{
//     // res.send(`The attendance for the date:${req.body.date} === ${req.body.attendance}`)

// }
// // controller.js
const AttendanceModel = require('../models/attendance');

// Controller function to mark attendance
const markAttendance = async (req, res) => {
    try {
        const { rollnos, date } = req.body;

        // Loop through the array of roll numbers
        for (const rollno of rollnos) {
            // Find attendance record for the roll number
            let attendance = await AttendanceModel.findOne({ rollno });

            // If attendance record doesn't exist, create a new one
            if (!attendance) {
                attendance = new AttendanceModel({
                    rollno,
                    presentDates: [new Date(date)]
                });
            } else {
                // If attendance record exists, update it
                if (!attendance.presentDates.includes(date)) {
                    attendance.presentDates.push(new Date(date));
                }
            }

            // Calculate percentage
            const totalDays = attendance.presentDates.length;
            const totalClasses = 20; // Assuming total classes as 20
            const percentage = (totalDays / totalClasses) * 100;

            // Update percentage in attendance record
            attendance.percentage = percentage;

            // Save or update attendance record
            await attendance.save();
        }

        res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
        console.error('Error marking attendance:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// module.exports = { markAttendance };



module.exports = markAttendance