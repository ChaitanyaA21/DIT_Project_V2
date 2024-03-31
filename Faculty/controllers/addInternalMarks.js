const addInternalMarks=(req,res)=>{
    res.send(`The internal marks for the mid:${req.body.mid} === ${req.body.marks}`)
}


module.exports = addInternalMarks