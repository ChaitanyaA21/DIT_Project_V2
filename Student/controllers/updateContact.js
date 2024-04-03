const StudentModel=require('../../Admin/models/studentDetails')
const updateContact=async (req,res)=>{
    // res.send(`The Phn No is changed form ${req.body.old} to ${req.body.new}`)
    try {
        const { rollNo, newContact } = req.body;

        // Find the user by rollNo
        const user = await StudentModel.findOne({ rollNo });
console.log(user);
        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the contact information
        user.mobileNo = newContact;

        // Save the updated user
        await user.save();

        res.status(200).json({ message: 'Contact information updated successfully' });
    } catch (error) {
        console.error('Error updating contact information:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports= updateContact