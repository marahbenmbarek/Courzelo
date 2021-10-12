const router = require('express').Router()
const uploadCourseImage = require('../middleware/uploadCourseImage')
const uploadCourseImgCtrl = require('../controllers/uploadCourseImgCtrl')
const auth = require('../middleware/auth')

router.post('/upload_Course_img', uploadCourseImage, uploadCourseImgCtrl.uploadCourseImg)


module.exports = router