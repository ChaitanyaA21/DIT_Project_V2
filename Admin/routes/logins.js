const express = require('express')
const router=express.Router()

const {deleteStudent,deleteFaculty}=require('../controllers/logins')

router.route('/deleteStudent').delete(deleteStudent)
router.route('/deleteFaculty').delete(deleteFaculty)

module.exports =router