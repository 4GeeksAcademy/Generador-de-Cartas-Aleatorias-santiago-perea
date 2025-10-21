import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomCard() { 
  let valor = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10 ,'J', 'Q', 'K'];
  let iconos = ['♦', '♥', '♠', '♣'];
  let color = ["black", "red"];
  let randomValor = valor[Math.floor(Math.random() * valor.length)];
  let randomIconos = iconos[Math.floor(Math.random() * iconos.length)];
  let randomColor = color[Math.floor(Math.random() * color.length)];

  console.log(randomValor)
  console.log(randomIconos)
  console.log(randomColor)

  let cardColor = document.querySelector('#top');
  let cardColor1 = document.querySelector('#bottom');
  cardColor.style.color = randomColor; 
  cardColor1.style.color = randomColor; 
 
  document.querySelector('#cardNumber').textContent = randomValor;
  document.querySelector('#top').textContent = randomIconos;
  document.querySelector('#bottom').textContent = randomIconos;
};

window.onload = function() {
  //write your code here
  randomCard(); 
  let boton = document.querySelector('#boton');
  boton.addEventListener("click", () => randomCard()); 
};
