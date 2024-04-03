const Attendance = require('../../Faculty/models/attendance')
const checkAttendance =async(req,res)=>{
    // res.send("It will give the percentage of attendance for the student in enrolled subjects" )
    try {
        const { rollno } = req.body;

        // Find internal marks by roll number
        const internalMarks = await Attendance.findOne({ rollno });

        // Check if internal marks exist for the provided roll number
        if (!internalMarks) {
            return res.status(404).json({ message: 'Internal marks not found for the provided roll number' });
        }

        res.status(200).json({ internalMarks });
    } catch (error) {
        console.error('Error checking internal marks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports =checkAttendance