const updatePassword=(req,res)=>{
    res.send(`The password is changed form ${req.body.old} to ${req.body.new}`)
}

module.exports=updatePassword