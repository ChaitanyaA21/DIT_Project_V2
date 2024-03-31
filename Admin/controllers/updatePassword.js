const updatePassword = (req,res)=>{
    if(req.body.confirm===req.body.new){
        res.json({msg:`Password updated from ${req.body.old} to ${req.body.new}`} );
        return
    }
    else{
        res.json({msg:`Passwords doesn't match.Please check again`})
    }
}
module.exports=updatePassword;