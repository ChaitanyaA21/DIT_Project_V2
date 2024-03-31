// =(req,res)=>{}
const addSubject =(req,res)=>{
    res.json(`this subject : ${req.body.subject} is added to the semester : ${req.body.sem}`);
}

const viewSubjects =(req,res)=>{
    res.json(`The subject details of the semester : ${req.body.sem} will be displayed`);
}

module.exports ={addSubject,viewSubjects}