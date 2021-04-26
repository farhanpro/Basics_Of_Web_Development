function   number (max,min){
      return Math.floor(Math.random() * (max - min + min) + min);
}
function looper(number2){
if(number2 == 1){
    img1.setAttribute("src","images/dice1.png");
}
if(number2 == 2){
    img1.setAttribute("src","images/dice2.png");
}
if(number2 == 3){
    img1.setAttribute("src","images/dice3.png");
}
if(number2 == 4){
    img1.setAttribute("src","images/dice4.png");
}
if(number2 == 5){
    img1.setAttribute("src","images/dice5.png");
}
if(number2 == 6){
    img1.setAttribute("src","images/dice6.png");
}
}

var img1 = document.querySelectorAll("img")[0];
var number2 = number(6,1);
looper(number2) ;
var img2 = document.querySelectorAll("img")[1];
img1 = img2
var number3 = number(6,1);
looper(number3) ;

if(number3<number2){
    var container = document.querySelectorAll('h1')[0];
      container.innerHTML = "Player 1 wins" ;
}
if(number2<number3){
    document.querySelectorAll('h1')[0].innerHTML = "Player 2 wins";
}
if(number2 === number3){
    document.querySelectorAll('h1')[0].innerHTML = "Draw";
}