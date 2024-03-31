const express = require('express')
const router=express.Router()

const {addSubject,viewSubjects}= require('../controllers/subjects');

router.route('/addSubject').post(addSubject)
router.route('/viewSubjects').get(viewSubjects)

module.exports = router