const PanierModel = require('../models/panierModel')


const panierCtrl = {
    addCourse :async (req, res) => {
        const newCourse = new PanierModel(req.body);
        try {
          const savedCourse = await newCourse.save();
          res.status(200).json(savedCourse);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    getAllCoursesByUser : async (req, res) => { 
        try {
            const paniersModel = await PanierModel.find({ idCourse: req.params.idCourse,idUser: req.params.idUser ,idUser: req.user.id });
                    
            res.status(200).json(paniersModel);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    deleteCourse: async (req, res) => {
        try {
         
        const paniersModel = await PanierModel.findByIdAndDelete(req.params.id)

            res.status(200).json(paniersModel);
        
        }   catch (err) {
        return res.status(500).json({msg: err.message})
      }
    },

    getAllCoursesByUserPanier : async (req, res) => { 
      try {
          const paniersModel = await PanierModel.find({idUser: req.user.id });
                  
          res.status(200).json(paniersModel);
      } catch (error) {
          res.status(404).json({ message: error.message });
      }
  },
}

module.exports = panierCtrl