
const Blocklistmodel = require("../../../Models/Blocklist");
const usermodel = require("../../../Models/Useraccount");

exports.unBlocklist = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

      
        const blockeduser = Blocklistmodel.findOne({ email });

         if(!blockeduser){
            return res.status(404).json({ message: "blocked User not found" });
         }
        
         await Blocklistmodel.deleteOne({ email }); 
      
        const user = await usermodel.findOne({ email });
        if (user) {
            user.isblocked = false; 
            await user.save();
        } else {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User remover from blocklist" });
    } catch (error) {
        res.status(500).json({ error: error.message || "Internal server error" });
    }
};
