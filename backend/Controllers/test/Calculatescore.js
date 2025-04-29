
const Question = require("../../Models/Questions");
const scoreboard = require("../../Models/Scoreboard");

exports.submitscore = async (req, res) => {


  //   const { category, selectedOptions, userid } = req.body;
  //  console.log(req.body);
  //   try {

  //     const questions = await Question.findOne({ category });

  //     if (!questions) {
  //       return res.status(404).json({ message: 'Questions not found for this category.' });
  //     }

  //     let score = 0;
  //     const totalQuestions = questions.questions.length;


  //     questions.questions.forEach((question, index) => {
  //       const correctAnswer = question.correctanswer; 
  //       const selectedOption = selectedOptions[index]; 


  //       if (selectedOption === correctAnswer) {
  //         score += 10; 
  //       }
  //     });
  //      console.log(score);


  //     const finduser = await scoreboard.findById(userid);
  //     if(!finduser){
  //     const newuser =  await scoreboard.create({
  //      userid, score:[ {
  //       verbal: 0,
  //       numerical: 0,
  //       abstract: 0,
  //       personality: 0
  //     }]
  //     });

  //     if(newuser.score[0][category] == 0){
  //       newuser.score[0][category] = score;
  //     }

  //     await newuser.save();
  //     console.log(newuser);
  //     return  res.status(200).json({message: "score store", score, totalQuestions });

  //   }

  //    console.log("check",finduser.score[0][category]);

  //   if(finduser.score[0][category] == 0){
  //     finduser.score[0][category] = score;
  //     await finduser.save();
  //   }

  //     return res.status(200).json({ score, totalQuestions });
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ message: 'Server error' });
  //   }

  const { category, selectedOptions} = req.body;
  const userid = req.user.id;
  console.log(req.body);
  try {
        
    const questions = await Question.findOne({ category });

    if (!questions) {
      return res.status(404).json({ message: 'Questions not found for this category.' });
    }
     
    let score = 0;
    const totalQuestions = questions.questions.length;


    questions.questions.forEach((question, index) => {
      const correctAnswer = question.correctanswer;
      const selectedOption = selectedOptions[index];


      if (selectedOption === correctAnswer) {
        score += 10;
      }
    });
    console.log(score);


    const finduser = await scoreboard.findOne({ userid });

    if (!finduser) {
      
      const newuser = await scoreboard.create({
        userid,
        Verbal: -1,
        Numerical: -1,
        Abstract: -1,
        Personality: -1,
      });

      
      if (['Verbal', 'Numerical', 'Abstract', 'Personality'].includes(category)) {
        newuser[category] = score; 
        await newuser.save(); 
      }
    } else {
      
      if (['Verbal', 'Numerical', 'Abstract', 'Personality'].includes(category)) {
        // if(finduser[category]== -1 ||finduser[category]== 0 ){
        finduser[category] = score;
        await finduser.save();
        // }
      }
    }

    return res.status(200).json({ message: 'Score updated successfully' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }

};

