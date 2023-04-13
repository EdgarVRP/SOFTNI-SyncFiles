//Se configura el servidor y se usa multer para subir archivos
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded');
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});