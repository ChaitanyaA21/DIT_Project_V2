const sendNotifications=(req,res)=>{
    res.send(`${req.body.description}`)
}


module.exports = sendNotifications