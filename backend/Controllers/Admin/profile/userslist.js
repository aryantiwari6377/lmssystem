const usermodel = require("../../../Models/Useraccount");

exports.adminuserlist= async(req,res)=>{
 try{
     const users = await usermodel.find();
     console.log(users);
     res.status(200).json({users});
 }
 catch(error){
     res.status(500).json({error});
 }
  
}