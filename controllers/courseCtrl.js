const CourseModel = require('../models/courseModel')
const Users = require('../models/userModel')


const courseCtrl = {
      addCourse : async (req, res) => {
          const idUser=req.user.id;
          
         
        const {title, author, description, prerequisite, comprendre,subscribe,price, time, validation,introduction,chapitres,conclusion,quiz,CourseImg,categorie,pourcentage} = req.body;
       
        const courseModel = new CourseModel({ idUser,title, author, description, prerequisite, comprendre,subscribe,price, time, validation,introduction,chapitres,conclusion,quiz,CourseImg,categorie,pourcentage })
    
        try {
           
            await courseModel.save();
    
            res.status(201).json(courseModel );
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    },
    getAllCourses : async (req, res) => { 
        try {
            const coursesModel = await CourseModel.find();
                  
            res.status(200).json(coursesModel);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    getAllCoursesById : async (req, res) => { 
        try {
           
            const {validation} = req.body
            await CourseModel.find({_id: req.params.id}, {
               validation
            })
            res.status(200).json(coursesModel);
            
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    getAllCoursesByUser : async (req, res) => { 
        try {
            const coursesModel = await CourseModel.find({idUser: req.user.id});
                    
            res.status(200).json(coursesModel);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    getAllCoursesByCategory : async (req, res) => { 
        try {
            const coursesModel = await CourseModel.find({categorie: req.categorie.name});
                    
            res.status(200).json(coursesModel);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    
    updateCourse: async (req, res) => {
        try {
         const {idUser,title, subscribe,description,introduction,chapitres,conclusion,quiz,CourseImg,categorie,pourcentage} = req.body
       
         await CourseModel.findOneAndReplace({_id: req.body._id}, {
             idUser,title, subscribe, description,introduction,chapitres,conclusion,CourseImg,quiz,categorie,pourcentage
         })
         
         res.json({msg: "update Su!"})
         
        }   catch (err) {
        return res.status(500).json({msg: err.message})
    }
       },
    
       deleteCourse: async (req, res) => {
        try {
         
         await CourseModel.findByIdAndDelete(req.params.id)
             res.json({msg: "Deleted Success!"})
        
        }   catch (err) {
        return res.status(500).json({msg: err.message})
      }
    },
       updateCoursesubscribe: async (req, res) => {
        try {
          
         const {subscribe} = req.body
       
         await CourseModel.findOneAndUpdate({_id: req.params.id}, {
              subscribe
         })
         
         res.json({msg: "update Su!"})
         
        }   catch (err) {
        return res.status(500).json({msg: err.message})
    }
       },
       updateCourseVal: async (req, res) => {
        try {
         const {validation} = req.body
         await CourseModel.findOneAndUpdate({_id: req.params.id}, {
            validation
         })
         res.json({msg: "update Success!"})
        }   catch (err) {
        return res.status(500).json({msg: err.message})
      }
    }
  
 
}





module.exports = courseCtrl