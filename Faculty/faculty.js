const express = require('express')
const app = express.Router()

const profileRouter = require('./routes/profile')
const updatepwdRouter=require('./routes/updatePassword')
const updateContactRouter = require('./routes/updateContact')
const noticeBoardRouter = require('./routes/noticeBoard')
const enrolledStudentsRouter=require('./routes/ViewEnrolledStudents')
const markAttendanceRouter=require('./routes/markAttendance')
const addInternalMarksRouter=require('./routes/addInternalMarks')
const sendNotificationsRouter=require('./routes/sendNotifications')
const academicCalendarRouter=require('./routes/academicCalendar')
const raiseComplaintsRouter=require('./routes/raiseComplaints')



app.use('/',profileRouter)
app.use('/',updatepwdRouter)
app.use('/',updateContactRouter)
app.use('/',noticeBoardRouter)
app.use('/',enrolledStudentsRouter)
app.use('/',markAttendanceRouter)
app.use('/',addInternalMarksRouter)
app.use('/',sendNotificationsRouter)
app.use('/',academicCalendarRouter)
app.use('/',raiseComplaintsRouter)




module.exports=app