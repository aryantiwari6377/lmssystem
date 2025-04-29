const coursemodel = require("../../../Models/Coursemodel");

exports.adminremovecourse = async (req, res) => {
  try {
    const { id } = req.body;

   
    const deletedCourse = await coursemodel.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course removed successfully", deletedCourse });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};
