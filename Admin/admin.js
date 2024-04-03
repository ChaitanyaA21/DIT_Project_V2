const express = require('express')
const app = express.Router()
const multer = require('multer');
const fs = require('fs');
// const noticeBoardRouter = require('./routes/')

const noticeBoardRouter = require('./routes/noticeBoard')
const passwordsRouter= require('./routes/passwords')
const studentActivitiesRouter= require('./routes/studentActivities')
const facultyActivitiesRouter= require('./routes/facultyActivities')
const subjectsRouter = require("./routes/subjects")
const semesterRouter = require('./routes/semesterDetails')
const formsRouter = require('./routes/formDetails')
const calendarRouter = require('./routes/academicCalendar')
const loginsRouter =require('./routes/logins')


app.use(express.json())
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads');
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });

// const upload = multer({ storage: storage }).single('file');

app.use('/',noticeBoardRouter)
app.use('/',passwordsRouter)
app.use('/studentActivities',studentActivitiesRouter)
app.use('/facultyActivities',facultyActivitiesRouter)
app.use('/subjects',subjectsRouter)
app.use('/semester',semesterRouter)
app.use('/forms',formsRouter)
app.use('/academicCalendar',calendarRouter)
app.use('/deleteLogins',loginsRouter)



module.exports=app