// const express = require('express')
// const router=express.Router()
// // const multer = require('multer');
// // const fs = require('fs');
// const upload = require('../controllers/noticeBoard')

// // const {noticeBoard,addNotice,deleteNotice}=require("../controllers/noticeBoard")




// // router.route('/').get(noticeBoard)
// // router.route('/noticeBoard').get(noticeBoard)
// // router.post('/upload', upload.single('file'), addNotice);
// // router.route('/deleteNotice').delete(deleteNotice)


// module.exports = router;
const express = require('express');
const multer = require('multer');
const { uploadFile, getFile ,getAllFile} = require('../controllers/noticeBoard');

const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/addNotice', upload.single('file'), uploadFile);
router.get('/files/:id', getFile);
// router.get('/admin', getFile);
router.get('/noticeBoard', getAllFile);

module.exports = router;
