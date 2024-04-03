const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    path: String,
    contentType: String
});

module.exports = mongoose.model('File', fileSchema);
