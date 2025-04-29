const subcategorymodel = require("../../../Models/courseSubcategory");

exports.adminaddsubcategory = async(req,res) =>{
    try {
        const { category, subcategory } = req.body;

       
        const existingCategory = await subcategorymodel.findOne({ category });

        if (!existingCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        existingCategory.subcategory.push(...subcategory);

      
        await existingCategory.save();

        res.status(200).json({ message: "Subcategory added successfully", data: existingCategory });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error });
    }

}