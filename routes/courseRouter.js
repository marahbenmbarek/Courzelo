const router = require('express').Router()
const courseCtrl = require('../controllers/courseCtrl')
const auth = require('../middleware/auth')

router.post('/',auth, courseCtrl.addCourse );
router.get('/', courseCtrl.getAllCourses);
router.get('/coursebyuser', auth, courseCtrl.getAllCoursesByUser);
router.get('/coursebyid', auth, courseCtrl.getAllCoursesById);
router.get('/coursebycategory', auth, courseCtrl.getAllCoursesByCategory);
router.patch('/updateCourse/:id',  courseCtrl.updateCourse);
router.patch('/updateCoursesubscribe/:id',  courseCtrl.updateCoursesubscribe);
router.delete('/delete/:id', courseCtrl.deleteCourse);
router.patch('/update_validation/:id', courseCtrl.updateCourseVal)




module.exports = router