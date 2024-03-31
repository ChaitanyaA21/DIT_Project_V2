const addForm =(req,res)=>{
    res.json(`The form with name :${req.body.name} and id:${req.body.id} is added to the DB`);
}

const viewForms =(req,res)=>{
    res.json(`All the Forms  are Viewed here`);
}

const updateForm =(req,res)=>{
    res.json(`The form with name :${req.body.newName} and id:${req.body.id} is updated to the DB`);
}

const deleteForm =(req,res)=>{
    res.json(`The form with name :${req.body.name} and id:${req.body.id} is deleted from the DB`);
}

module.exports ={addForm,viewForms,updateForm,deleteForm}