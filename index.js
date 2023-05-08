//Se configura el servidor y se usa multer para subir archivos
const express = require("express");
const app = express();
const multer = require("multer");
//Se habilita cors para que se pueda acceder desde cualquier lugar
const cors = require("cors");
app.use(cors());
//Se importa dotenv para usar las variables de entorno
require("dotenv").config();
const port = process.env.PORT || 3002;
app.use(express.json());

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
    //console.log(name);
    //console.log(req);
    //cb(null, formattedDate +req.body.nombreArchivo+"-"+fileName);
    cb(null, fileName);
  }
});
// Configurar el middleware Multer
const upload = multer({ storage: storage });
//Subiran los archivos, se guardara el nombre del archivo y su extensión

//Para mostrar los archivos en el navegador
app.use("/uploads", express.static("uploads"));

app.post("/upload", upload.single("file"), (req, res) => {
  console.log("File uploaded successfully");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
