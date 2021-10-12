const mongoose = require('mongoose')

const categorieSchema = mongoose.Schema({
    name: String,
    description: String ,
    CategorieImg: String,  
     
}
)

module.exports = mongoose.model('Categories', categorieSchema);