
const markAttendance=(req,res)=>{
    res.send(`The attendance for the date:${req.body.date} === ${req.body.attendance}`)
}


module.exports = markAttendance