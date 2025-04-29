const mongoose = require("mongoose");

const optionschema = new mongoose.Schema({
      option1:String,
      option2:String,
      option3:String,
      option4:String
})

const categoryquestionschema = new mongoose.Schema({
    quesionstext: String,
    options: [optionschema],
    correctanswer: Number
}) 

const questionschema = new mongoose.Schema({
    category: String,
    questions: [ categoryquestionschema]
})


module.exports = mongoose.model('Question',questionschema);