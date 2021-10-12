const CertificationModel = require('../models/CertificationModel')
const Users = require('../models/userModel')


const certificationCtrl = {
      addCertification : async (req, res) => {
         
          
         
        const { Date , InstituteName, CourseName, Address, Duration, InstructorName, StudentName } = req.body;
       
        const CertificationsModel = new CertificationModel({ Date , InstituteName, CourseName, Address, Duration, InstructorName, StudentName})
    
        try {
           
            await CertificationsModel.save();
    
            res.status(201).json(CertificationModel );
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    },
   

  
 
}



module.exports = certificationCtrl