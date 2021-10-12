const mongoose = require('mongoose')

const panierSchema = mongoose.Schema({
    
    idUser: String,
    idCourse: String,
    title: String,
    time : Date, 
    CourseImg: String,
    price: Number,
       
}

)

module.exports = mongoose.model('Panier', panierSchema);
