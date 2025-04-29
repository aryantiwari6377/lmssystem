const questionmodel = require("../../Models/Questions");

exports.Question = async(req,res)=>{
    const {category, questionstext, options} = req.body;
    console.log(req.body);
    try{
       const checkcategory = await questionmodel.findOne({category});
      
        if(checkcategory){
            checkcategory.questions.push({ questionstext,options });
            await checkcategory.save();
            return res.status(200).json({ message: 'Question added to existing category.' });
        }
        else{
      const newquestion = new questionmodel(req.body);
                 
    await newquestion.save();
    res.status(201).send("question created");
        }
     
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

exports.getQuestion = async(req,res)=>{
     const {category} = req.query;
     console.log(req.query);
     try{
     console.log(category); 
     const checkcategory = await questionmodel.findOne({category});
      const allquestions = checkcategory.questions;
      console.log("questions",allquestions);
     if(!allquestions){res.status(200).send("qustions not found");}
     res.status(200).send(allquestions);
     }
     catch(error){
         res.status(500).send(error);
     }
              
}



