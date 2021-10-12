const router = require('express').Router()
const uploadCourseVideo = require('../middleware/uploadCourseVideo')
const uploadCourseVideoCtrl = require('../controllers/uploadCourseVideoCtrl')
const auth = require('../middleware/auth')

router.post('/upload_Course_video', uploadCourseVideo, uploadCourseVideoCtrl.uploadCourseVideo)


module.exports = router