const subcategorymodel = require("../../Models/courseSubcategory");


exports.coursesubcategory = async(req, res)=>{
    const { category, subcategory } = req.body;


    if (!category || !subcategory) {
      return res.status(400).json({ message: 'Category and subcategory array are required.' });
    }
  
    try {
      
      const newCategory = new  subcategorymodel({ category, subcategory });
      await newCategory.save();
  
      res.status(201).json({ message: 'Category and subcategories added successfully!', data: newCategory });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add category.', error: error.message });
    }
}
