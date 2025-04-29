// const enrollmodel = require("../../Models/Enrollment");

// exports.enrollment = async(req, res)=>{

//                 try {
//                     const { email, courseId } = req.body;
            
                   
//                     let enrollment = await enrollmodel.findOne({ email });
            
//                     if (!enrollment) {
                        
//                         enrollment = new enrollmodel({
//                             email,
//                             course: [courseId],
//                         });
//                         await enrollment.save();
//                         return res.status(201).json({ message: 'Enrollment successful!', enrollment });
//                     }
            
                 
//                     if (!enrollment.course.includes(courseId)) {
//                         enrollment.course.push(courseId);
//                         await enrollment.save();
//                         return res.status(200).json({ message: 'Course added to your enrollment.', enrollment });
//                     }
            
//                     return res.status(400).json({ message: 'You are already enrolled in this course.' });
            
//                 } catch (error) {
//                     console.error(error);
//                     res.status(500).json({ message: 'Server error. Please try again later.' });
//                 }
                    
// }
const mongoose = require('mongoose');
const enrollmodel = require("../../Models/Enrollment");

exports.enrollment = async (req, res) => {
    try {
        let { email, courseid } = req.body;

           console.log(email,courseid);
        let enrollment = await enrollmodel.findOne({ email });

        if (!enrollment) {
           
            enrollment = new enrollmodel({
                email,
                course: [courseid], 
            });

            await enrollment.save(); 
            return res.status(201).json({ message: 'Enrollment successful!', enrollment });
        }

   
        if (enrollment.course.includes(courseid)) {
           
            return res.status(400).json({ message: 'You are already enrolled in this course.' });
        }

       
        enrollment.course.push(courseid);
        await enrollment.save();

        return res.status(200).json({ message: 'Course added to your enrollment.', enrollment });

    } catch (error) {
        console.error(error);
     
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};
