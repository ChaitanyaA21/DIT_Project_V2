const express = require('express')
const router = express.Router()

const profile=require('../controllers/profile')

router.route('/profile').get(profile)

module.exports=router 