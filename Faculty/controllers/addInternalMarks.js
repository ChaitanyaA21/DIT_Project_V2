const InternalMarksModel=require('../models/internalMarks')

const addInternalMarks= async(req,res)=>{
        try {
        const { rollno, term, mid, assignment, viva } = req.body;
        let internalMarks = await InternalMarksModel.findOne({ rollno });
        if (!internalMarks) {
            internalMarks = new InternalMarksModel({ rollno, mid: [] });
        }
        internalMarks.mid.push({ term, marks: mid, assignment, viva });
        
        await internalMarks.save();

        res.status(201).json({ message: 'Internal marks added successfully' });
    } catch (error) {
        console.error('Error adding internal marks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = addInternalMarks