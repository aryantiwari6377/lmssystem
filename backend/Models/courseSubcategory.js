const mongoose = require('mongoose');


const subcategory = new mongoose.Schema({
           category:String,
           subcategory: [String],
});

module.exports = mongoose.model('coursesubcategory',subcategory);
