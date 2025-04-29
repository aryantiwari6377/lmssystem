// const enrollmodel = require("../../Models/Enrollment");

// exports.getenrolllist = async (req, res) => {
//     try {
//       const useremail = req.user.email;
    
//       const user = await enrollmodel.findOne({ email: useremail });
  
//       if (!user) {
//         return res.status(404).json({ enrolled: false, message: "User not found or not enrolled" });
//       }

//       const courselist = user.course; 
//       res.status(200).json({courselist});
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ enrolled: false, message: "Server error", error });
//     }
//   };

const enrollmodel = require("../../Models/Enrollment");
const CourseModel = require("../../Models/Coursemodel"); // Assuming the Course model is required

exports.getenrolllist = async (req, res) => {
  try {
    const useremail = req.user.email;

    // Find the user based on email
    const user = await enrollmodel.findOne({ email: useremail });

    // If user is not found, return a 404 error
    if (!user) {
      return res.status(404).json({ enrolled: false, message: "User not found or not enrolled" });
    }

    // Get the course IDs from the enrolled user
    const courselist = user.course;

    // If the courselist is empty, return an empty array
    if (courselist.length === 0) {
      return res.status(200).json({ courselist: [] });
    }

    // Fetch all course data based on course IDs (using $in to match multiple IDs)
    const courses = await CourseModel.find({ _id: { $in: courselist } });

    // If no courses are found, return a 404 error
    if (courses.length === 0) {
      return res.status(404).json({ enrolled: false, message: "No courses found" });
    }

    // Return the actual course data as an array of course objects
    res.status(200).json({ courselist: courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ enrolled: false, message: "Server error", error });
  }
};

  