const express = require('express');
const app = express();
const multer = require("multer");
const path = require('path');
app.post('/file_upload', multer({dest: '/tmp/sample/'}).single('file'), (req, res) => {
    console.log(req.file.path, req.file.originalname);
    res.end("upload!");
});

app.use(express.static(path.join(__dirname, '/')));

var server = app.listen(58080, () => {
    console.log("listening at port %s", server.address().port);
});
