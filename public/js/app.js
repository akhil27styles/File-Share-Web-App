const sendMail=document.getElementById('sendMail');



sendMail.addEventListener('click',(e)=>{

  e.preventDefault()

  const to=document.getElementById('to').value;
  const from=document.getElementById('from').value;
  const uuid=document.getElementById('uuid').href;
  const alert=document.getElementById('alert');

  alert.style.display="block";
 
  
  
  UUID= uuid.split("/").splice(-1, 1)[0]


  fetch("/api/files/send", {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ 
      uuid:UUID,
      emailTo:to,
      emailFrom:from,
    }),
  })
  .then(data=>{
    return data.json()
  })
  .then(response=>{
    if(response.success){
      alert.innerHTML=response.success; 
    }
    if(response.error){
      alert.innerHTML=response.error; 
    }
      
  })
  .catch((err) =>alert(err));


 
});
