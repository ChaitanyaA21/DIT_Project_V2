const deleteStudent=(req,res)=>{
    res.json(`The student with id:${req.body.id} is deleted`);
}

const deleteFaculty =(req,res)=>{
    res.json(`The Faculty with id:${req.body.id} is deleted`);
}
module.exports ={deleteStudent,deleteFaculty}