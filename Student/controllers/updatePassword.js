const StudentModel=require('../../Admin/models/studentLogins')

const updatePassword=async (req,res)=>{
    // res.send(`The password is changed form ${req.body.old} to ${req.body.new}`)
    try {
        const { rollNo, oldPassword, newPassword } = req.body;

        // Find the user by rollNo
        const user = await StudentModel.findOne({ rollNo });

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the old password matches
        if (user.password !== oldPassword) {
            return res.status(400).json({ message: 'Old password is incorrect' });
        }

        // Update the password with the new password
        user.password = newPassword;

        // Save the updated user
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports=updatePassword