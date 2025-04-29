const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const UserAccount = require('../Models/Useraccount');
const {signup} = require("../Controllers/profile/signup");
const {course} = require("../Controllers/course/course");
const {login} = require("../Controllers/profile/login");
const {Question} = require("../Controllers/test/question");
const {getQuestion} = require("../Controllers/test/question");
const {submitscore} = require("../Controllers/test/Calculatescore");
const {linksend} = require("../Controllers/password/linksend");
const { updatepassword } = require("../Controllers/password/updatpassword");
const {logout} = require("../Controllers/profile/logout");
const {userdetails} = require("../Controllers/profile/userdetails");
const {score} = require("../Controllers/test/score");
const {Authmiddleware} = require("../Middlewares/Authmiddleware");
const {uploadimg} = require("../Controllers/profile/profileimg");
const {categorycourse} = require("../Controllers/course/categorycourse");
const {coursesubcategory} = require("../Controllers/course/coursesubcategory");
const {getsubcategory} = require("../Controllers/course/getsubcategory");
const {enrollment} = require("../Controllers/course/enrollment");
const {verifyenroll} = require("../Controllers/course/verifyenroll");
const {getenrolllist} = require("../Controllers/course/getenrolllist");
const {unenroll} = require("../Controllers/course/unenroll");

const {admincourse} = require("../Controllers/Admin/course/addcourse");
const {adminaddsubcategory}= require("../Controllers/Admin/course/addsubcategory");
const {admincourselist} = require("../Controllers/Admin/course/courselist");
const {adminuserlist} = require("../Controllers/Admin/profile/userslist");
const {adminsubcategorylist} = require("../Controllers/Admin/course/subcategorylist");
const {Blocklist} = require("../Controllers/Admin/profile/blocklist");
const {unBlocklist} = require("../Controllers/Admin/profile/unblocklist");
const {adminremovecourse} = require("../Controllers/Admin/course/removecourse");
const { adminsignup} = require("../Controllers/Admin/profile/signup");
const {adminlogin} = require("../Controllers/Admin/profile/login");
const {addquestion} = require("../Controllers/Admin/course/addquestion");
const {adminlist} = require("../Controllers/Admin/profile/addminlist");

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

router.post("/signup", signup);

router.post("/login", login);

router.post("/linksend", linksend);

router.post("/resetpassword", updatepassword);

router.post("/question", Question );

router.get("/getquestion", getQuestion);

router.post("/submitscore",Authmiddleware, submitscore);

router.post("/course", course);

router.post("/logout", logout);

router.get("/profiledetail",Authmiddleware,userdetails);

router.get("/userscore",Authmiddleware,score);

router.post('/upload-profile-image', upload.single('image',uploadimg));

router.get('/categorycourse', categorycourse);

router.post('/subcategory', coursesubcategory);

router.get('/getsubcategory', getsubcategory);

router.post('/enroll', enrollment);

router.get('/verifyenroll', Authmiddleware, verifyenroll);

router.get('/getenrolllist', Authmiddleware, getenrolllist);

// router.post('/upload-image',upload.single('image'), uploadimg);

router.post('/upload-profile-image',  upload.single('image'), uploadimg);

router.post('/unenroll',Authmiddleware, unenroll);


router.post('/uploadProfileImage',Authmiddleware, async (req, res) => {
  try {
    if (!req) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
     
    
    const  {url} = req.body;
    console.log("uploaddata",url);
    let imageString;
if (typeof url === 'object') {
  imageString = JSON.stringify(url); 
  console.log("imageString",imageString);
} else if (typeof url === 'string') {
  imageString = url;  
  console.log("imageString",imageString);
} else {
  return res.status(400).json({ message: 'Invalid file format' });
}
    const userid = req.user.id;
    
    const user = await UserAccount.findById(userid); 
    console.log("User id",user);
    
    if(user){
     user.profileimg= imageString;
   
    await user.save();
    

    res.status(201).json({
      message: 'File uploaded successfully',
      user: {
        image: user.profileimg,
      
      },
  
    });
  }
  else{
    console.log({message: "usernotfound"});
    res.json({message: 'user not find'});
  }
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


//Admin->
router.post('/addminaddcourse', admincourse);

router.post('/adminsubcategory', adminaddsubcategory);

router.get('/admincourselist', admincourselist);

router.get('/adminuserlist', adminuserlist);

router.get('/adminsubcategorylist', adminsubcategorylist);

router.post('/adminblocklist', Blocklist); 

router.post('/adminunblocklist', unBlocklist);

router.delete('/adminremovecourse', adminremovecourse);

router.post('/adminsignup', adminsignup);

router.post('/adminlogin', adminlogin);

router.post('/question', addquestion);

router.get('/adminlist', adminlist);

module.exports = router;

``