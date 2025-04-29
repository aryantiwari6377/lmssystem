const mongoose = require("mongoose");

const Blockschema = new mongoose.Schema({
      email: String,
});

module.exports = mongoose.model('Blocklist',Blockschema);
