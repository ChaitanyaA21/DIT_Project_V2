
const express = require('express')
const router=express.Router()

const downloadForms=require('../controllers/downloadForms')

router.route('/downloadForms').get(downloadForms)

module.exports =router