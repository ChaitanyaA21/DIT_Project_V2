const express = require('express')
const app = express.Router()

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