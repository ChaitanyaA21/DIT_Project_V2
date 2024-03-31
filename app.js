const express = require('express')
const app = express()

const adminRoutes=require('./Admin/admin')
const facultyRoutes =require('./Faculty/faculty')
const studentRoutes=require('./Student/student')


app.use(express.json())

app.use('/admin',adminRoutes)
app.use('/faculty',facultyRoutes)
app.use('/student',studentRoutes)



const PORT= 1821;
app.listen(PORT,()=>{
    console.log(`Server is Listening to the port ${PORT}`);
});
