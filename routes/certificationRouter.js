const router = require('express').Router()
const certificationCtrl = require('../controllers/certificationCtrl')
const auth = require('../middleware/auth')

router.post('/', certificationCtrl.addCertification );


module.exports = router