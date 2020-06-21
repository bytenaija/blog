const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
const chokidar = require("chokidar");
const fs = require('fs')
const path = require("path");
const uuid = require('uuid').v4

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/publish', (req, res) => {
  const { markdown } = req.body;
  if (markdown) {
    const filename = uuid() + '.md';
    fs.writeFileSync(path.join(__dirname, 'articles', filename), markdown);
    res.json({success: true, data: markdown})
  }
})

const watcher = chokidar.watch("./articles", {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
});

watcher
    .on("add", (path) => console.log(`File ${path} has been added`))
    .on('unlink', path => console.log(`File ${path} has been removed`));

const addFileToDB = (path) => {
        
}
const removeFileFromDB = (path) => {
        
    }

const PORT = process.env.PORT || 4005;

app.listen(PORT, ()=> console.log('APP listening on port: ',PORT))