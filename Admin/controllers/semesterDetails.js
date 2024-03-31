const addSemester =(req,res)=>{
    res.json(`Semester : ${req.body.sem} details are added that belongs to year ${req.body.year}`);
}

const viewSemester =(req,res)=>{
    res.json(`All the semester details are Viewed here`);
}

const updateSemester =(req,res)=>{
    res.json(`Semester : ${req.body.sem} details are updated that belongs to year ${req.body.year}`);
}

const deleteSemester =(req,res)=>{
    res.json(`Semester : ${req.body.sem} details are deleted that has code ${req.body.code}`);
}

module.exports ={addSemester,viewSemester,updateSemester,deleteSemester}