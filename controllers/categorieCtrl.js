const CategorieModel = require('../models/categorieModel')



const categorieCtrl = {
      addCategorie : async (req, res) => {
          
         
         
        const {name, description } = req.body;
       
        const categorieModel = new CategorieModel({name, description ,})
    
        try {
            await categorieModel.save();
    
            res.status(201).json(categorieModel );
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    },
    getAllCategories : async (req, res) => { 
        try {
            const categoriesModel = await CategorieModel.find();
                   
            res.status(200).json(categoriesModel);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    
    updateCategorie: async (req, res) => {
        try {
         const {idUser,title, description} = req.body
         
         await categorieModel.findOneAndReplace({_id: req.body._id}, {
             idUser,title,description
         })
         
         res.json({msg: "update Success!"})
        }   catch (err) {
        return res.status(500).json({msg: err.message})
    }
       },
       deleteCategorie: async (req, res) => {
        try {
         
         await categorieModel.findByIdAndDelete(req.params.id)
             res.json({msg: "Deleted Success!"})
        
        }   catch (err) {
        return res.status(500).json({msg: err.message})
      }
       }

  
 
}





module.exports = categorieCtrl