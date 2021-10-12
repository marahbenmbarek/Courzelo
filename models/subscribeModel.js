const mongoose = require('mongoose')

const SubscribeSchema = mongoose.Schema({
    
    idUser: String,
    idCourse: String,
    subscribe: Number,
       
}

)

module.exports = mongoose.model('Subscribes', SubscribeSchema);
