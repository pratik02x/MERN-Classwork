function addelement(){
   const newpara=document.createElement("p");
   newpara.innerText="this is new parameter text";
   document.body.appendChild(newpara);
}