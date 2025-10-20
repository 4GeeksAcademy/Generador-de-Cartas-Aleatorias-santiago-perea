import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let card = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10 ,'J', 'Q', 'K'];
  let palo = ['♦', '♥', '♠', '♣'];
  let color = ["black", "red"];

  let randomCard = card[Math.floor(Math.random() * card.length)];
  let randomPalo = palo[Math.floor(Math.random() * palo.length)];
  let randomColor = color[Math.floor(Math.random() * color.length)];

  /* console.log(randomCard)
  console.log(randomPalo) */
  console.log(randomColor)

  let cardColor = document.querySelectorAll('cardColor');
  for (let i = 0; i < cardColor.length; i++){
    cardColor.style.color = randomColor;
  }

  document.querySelector('#cardNumber').innerHTML = randomCard;
  document.querySelector('#cardType').innerHTML = randomPalo;
  document.querySelector('#cardTypeRotate').innerHTML = randomPalo;

  /* boton.addEventListener('click', function() {
    resetearIntervalo()
    resetearCard()
  }) */

};
