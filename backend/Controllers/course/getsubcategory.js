const subcategorymodel = require("../../Models/courseSubcategory");

exports.getsubcategory = async(req,res)=>{
    try{
    const {category} = req.query;
    console.log("cat:",category);
   
     const subcategoryData = await subcategorymodel.findOne({ category });

     if (!subcategoryData) {
         return res.status(404).json({ message: "Category not found" });
     }
     console.log( " subcategoryData",subcategoryData);
     res.status(200).json({ subcategory: subcategoryData.subcategory });
    }
    catch(error){
                res.status(500).json({error});
    }

}