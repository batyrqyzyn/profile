

const container = document.getElementById('btn');
let clicked = false;

container.addEventListener('click', ()=>{
  const color = document.getElementById('prof-container');
  if(clicked === false){
    color.style.backgroundColor=' rgb(248, 255, 232)';
    clicked=true;
  }else{
    color.style.backgroundColor='rgb(255, 255, 255)';
    clicked=false;
  }
});