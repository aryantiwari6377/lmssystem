// const express = require('express');
// const multer = require('multer');
// const cloudinary = require('../../Util/Cloudinary'); 
// const { User } = require('../../Models/Useraccount'); 
// const router = express.Router();


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); 
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

//  const upload = multer({ storage: storage });

// const uploadimg = async (req, res) => {
//   try {
   
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       folder: 'profile_images', 
//       width: 500,
//       height: 500,
//       crop: 'fill',
//     });

   
//     const user = await User.findById("6735c1f113d1d8b0ebfab2e2"); //(req.body.userId);
//     user.profileImage = result.secure_url; 
//     await user.save();

//     res.status(200).json({
//       message: 'Profile image uploaded successfully!',
//       profileImage: result.secure_url,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error uploading image',
//       error: error.message,
//     });
//   }
// };

// module.exports = {
//     upload,
//     uploadimg,
//   };

const express = require('express');
const multer = require('multer');
const cloudinary = require('../../Util/Cloudinary'); 
const { User } = require('../../Models/Useraccount'); 
const router = express.Router();



exports.uploadimg = async (req, res) => {
  try {
     
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'profile_images',
      width: 500,
      height: 500,
      crop: 'fill',
    });
    
    const user = await User.findById(req.user.id); // Replace with req.body.userId for dynamic user
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.profileImage = result.secure_url;
    await user.save();

    res.status(200).json({
      message: 'Profile image uploaded successfully!',
      profileImage: result.secure_url,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({
      message: 'Error uploading image',
      error: error.message,
    });
  }
};



