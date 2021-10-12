const router = require('express').Router()

const ScoreQuizChapitreCtrl = require('../controllers/ScoreQuizChapitreCtrl');

const auth = require('../middleware/auth')
router.get('/allscoreQuizChapitre', auth, ScoreQuizChapitreCtrl.getAllScoreQuizChapitre);


router.get('/addscorequizchapitre', auth, ScoreQuizChapitreCtrl.addScoreQuizChapitre);
router.delete('/delete/:id', ScoreQuizChapitreCtrl.deleteScoreQuizChapitre);

module.exports = router