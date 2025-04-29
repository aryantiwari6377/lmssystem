// const Blocklistmodel = require("../../../Models/Blocklist");
// const usermodel = require("../../../Models/Useraccount");

// exports.Blocklist = async(req,res) =>{
//      try{
//            const {email} = req.body;
//            const newdata = new Blocklistmodel({email});
//            await newdata.save();
           
//            const user = await usermodel.find(email); 
//            if(user){
//                user.idblocked = true;
//                await user.save();
//            }
//            if(!user){
//                res.status(404).json({message: "user not found"});
//            }
//           res.status(200).json({message: "user added"});
//      }
//      catch(error){
//         res.status(500).json({error});
//      }
// }

const Blocklistmodel = require("../../../Models/Blocklist");
const usermodel = require("../../../Models/Useraccount");

exports.Blocklist = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

      
        const newdata = new Blocklistmodel({ email });
        await newdata.save();

      
        const user = await usermodel.findOne({ email });
        if (user) {
            user.isblocked = true; 
            await user.save();
        } else {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User added to blocklist" });
    } catch (error) {
        res.status(500).json({ error: error.message || "Internal server error" });
    }
};
