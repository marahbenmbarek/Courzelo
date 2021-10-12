const router = require('express').Router()
const quizCtrl = require('../controllers/quizCtrl')
const auth = require('../middleware/auth')

router.post('/',auth, quizCtrl.addQuiz );
router.get('/', quizCtrl.getAllQuizs);
router.delete('/delete/:id', quizCtrl.deleteQuiz);





module.exports = router