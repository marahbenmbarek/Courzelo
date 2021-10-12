const router = require('express').Router()
const categorieCtrl = require('../controllers/categorieCtrl')
const auth = require('../middleware/auth')

router.post('/',auth, categorieCtrl.addCategorie );
router.get('/', categorieCtrl.getAllCategories);

router.patch('/updateCategorie/:id',  categorieCtrl.updateCategorie);
router.delete('/delete/:id', categorieCtrl.deleteCategorie);




module.exports = router