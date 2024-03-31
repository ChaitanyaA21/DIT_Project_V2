const addFaculty = (req,res)=>{
    res.json(`this is the data submitted ${req.body.Name}`)
}
// =(req,res)=>{}
const viewFaculty =(req,res)=>{
    res.json(`The total Staff details are retrieved from DB`);
}
const deleteFaculty = (req,res)=>{
    res.json(`this faculty data is removed from DB  ${req.body.id}`)
}

const assignSubject = (req,res)=>{
    res.json(`This subject ${req.body.subject} is assigned to the faculty with id ${req.body.id}`)
}

const viewAssignedSubjects =(req,res)=>{
    res.json(`Assigned subjects are retrieved from DB and displayed here`);
}
const updateAssignedSubject = (req,res)=>{
    res.json(`This subject ${req.body.subject} is updated to the faculty with id ${req.body.id}`)
}

const deleteAssignedSubject = (req,res)=>{
    res.json(`This subject ${req.body.subject} is deleted/removed from the faculty with id ${req.body.id}`)
}
module.exports={addFaculty,viewFaculty,deleteFaculty,assignSubject,viewAssignedSubjects,updateAssignedSubject,deleteAssignedSubject}