const express = require('express')
const app = express()
require('dotenv').config();
const connectDB=require('./db/connect')
const adminRoutes=require('./Admin/admin')
const facultyRoutes =require('./Faculty/faculty')
const studentRoutes=require('./Student/student')



app.use(express.json())

app.use('/admin',adminRoutes)
app.use('/faculty',facultyRoutes)
app.use('/student',studentRoutes)


const PORT=process.env.PORT

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();

// app.listen(PORT,()=>{
//     console.log(`Server is Listening to the port ${PORT}`);
// });
