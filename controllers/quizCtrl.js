const QuizModel = require('../models/quizModel')
const Users = require('../models/userModel')


const quizCtrl = {
      addQuiz : async (req, res) => {    
        const {idUser, idCourse, titre, scoreQ} = req.body;
       
        const quizModel = new QuizModel({ idUser, idCourse, titre, scoreQ })
    
        try {
           
            await quizModel.save();
    
            res.status(201).json(quizModel );
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    },
    getAllQuizs : async (req, res) => { 
        try {
            const quizModel = await QuizModel.find();
                  
            res.status(200).json(quizModel);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
  
       deleteQuiz: async (req, res) => {
        try {
         
         await QuizModel.findByIdAndDelete(req.params.id)
             res.json({msg: "Deleted Success!"})
        
        }   catch (err) {
        return res.status(500).json({msg: err.message})
      }
    }
    
  
 
}





module.exports = quizCtrl