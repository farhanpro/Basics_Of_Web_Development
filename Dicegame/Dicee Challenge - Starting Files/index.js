//var x = document.getElementsByClassName("img1");

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

 var randomnumber =   randomIntFromInterval(1,6);
 var randomNumberImg = "dice" + randomnumber + ".png";
 var imagesrc = "images/" + randomNumberImg;

 var img1 = document.querySelectorAll("img")[0];
 img1.setAttribute("src",imagesrc);


 var randomnumber2 = randomIntFromInterval(1,6);
 var randomNumberImg2 = "dice" + randomnumber2 + ".png";
 var imagesrc2 = "images/" +randomNumberImg2; 
 var img2 = document.querySelectorAll("img")[1];
 img2.setAttribute("src",imagesrc2);