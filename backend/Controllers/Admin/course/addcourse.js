const coursemodel = require("../../../Models/Coursemodel");

exports.admincourse = async(req,res)=>{
  
  //  const { title, category, subcategory, duration, learn, content, status, review, enrollement } = req.body;
//      const {formData} = req.body;
const { formDataWithNumber } = req.body; 
console.log(req.body);
const {
    title,
    category,
    subcategory,
    duration,
    learn,
    content,
    status,
    review,
    enrollement,
} = formDataWithNumber;

 try {
  console.log(req.body);
  
 
  const course = await coursemodel.findOne({ title });
  if (course) {
    console.log("Course already exists");
    res.send("Course already exists");
  } else {
 
    const newcourse = new coursemodel({
      title,
      category,
      subcategory,
      duration,
      learn,        
      content,      
      status,
      review,
      enrollement
    });
    
   
    await newcourse.save();
    res.status(200).json({message:"Course created successfully"});
  }
} catch (error) {
  console.log(error);
  res.status(500).send("Error creating course");
}

}




