const testmodel = require("../../../Models/Questions");

exports.addquestion = async() =>{

    try {
        const { question, options, correctAnswer, category } = req.body;
       console.log(req.body);
        
        let categoryDoc = await testmodel.findOne({ category });
    
        if (!categoryDoc) {
         
         
          return  res.status(404).json({ message: "category not found"});
        } 

          categoryDoc.questions.push({
            quesionstext: question,
            options: [options],
            correctanswer: correctAnswer,
          });
        
        await categoryDoc.save();
    
        res.status(201).json({ message: "Question added successfully", categoryDoc });
      } catch (error) {
        console.error("Error adding question:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
}