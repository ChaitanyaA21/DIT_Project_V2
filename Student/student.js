const express = require('express')
const app = express.Router()

const  profileRouter=require('./routes/profile')
const  academicCalendarRouter=require('./routes/academicCalendar')
const  noticeBoardRouter=require('./routes/noticeBoard')
const  raiseComplaintsRouter=require('./routes/raiseComplaints')
const  updatePasswordRouter=require('./routes/updatePassword')
const  updateContactRouter=require('./routes/updateContact')
const  notificationsRouter=require('./routes/notifications')
const  enrolledSubjectsRouter=require('./routes/enrolledSubjects')
const  checkAttendanceRouter=require('./routes/checkAttendance')
const  checkInternalMarksRouter=require('./routes/checkInternalMarks')
const  downloadFormsRouter=require('./routes/downloadForms')
const  downloadSoftCopiesRouter=require('./routes/downloadSoftCopies')




app.use('/',profileRouter)
app.use('/',academicCalendarRouter)
app.use('/',noticeBoardRouter)
app.use('/',raiseComplaintsRouter)
app.use('/',updatePasswordRouter)
app.use('/',updateContactRouter)
app.use('/',notificationsRouter)
app.use('/',enrolledSubjectsRouter)
app.use('/',checkAttendanceRouter)
app.use('/',checkInternalMarksRouter)
app.use('/',downloadFormsRouter)
app.use('/',downloadSoftCopiesRouter)



module.exports=app