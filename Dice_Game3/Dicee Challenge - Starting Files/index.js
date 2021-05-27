function   number (max,min){
      return Math.floor(Math.random() * (max - min + min) + min);
}
var numgen = number(6,1);
var image = 'images/Dice' + numgen;
var imageMod = image + '.png';
document.querySelectorAll('img')[0].setAttribute('src',imageMod);

var numgen2 = number(6,1);
var image2 = 'images/Dice' + numgen2 +'.png';
document.querySelectorAll('img')[1].setAttribute('src',image2);

if (numgen2 < numgen){
    document.querySelectorAll('h1')[0].innerHTML = "Player 1 wins";
}
if(numgen < numgen2){
    document.querySelectorAll('h1')[0].innerHTML = "Player 2 wins";
}
if(numgen == numgen2){
    document.querySelectorAll('h1')[0].innerHTML = "Draw";
}