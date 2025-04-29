const adminmodel = require("../../../Models/Adminaccount");
const dotenv = require("dotenv");

dotenv.config();

exports.adminsignup = async(req,res)=>{
      const {formData} = req.body;
      const name = formData.name;
      const email = formData.email;
      const password = formData.password;
      
      console.log(formData);

      try{
           const user = await adminmodel.findOne({email});
           if(user){
            return res.send("user is already exist");
           }
          else{
            const newuser = new adminmodel({name,email,password});
            await newuser.save();
            res.status(200).json({message:"account is created"});
          }
      }
      catch(error){
        console.log(error);
            res.status(500).send(error);
      }
};
