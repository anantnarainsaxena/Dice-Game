var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6);
randomNumber1=randomNumber1+1;
var randomdiceimage="dice"+randomNumber1+".png";
var randomimagesource="images/"+randomdiceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6);
randomNumber2=randomNumber2+1;
var randomdiceimage2="dice"+randomNumber2+".png";
var randomimagesource2="images/"+randomdiceimage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimagesource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }