const FacultyModel =require('../models/facultyDetails')
const FacultyLogin =require('../models/facultyLogins')
const AssignSubject =require('../models/assignedSubjects')


// const addFaculty = (req,res)=>{
//     // res.json(`this is the data submitted ${req.body.Name}`)
// }

const addFaculty = async (req, res) => {
    try {
        // Extract data from request body
        const { 
            facultyId,
            name,
            email,
            mobileNo,
            experience,
            designation
        } = req.body;

        // Create new document instance
        const newData = new FacultyModel({
            facultyId,
            name,
            email,
            mobileNo,
            experience,
            designation
        });

        console.log(newData);
        const loginData=new FacultyLogin({
            facultyId,
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
// =(req,res)=>{}
const viewFaculty =async (req,res)=>{
    // res.json(`The total Staff details are retrieved from DB`);
    try {

        // Find faculty by branch
        const faculty = await FacultyModel.find();

        if (faculty.length === 0) {
            return res.status(404).json({ message: `No Faculty found` });
        }

        res.status(200).json({ faculty });
    } catch (error) {
        console.error('Error viewing faculty details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
const deleteFaculty =async (req,res)=>{
    // res.json(`this faculty data is removed from DB  ${req.body.id}`)
    try {
        const { id } = req.body;

        // Check if the student exists by rollNo instead of _id
        // console.log(id);
        const faculty = await FacultyModel.findOne({ facultyId:id });
        if (!faculty) {
            return res.status(404).json({ message: "Faculty not found" });
        }

        // Delete the student login details first
        await FacultyLogin.deleteOne({ id });

        // Delete the student
        await faculty.deleteOne({ id });

        res.status(200).json({ message: `Faculty with id: ${id} deleted successfully` });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const assignSubject = async(req,res)=>{
    // res.json(`This subject ${req.body.subject} is assigned to the faculty with id ${req.body.id}`)
    try {
        const { facultyId, branch, semester, subjectCode } = req.body;

        // Create a new assignment document
        const newAssignment = new AssignSubject({
            facultyId,
            branch,
            semester,
            subjectCode
        });

        // Save the assignment to the database
        await newAssignment.save();

        res.status(201).json({ message: 'Subject assigned to faculty successfully' });
    } catch (error) {
        console.error('Error assigning subject to faculty:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const viewAssignedSubjects =async (req,res)=>{
    // res.json(`Assigned subjects are retrieved from DB and displayed here`);
    try {
        // Fetch all assignments from the database
        const assignments = await AssignSubject.find();

        // Check if there are no assignments
        if (assignments.length === 0) {
            return res.status(404).json({ message: 'No assigned subjects found' });
        }

        // If assignments are found, send them in the response
        res.status(200).json(assignments);
    } catch (error) {
        console.error('Error fetching assigned subjects:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
const updateAssignedSubject = async(req,res)=>{
    // res.json(`This subject ${req.body.subject} is updated to the faculty with id ${req.body.id}`)
    try {
        const { facultyId, branch, semester, subjectCode } = req.body;

        // Find the assignment by facultyId, semester, and branch
        const assignmentToUpdate = await AssignSubject.findOne({ facultyId, semester, branch });

        // Check if the assignment exists
        if (!assignmentToUpdate) {
            return res.status(404).json({ message: 'Assigned subject not found' });
        }

        // Update the subjectCode
        assignmentToUpdate.subjectCode = subjectCode;

        // Save the updated assignment
        const updatedAssignment = await assignmentToUpdate.save();

        res.status(200).json({ message: 'Assigned subject updated successfully', updatedAssignment });
    } catch (error) {
        console.error('Error updating assigned subject:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteAssignedSubject = async(req,res)=>{
    // res.json(`This subject ${req.body.subject} is deleted/removed from the faculty with id ${req.body.id}`)
    try {
        const {facultyId,subjectCode} = req.body;

        // Find the assignment by facultyId and subjectCode and delete it
        // console.log(facultyId, subjectCode);
        const deletedAssignment = await AssignSubject.findOneAndDelete({ facultyId:facultyId,subjectCode:subjectCode });

        // Check if the assignment exists
        if (!deletedAssignment) {
            return res.status(404).json({ message: 'Assigned subject not found' });
        }

        res.status(200).json({ message: 'Assigned subject deleted successfully', deletedAssignment });
    } catch (error) {
        console.error('Error deleting assigned subject:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports={addFaculty,viewFaculty,deleteFaculty,assignSubject,viewAssignedSubjects,updateAssignedSubject,deleteAssignedSubject}