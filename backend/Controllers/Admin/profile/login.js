const bcrypt = require('bcryptjs');

const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');

const adminmodel = require("../../../Models/Adminaccount");

dotenv.config();

exports.adminlogin = async (req, res) => {
    const { formData } = req.body;   
    console.log("Data", formData)

    const email = formData.email;
    const password = formData.password;

        console.log(formData);
      

    try {
        
        if (!email || !password) {
            return res.status(400).send("Please fill all fields");
        }
         
        const user = await adminmodel.findOne({email});
         
        

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
