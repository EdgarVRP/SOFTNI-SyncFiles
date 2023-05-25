const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 3002;
app.use(express.json());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
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
    cb(null, fileName);
  },
});
// Configurar el middleware Multer
const upload = multer({ storage: storage });
//Para mostrar los archivos en el navegador
app.use("/uploads", express.static("uploads"));
app.post("/upload", upload.single("file"), (req, res) => {
  console.log("File uploaded successfully");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});