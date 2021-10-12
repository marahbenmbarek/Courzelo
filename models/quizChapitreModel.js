const mongoose = require('mongoose')

const QuizChapitreSchema = mongoose.Schema({
    
    idUser: String,
    idCourse: String,
    score: Number,
       
}

)

module.exports = mongoose.model('QuizChapitre', QuizChapitreSchema);
