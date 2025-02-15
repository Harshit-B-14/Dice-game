let randomNum1 = Math.floor(Math.random()*6) + 1;
let randomNum2 = Math.floor(Math.random()*6) + 1;
var ImageSource1 = "images/dice" + randomNum1 + ".png" ;
let image1 = document.getElementById("p1Img");
let ImageSource2 = "images/dice" + randomNum2 + ".png" ;
let image2 = document.getElementById("p2Img");
image1.setAttribute("src",ImageSource1);
image2.setAttribute("src",ImageSource2);
let DisplayText = document.querySelector("h1");

if(randomNum1 > randomNum2){
    DisplayText.innerText = "Player 1 Wins";
}
else if(randomNum1 < randomNum2){
    DisplayText.innerText = "Player 2 Wins";
}
else{
    DisplayText.innerText = "Draw";
}