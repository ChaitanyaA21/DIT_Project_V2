const express = require('express')
const router=express.Router()

const {addSemester,viewSemester,updateSemester,deleteSemester}=require('../controllers/semesterDetails')

router.route('/addSemester').post(addSemester)
router.route('/viewSemester').get(viewSemester)
router.route('/updateSemester').patch(updateSemester)
router.route('/deleteSemester').delete(deleteSemester)

module.exports = router