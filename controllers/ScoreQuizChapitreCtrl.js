const quizChapitreModel = require('../models/quizChapitreModel');



const ScoreQuizChapitreCtrl = {
  getAllScoreQuizChapitre : async (req, res) => { 
    try {
        const quizChapitreModel = await quizChapitreModel.find();
              
        res.status(200).json(quizChapitreModel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
},
    addScoreQuizChapitre :async (req, res) => {
        const scoreQuizChapitre = new quizChapitreModel(req.body);
        try {
          const savedScore = await scoreQuizChapitre.save();
          res.status(200).json(savedScore);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    
    deleteScoreQuizChapitre: async (req, res) => {
        try {
         
         await quizChapitreModel.findByIdAndDelete(req.params.id)
             res.json({msg: "Deleted Success!"})
        
        }   catch (err) {
        return res.status(500).json({msg: err.message})
      }
    }
}

module.exports = ScoreQuizChapitreCtrl