// =(req,res)=>{}
const SubjectModel =require('../models/addSubjects')
const addSubject =async (req,res)=>{
    // res.json(`this subject : ${req.body.subject} is added to the semester : ${req.body.sem}`);
    try {
        const { branch, semester, subjectName, subjectCode } = req.body;

        // Create a new subject document
        const newSubject = new SubjectModel({
            branch,
            semester,
            subjectName,
            subjectCode
        });

        // Save the subject to the database
        await newSubject.save();

        res.status(201).json({ message: 'Subject added successfully' });
    } catch (error) {
        console.error('Error adding subject:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const viewSubjects =async (req,res)=>{
    // res.json(`The subject details of the semester : ${req.body.sem} will be displayed`);
    try {
        // Fetch all subjects from the database
        const subjects = await SubjectModel.find();

        // Check if there are no subjects
        if (subjects.length === 0) {
            return res.status(404).json({ message: 'No subjects found' });
        }

        res.status(200).json(subjects);
    } catch (error) {
        console.error('Error fetching subjects:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports ={addSubject,viewSubjects}