const StudentModel =require('../models/studentDetails')
const StudentLogin=require('../models/studentLogins')

const addStudents = async (req, res) => {
    try {
        // Extract data from request body
        const { 
            rollNo,
            name,
            fatherName,
            motherName,
            email,
            mobileNo,
            dob,
            branch,
            address,
            nationality,
            is_reRegistered

        } = req.body;

        // Create new document instance
        const newData = new StudentModel({
            rollNo,
            name,
            fatherName,
            motherName,
            email,
            mobileNo,
            dob,
            branch,
            address,
            nationality,
            is_reRegistered
        });
        console.log(newData);
        const loginData=new StudentLogin({
            rollNo,
        })
        // Save document to database
        await newData.save();
        await loginData.save();

        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const viewStudents = async (req, res) => {
    try {
        const { branch } = req.body; // Assuming you are passing branch in the request body

        // Find students by branch
        const students = await StudentModel.find({ branch });

        if (students.length === 0) {
            return res.status(404).json({ message: `No students found in branch ${branch}` });
        }

        res.status(200).json({ students });
    } catch (error) {
        console.error('Error viewing students:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteStudents = async (req, res) => {
    try {
        const { rollNo } = req.body; // Assuming you are passing rollNo in the request body

        // Check if the student exists by rollNo instead of _id
        const student = await StudentModel.findOne({ rollNo });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Delete the student login details first
        await StudentLogin.deleteOne({ rollNo });

        // Delete the student
        await student.deleteOne({ rollNo });

        res.status(200).json({ message: `Student with Roll No ${rollNo} deleted successfully` });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};




module.exports={addStudents,viewStudents,deleteStudents}