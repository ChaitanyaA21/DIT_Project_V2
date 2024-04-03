const File = require('../models/noticeBoard');

async function uploadFile(req, res) {
    try {
        const file = new File({
            name: req.file.originalname,
            path: req.file.path,
            contentType: req.file.mimetype
        });
        await file.save();
        res.send('File uploaded successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function getFile(req, res) {
    try {
        const file = await File.findById(req.params.id);
        if (!file) {
            return res.status(404).send('File not found');
        }
        res.setHeader('Content-Type', file.contentType);
        res.sendFile(file.path);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send(err.message);
    }
}
async function getAllFile(req, res) {
    try {
        const files = await File.find();
        if (!files || files.length === 0) {
            return res.status(404).send('No files found');
        }
        res.json(files);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send(err.message);
    }
}

module.exports = { uploadFile, getFile,getAllFile};
