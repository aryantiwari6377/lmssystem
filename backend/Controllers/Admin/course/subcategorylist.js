const subCategorymodel = require("../../../Models/courseSubcategory");

exports.adminsubcategorylist = async (req, res) => {
      try {
          const subcategoryList = await subCategorymodel.find();
        
  
          res.status(200).json({ message: "subcategory fetched successfully", subcategoryList });
      } catch (error) {
          console.error("Error:", error);
          res.status(500).json({ message: "An error occurred", error: error.message });
      }
  };
  