// const scoremodel = require("../../Models/Scoreboard");

// exports.score = async(req,res)=>{
       
//         const user = scoremodel.findById(req.user.id).select('-password');
       
//         if(!user){
//             res.send("user not found");
//         }
//         res.status(200).json({user});
        
// }
const scoremodel = require("../../Models/Scoreboard");

exports.score = async (req, res) => {
    try {
         
        const user = await scoremodel.findOne({ userid: req.user.id }).select('-password');

        // Check if the user exists in the score model
        if (!user) {
            return res.status(404).send("User not found");
        }

        // Send the user data if found
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error fetching user score:", error);
        res.status(500).send("Server error");
    }
};
