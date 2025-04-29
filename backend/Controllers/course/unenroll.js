// const enrollmodel = require("../../Models/Enrollment");

// exports.unenroll = async (req, res) => {
//     const useremail = req.user.email; 
//     const {courseid} = req.body; 
   
//     try {
        
//         const user = await enrollmodel.findOne({ email: useremail });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

       
//         user.course = user.course.filter(course => course._id.toString() !== courseid);

//         await user.save();

//         return res.status(200).json({ message: "Course removed successfully" });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Server error" });
//     }
// };

const enrollmodel = require("../../Models/Enrollment");

exports.unenroll = async (req, res) => {
    const useremail = req.user.email; 
    const { courseid } = req.body; 

    try {
        if (!useremail) {
            return res.status(400).json({ message: "User email is missing from the request" });
        }


        const user = await enrollmodel.findOne({ email: useremail });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!user.course.includes(courseid)) {
            return res.status(404).json({ message: "Course not found in the user's enrolled list" });
        }

   
        user.course = user.course.filter(course => course !== courseid);

        await user.save();

        return res.status(200).json({ message: "Course removed successfully" });
    } catch (error) {
        console.error("Error in unenroll:", error);
        return res.status(500).json({ message: "Server error" });
    }
};
