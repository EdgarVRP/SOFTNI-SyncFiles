const btnsubir=document.querySelector('#btnSubir');
const file=document.querySelector('#archivo');
/*Considerando:
      action="http://localhost:3002/upload"
      method="POST"
      enctype="multipart/form-data"
      */


btnsubir.addEventListener('click',(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('file',file.files[0]);
    fetch('http://localhost:3002/upload',{
        method:'POST',
        body:formData
    })
    .then((res)=>res.text())
    .then((data)=>{console.log(data)
    e.preventDefault();})
    .catch((err)=>console.log(err));
});