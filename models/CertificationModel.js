const mongoose = require('mongoose')

const CertificationSchema = mongoose.Schema({
    
    idUser: String,
    Date : Date, 
    InstituteName: String,
    CourseName: String,
    Address: String,
    Duration: String,
    InstructorName: String,
    StudentName: String,
    price: Number,
       
}

)

module.exports = mongoose.model('Certification', CertificationSchema);
