const router = require('express').Router()

const subcribeCtrl = require('../controllers/subscribeCtrl');
const auth = require('../middleware/auth')


router.post('/', auth, subcribeCtrl.addSubscribe);
router.get('/:idCourse/:idUser', subcribeCtrl.getAllSubscribe);
router.delete('/delete/:id', subcribeCtrl.deleteSubscribe);

module.exports = router