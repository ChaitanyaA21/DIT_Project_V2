const express = require('express')
const router=express.Router()

const {addFaculty,viewFaculty,deleteFaculty,assignSubject,viewAssignedSubjects,updateAssignedSubject,deleteAssignedSubject}=require("../controllers/facultyActivities")

router.route('/addFaculty').post(addFaculty)
router.route('/viewFaculty').get(viewFaculty)
router.route('/deleteFaculty').delete(deleteFaculty)
router.route('/assignSubject').post(assignSubject)
router.route('/viewAssignedSubjects').get(viewAssignedSubjects)
router.route('/updateAssignedSubject').patch(updateAssignedSubject)
router.route('/deleteAssignedSubject').delete(deleteAssignedSubject)

module.exports = router;