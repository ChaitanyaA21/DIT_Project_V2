const InternalMarksModel=require('../models/internalMarks')

const addInternalMarks= async(req,res)=>{
        try {
        const { rollno, term, mid, assignment, viva } = req.body;

        // Find the document by rollno
        let internalMarks = await InternalMarksModel.findOne({ rollno });

        // If document does not exist, create a new one
        if (!internalMarks) {
            internalMarks = new InternalMarksModel({ rollno, mid: [] });
        }

        // Push new mid term details to the mid array
        internalMarks.mid.push({ term, marks: mid, assignment, viva });

        // Save the updated document
        await internalMarks.save();

        res.status(201).json({ message: 'Internal marks added successfully' });
    } catch (error) {
        console.error('Error adding internal marks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = addInternalMarks