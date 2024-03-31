const addStudents = (req,res)=>{
    res.json(`this is the data submitted ${req.body.Name}`)
}
// =(req,res)=>{}
const viewStudents =(req,res)=>{
    res.json(`The total Students are retrieved from DB`);
}
const deleteStudents = (req,res)=>{
    res.json(`this student data is removed from DB  ${req.body.id}`)
}

const addReRegisters = (req,res)=>{
    res.json(`this is the data submitted by reRegistered Student with id ${req.body.id}`)
}

const viewReRegisters =(req,res)=>{
    res.json(`The total reRegistered Students are retrieved from DB and displayed here`);
}

const deleteReRegisters = (req,res)=>{
    res.json(`this student data is removed from DB id = ${req.body.id}`)
}
module.exports={addStudents,viewStudents,deleteStudents,addReRegisters,viewReRegisters,deleteReRegisters}