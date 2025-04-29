const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profileimg: String,
  isblocked: {
    type: Boolean,
    default: false,
  },

})

userschema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('useraccount', userschema);

