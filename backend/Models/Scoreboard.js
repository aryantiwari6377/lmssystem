const mongoose = require("mongoose");

// const testscoresschema = new mongoose.Schema({
//       verbal: Number,
//       numerical: Number,
//       abstract: Number,
//       personality: Number
// })

// const scoreschema = new mongoose.Schema({
//     userid: {
//         type: mongoose.Schema.Types.ObjectId,
//          ref: 'useraccount',
//          required: true
//     },
//     score: [testscoresschema]
// });

const scoreschema = new mongoose.Schema({
        userid: {
            type: mongoose.Schema.Types.ObjectId,
             ref: 'useraccount',
             required: true
        },
        Verbal: Number,
        Numerical: Number,
        Abstract: Number,
        Personality: Number
    });
       
module.exports = mongoose.model('Scoreboard',scoreschema);