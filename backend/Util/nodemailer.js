// const nodemailer = require("nodemailer");
// const { getMaxListeners } = require("../Models/Useraccount");
// const dotenv = require('dotenv');
// dotenv.config();

// exports.testaccount = nodemailer.createTransport({
//      service: "gmail",
//      port: 465,
//      secure: true,
//      auth:{
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//      }
// })
// Util/nodemailer.js
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create the transporter
const testaccount = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS,   // Your Gmail password or app-specific password
    },
});



// Export the transporter
exports.testaccount = testaccount;
