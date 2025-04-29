const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const useraccountmodel = require("../../Models/Useraccount");

dotenv.config();

exports.updatepassword = async(req,res)=>{
           
             
             const { newpassword, token } = req.body;
             console.log(newpassword);
             console.log("token from mail",token);
             let decoded;
             try {
               decoded = jwt.verify(token,process.env.SECRET_KEY);
             } catch (err) {
               return res.status(400).send('Invalid or expired token');
             }
             const user = await useraccountmodel.findById(decoded.id);
             if (!user) {
               return res.status(404).send('User not found');
             }
         
             const salt = await bcrypt.genSalt(10);
             user.password = await bcrypt.hash(newpassword, salt);
             await user.save();
               console.log("password saved");
             res.send('Password has been reset');
}