const router = require('express').Router()
const panierCtrl = require('../controllers/panierCtrl')
const auth = require('../middleware/auth')

router.post('/', panierCtrl.addCourse );
router.get('/panierCoursebyuser/:idCourse/:idUser', auth, panierCtrl.getAllCoursesByUser);
router.delete('/delete/:id', panierCtrl.deleteCourse);
router.get('/panierCoursebyuserforMe', auth, panierCtrl.getAllCoursesByUserPanier);

module.exports = router