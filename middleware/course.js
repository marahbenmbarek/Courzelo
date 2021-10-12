const CourseModel = require('../models/courseModel')

const course = async (req, res, next) => {
    const { title, description } = req.body;
    
        const courseModel = new CourseModel({ title, description })
    
        try {
            await courseModel.save();


        if(course.id !== 1) 
            return res.status(500).json({msg: "fdfdf."})

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = course