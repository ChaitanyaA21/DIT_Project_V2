
const addCalendar =(req,res)=>{
    res.send(`${req.body.description} --> from: ${req.body.from} to:${req.body.to}`)
}

const viewCalendar =(req,res)=>{
    res.send("This will find all the data from the DB about calendar and display it" )
}

const updateCalendar=(req,res)=>{
    res.send(`This is the updated data : ${req.body.description} --> from: ${req.body.from} to:${req.body.to}`)
}
module.exports ={addCalendar,viewCalendar,updateCalendar}