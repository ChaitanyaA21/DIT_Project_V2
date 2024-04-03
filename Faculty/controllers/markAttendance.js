const AttendanceModel = require('../models/attendance');

const markAttendance = async (req, res) => {
    try {
        const { rollnos, date } = req.body;
        for (const rollno of rollnos) {
            let attendance = await AttendanceModel.findOne({ rollno });
            if (!attendance) {
                attendance = new AttendanceModel({
                    rollno,
                    presentDates: [new Date(date)]
                });
            } else {
                if (!attendance.presentDates.includes(date)) {
                    attendance.presentDates.push(new Date(date));
                }
            }
            const totalDays = attendance.presentDates.length;
            const totalClasses = 20; // Assume total classes as 20
            const percentage = (totalDays / totalClasses) * 100;
            attendance.percentage = percentage;
            await attendance.save();
        }
        res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
        console.error('Error marking attendance:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
module.exports = markAttendance