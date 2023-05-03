//Se configura el servidor y se usa multer para subir archivos
const express = require("express");
const app = express();
const multer = require("multer");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    //cb('',Date.now()+file.originalname);
    //Se guarda la fecha, el nombre del archivo y su extensión
    //se formatea la fecha a un formato legible aaa-mm-dd
    const date = new Date();
    const formattedDate =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      "-";
      //Se borran los espacios en blanco del nombre del archivo
    const fileName = file.originalname.replace(/\s/g, "_");
    cb(null, formattedDate + fileName);
  },
});

const upload = multer({ storage: storage });
//Subiran los archivos, se guardara el nombre del archivo y su extensión

//Para mostrar los archivos en el navegador
app.use("/uploads", express.static("uploads"));

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

app.listen(3002, () => {
  console.log("Example app listening on port 3002!");
});
