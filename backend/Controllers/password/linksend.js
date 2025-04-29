const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const usermodel = require("../../Models/Useraccount");
const { testaccount } = require("../../Util/nodemailer");
const nodemailer = require('nodemailer');
// exports.linksend = async(req,res)=>{
//      const {email} = req.body;
//      try{
//         const usercheck = await usermodel.findOne({email});
      
//         console.log("check the id is correct", usercheck._id);
//         if(usercheck ){
//           const token = jwt.sign({id: usercheck._id, email: email},process.env.SECRET_KEY,{expiresIn:'2h'});
          
//           const resetURL = `http://localhost:3000/reset-password/${token}`; 

//           const mailoptions ={
//              from: process.env.GMAIL_USER,
//              to: email,
//              subject:`Change your password using the below link`,
//              html:`you requested for password reset<p>click this <a href="${resetURL}">Link</a> to reset the password.</p>`,
//           }

//          await testaccount.sendMail(mailoptions ,function(error,info){
//              if(error){
//                console.log(error);
//              }
//              else{
//                console.log("email send" + info.response);
//              }
//           });
        

//           res.status(200).json({message:"mail sended"});
//         }
//         else{
//            res.status(400).send({message: "user not found"}); 
//            console.log("user not found");
//         }
//      }
//      catch(error){
//       res.status(500).send(error.message); 
//      }
// }

exports.linksend = async (req, res) => {
   const { email } = req.body;
   try {
       const usercheck = await usermodel.findOne({ email });

       if (usercheck) {
           console.log("check the id is correct", usercheck._id);
           const token = jwt.sign({ id: usercheck._id, email: email }, process.env.SECRET_KEY, { expiresIn: '2h' });
           const resetURL = `http://localhost:3000/reset-password/${token}`;

           const mailoptions = {
               from: process.env.GMAIL_USER,
               to: usercheck.email,
               subject: `Change your password using the below link`,
               html: `You requested for password reset<p>Click this <a href="${resetURL}">Link</a> to reset the password.</p>`,
           };

           await testaccount.sendMail(mailoptions);
           console.log("Email sent successfully.");

           return res.status(200).json({ message: "Mail sent" });
       } else {
           console.log("User not found");
           return res.status(400).send({ message: "User not found" });
       }
   } catch (error) {
       console.error("Error occurred: ", error.message);
       return res.status(500).send(error.message);
   }
};
