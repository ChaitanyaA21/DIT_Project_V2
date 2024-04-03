const express = require('express')
const router=express.Router()

const {addStudents,viewStudents,deleteStudent,addReRegisters,viewReRegisters,deleteReRegisters, deleteStudents}=require("../controllers/studentActivities")


router.route('/addStudents').post(addStudents)
router.route('/viewStudents').get(viewStudents)
// router.route('/addReRegisters').post(addReRegisters)
// router.route('/viewReRegisters').get(viewReRegisters)
router.route('/deleteStudents').delete(deleteStudents)
// router.route('/deleteReRegisters').delete(deleteReRegisters)

module.exports = router;