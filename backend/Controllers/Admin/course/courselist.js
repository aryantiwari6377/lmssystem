const CourseListModel = require("../../../Models/Coursemodel");

exports.admincourselist = async (req, res) => {
      try {
          const courseList = await CourseListModel.find();
  
          // Convert to plain JSON object
          const plainCourseList = courseList.map((course) => course.toObject());
  
          res.status(200).json({ message: "Courses fetched successfully", plainCourseList });
      } catch (error) {
          console.error("Error:", error);
          res.status(500).json({ message: "An error occurred", error: error.message });
      }
  };
  