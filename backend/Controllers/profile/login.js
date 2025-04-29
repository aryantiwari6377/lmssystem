const bcrypt = require('bcryptjs');
const usermodel = require("../../Models/Useraccount");
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');
const booklistmodel = require('../../Models/Blocklist');

dotenv.config();

exports.login = async (req, res) => {
    const { email, password } = req.body;   
        console.log(email, password);
    try {
        
        if (!email || !password) {
            return res.status(400).send("Please fill all fields");
        }
         
        const checkblocklist = await booklistmodel.findOne({email});

         if( checkblocklist){
             return res.status(403).json({message: "user is in blocklist"});
         }
         
        const user = await usermodel.findOne({ email });

        if (!user) {
            
            return res.status(404).json({ message: "User not found" });
        }
        
        if (!user.password) {
            return res.status(500).json({ message: "Password not found in user record" });
        }
         
        const isMatch = await bcrypt.compare(password, user.password);
           
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        const token = jwt.sign({id: user._id, email: user.email}, process.env.SECRET_KEY, {expiresIn:'2h' });
        const refreshtoken = jwt.sign({id: user._id, email: user.email}, process.env.REFRESH_KEY, {expiresIn:'30d' });
          
        console.log('Login successful');
        return res.status(200).json({ message: 'Login successful', token, refreshtoken });
    } catch (error) {
        res.status(500).send(error.message); 
        console.log(error);
    }
};
