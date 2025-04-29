const mongoose = require("mongoose");
const enrollschema = new mongoose.Schema({
    email: String,
    course: [String],
})


module.exports = mongoose.model('Enrollment',enrollschema);