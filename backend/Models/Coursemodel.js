const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const lessonSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     content: { type: String, required: true }, 
//     duration: { type: Number, required: true } 
//   });
  

// const moduleSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     lessons: [lessonSchema] 
//   });
                                           
// const courseschema = new mongoose.Schema({
//     title: String,
//     description: String,
//     category: String,
//     duration: Number,
//     enrollements: Number,
//     modules: [moduleSchema],

// })



const contentschema = new mongoose.Schema({
  sectionTitle: String,       
  description: String,  
  topics:[String],     
});

const courseschema = new mongoose.Schema({
  title: String,
  category: String,
  subcategory: String,
  duration: Number,
  learn: [String],
  content: [contentschema],    
  status: String,
  review: String,
  enrollement: String,
  link:String,
});


module.exports = mongoose.model('courselist',courseschema);