let boxes=document.querySelectorAll(".box");
let turnes=document.querySelector(".turnes");
let contaner=document.querySelector(".contaner");
let mainarray=Array.from(boxes);
let choosen=0;


boxes.forEach(box => {
  box.addEventListener("click",function(){
    if(choosen % 2 == 0){
      box.classList.add("ClassX");
      box.innerHTML="X";
      choosen++;
      turnes.innerHTML=`O Turn`;
    }else{
      box.classList.add("ClassO");
      box.innerHTML="O";
      choosen++;
      turnes.innerHTML=`X Turn`;
    }
    winner();
  })
});

function endit(num1,num2,num3){
  num1.classList.add("win");
  num2.classList.add("win");
  num3.classList.add("win");
  turnes.innerHTML=`${num1.innerHTML} Winner`;
  contaner.classList.add("end");

  setInterval(() => {turnes.innerHTML += `.`;}, 1000);
  setTimeout(()=>{location.reload();},3000);
}

function winner(){
  if(mainarray[0].innerHTML == mainarray[1].innerHTML && mainarray[1].innerHTML == mainarray[2].innerHTML && mainarray[0].innerHTML !=""){
    endit(mainarray[0],mainarray[1],mainarray[2])
  }
  if(mainarray[3].innerHTML == mainarray[4].innerHTML && mainarray[4].innerHTML == mainarray[5].innerHTML && mainarray[3].innerHTML !=""){
    endit(mainarray[3],mainarray[4],mainarray[5])
  }
  if(mainarray[6].innerHTML == mainarray[7].innerHTML && mainarray[7].innerHTML == mainarray[8].innerHTML && mainarray[6].innerHTML !=""){
    endit(mainarray[6],mainarray[7],mainarray[8])
  }

  if(mainarray[0].innerHTML == mainarray[3].innerHTML && mainarray[3].innerHTML == mainarray[6].innerHTML && mainarray[0].innerHTML !=""){
    endit(mainarray[0],mainarray[3],mainarray[6])
  }
  if(mainarray[1].innerHTML == mainarray[4].innerHTML && mainarray[4].innerHTML == mainarray[7].innerHTML && mainarray[1].innerHTML !=""){
    endit(mainarray[1],mainarray[4],mainarray[7])
  }
  if(mainarray[2].innerHTML == mainarray[5].innerHTML && mainarray[5].innerHTML == mainarray[8].innerHTML && mainarray[2].innerHTML !=""){
    endit(mainarray[2],mainarray[5],mainarray[8])
  }

  if(mainarray[0].innerHTML == mainarray[4].innerHTML && mainarray[4].innerHTML == mainarray[8].innerHTML && mainarray[0].innerHTML !=""){
    endit(mainarray[0],mainarray[4],mainarray[8])
  }
  if(mainarray[2].innerHTML == mainarray[4].innerHTML && mainarray[4].innerHTML == mainarray[6].innerHTML && mainarray[2].innerHTML !=""){
    endit(mainarray[2],mainarray[4],mainarray[6])
  }
}