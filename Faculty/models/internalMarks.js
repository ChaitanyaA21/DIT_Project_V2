// model.js
const mongoose = require('mongoose');

// Define schema
const internalMarksSchema = new mongoose.Schema({
    // rollno: { type: String, required: true },
    // mid_1: { type: Number,required: true ,min:0,max:30},
    // assignment_1:{ type: Number,required: true ,min:0,max:5},
    // viva_1: { type: Number,required: true ,min:0,max:5},

    // mid_2: { type: Number,min:0,max:30},
    // assignment_2:{ type: Number,min:0,max:5},
    // viva_2: { type: Number,min:0,max:5}
    rollno: { type: String, required: true },
    mid: [{
        term: { type: Number, required: true },
        marks: { type: Number, required: true, min: 0, max: 30 },
        assignment: { type: Number, required: true, min: 0, max: 5 },
        viva: { type: Number, required: true, min: 0, max: 5 }
    }]
});

// Create model
const InternalMarksModel = mongoose.model('internalMark', internalMarksSchema);

module.exports = InternalMarksModel;



