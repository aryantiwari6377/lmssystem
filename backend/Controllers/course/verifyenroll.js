const enrollmodel = require("../../Models/Enrollment");

// exports.verifyenroll = async(req,res) =>{
//     try{
//         const {useremail} = req.user.email;
//         const {courseid} = req.body;
//         const user =  enrollmodel.findOne({useremail});
//         if(!user){
//             res.status(404).json({message:"not enrolled"});
//         }
//         const coursecheck = user.course.findOne({courseid});
//         if(!coursecheck){
//             res.status(404).json({message:"not enrolled"});
//         }
//         res.status(200).json({message:"user is enrolled"});
//     }
//     catch(error){
//         res.status(500).json(error);
//     }
// }
exports.verifyenroll = async (req, res) => {
    try {
      const useremail = req.user.email;
      const {courseid } = req.query;
       console.log("check",useremail, courseid);
      const user = await enrollmodel.findOne({ email: useremail });
  
      // if (!user) {
      //   return res.status(404).json({ enrolled: false, message: "User not found or not enrolled" });
      // }
  
      const coursecheck = user.course.find(course => course === courseid);
  
      // if (!coursecheck) {
      //   return res.status(404).json({ enrolled: false, message: "Not enrolled in this course" });
      // }
      if( user && coursecheck){
        
      return res.status(200).json({ enrolled: true, message: "User is enrolled in the course" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ enrolled: false, message: "Server error", error });
    }
  };
  