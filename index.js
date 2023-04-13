//Se configura el servidor y se usa multer para subir archivos
const express = require('express');
const app = express();
const multer = require('multer');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb('',Date.now()+file.originalname);
  }
})

const upload = multer({ storage: storage });
//Subiran los archivos, se guardara el nombre del archivo y su extensión

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});