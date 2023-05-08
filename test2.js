const btnsubir = document.querySelector("#btnSubir");
const file = document.querySelector("#archivo");
/*Considerando:
      action="http://localhost:3002/upload"
      method="POST"
      enctype="multipart/form-data"
      */

//let URL="http://localhost:3002/upload";
let url="https://softni-syncfiles-production.up.railway.app/upload";
let nombre="8-identificacion.pdf";


btnsubir.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData();
  //formData.append("file", file.files[0]);
  formData.append("file", file.files[0], nombre);
  //formData.append("nombreArchivo", "mi_nombre_de_archivo");
  fetch(url, {
    method: "POST",
    body: formData
  })
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
//formData.append('nombreArchivo', 'mi_nombre_de_archivo');
//console.log(formData);
//formData.append('archivo_personalizado', file.files[0], 'mi_nombre_de_archivo');
