const coursemodel = require("../../Models/Coursemodel");

exports.course = async(req,res)=>{
   // const  { title, description, category, duration, enrollements, modules } = req.body;
   //  try{
   //       console.log(req.body);
   //       const course = await coursemodel.findOne({title});
   //       if(course){ console.log("already exist");
   //          res.send("course is exist");
   //       }
   //       else{
   //          const newcourse = new coursemodel({title, description, category, duration, enrollements, modules});
   //          await newcourse.save();
   //         res.send("course created");
   //       } 
   //  }
   //  catch(error){
   //       console.log(error);
   //       res.send(error);
   //  }
   const { title, category, subcategory, duration, learn, content, status, review, enrollement } = req.body;

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
    res.send("Course created successfully");
  }
} catch (error) {
  console.log(error);
  res.status(500).send("Error creating course");
}

}




