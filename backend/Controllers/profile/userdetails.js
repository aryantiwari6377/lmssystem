const Useraccount = require("../../Models/Useraccount");

exports.userdetails = async(req,res) => {
          const user = await Useraccount.findById(req.user.id).select('-password');
          console.log("this is user",user);
          if(!user){
            res.status(404).json({message:"user not found please login"});
          }
          res.status(200).json({user});

    }