const updateContact=(req,res)=>{
    res.send(`The Phn No is changed form ${req.body.old} to ${req.body.new}`)
}

module.exports= updateContact