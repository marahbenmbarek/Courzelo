const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    
    idUser: String,
    title: String,
    author: String,
    description: String,
    prerequisite: String,
    comprendre: String,
    price: {
        type: Number,
        default: 0
    },
    subscribe: {
        type: Number,
        default: 0
    },
    time : { 
        type : Date, 
        default: Date.now 
    },
    CourseImg: String,
    validation: {
        type: Number,
        default: 0 // 0 = nonValidé, 1 = validé
    },
    introduction:
        {
            text1:String,
            video1: String,    
            img1:String,
            filePath1:String,
            
            text2:String,
            video2: String,    
            img2:String,
            filePath2:String,
            
            text3:String,
            video3: String,    
            img3:String,
            filePath3:String,

            text4:String,
            video4: String,
            img4:String,
            filePath4:String
         
        },
        chapitres: [],
        conclusion:
        {
            text1:String,
            video1: String,    
            img1:String,
            filePath1:String,
            
            text2:String,
            video2: String,    
            img2:String,
            filePath2:String,
            
            text3:String,
            video3: String,    
            img3:String,
            filePath3:String,

            text4:String,
            video4: String,
            img4:String,
            filePath4:String
        },
        quiz: [],
        categorie:String,
        pourcentage:{
            type: Number,
            default: 0 
        }
           
     
}
)

module.exports = mongoose.model('Courses', courseSchema);
