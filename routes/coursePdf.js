'use strict';
const router = require('express').Router()
const pdfHelper = require('../middleware/pdfHelper');

const uploadCoursePdfCtrl = require('../controllers/pdfCtrl')



router.post('/singleFile', pdfHelper, uploadCoursePdfCtrl.uploadCoursePdf );



module.exports = router