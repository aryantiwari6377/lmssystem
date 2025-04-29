const coursemodel = require("../../Models/Coursemodel");


exports.categorycourse = async(req, res)=>{
        try{
                       const {category} = req.query;
                   const courses = await  coursemodel.find({category});
                //    console.log(courses);
                    res.status(200).json({courses});
        }catch(error){
            res.status(500).json({error:'error fetching course'});
        }
}
