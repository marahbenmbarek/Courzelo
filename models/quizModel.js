const mongoose = require('mongoose')

const QuizSchema = mongoose.Schema({
    
    idUser: String,
    idCourse: String,
    titre: String,
    scoreQ: String,
       
}

)

module.exports = mongoose.model('Quizs', QuizSchema);
