const usermodel = require("../../Models/Useraccount");
const dotenv = require("dotenv");

dotenv.config();

exports.signup = async(req,res)=>{
      const {name, email, password} = req.body;
      // if(!name || !email || !password){
      //        return res.status(401).json({message: "fill all fields"});
      // }

      // console.log(req.body);
       
      try{
           const user = await usermodel.findOne({email});
           if(user){
            return res.send("user is already exist");
           }
          else{
            const newuser = new usermodel({name,email,password});
            await newuser.save();
            res.status(200).json({message:"account is created"});
          }
      }
      catch(error){
        console.log(error);
            res.status(500).send(error);
      }
};
