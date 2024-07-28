// let a=document.getElementById("show");
let a=document.querySelector("#show")
let b=document.getElementById("container");
a.addEventListener("click",()=>{
b.addEventListener("mousedown",()=>{b.style.Color='blue'})
if (a.textContent==="show")
{a.innerHTML="hide";
a.style.backgroundColor="red";
b.style.display='block';

b.style.display='block'}
else if (a.textContent==="hide")
{a.textContent="show";
a.style.backgroundColor="blue";
b.style.display='none';
}



})
