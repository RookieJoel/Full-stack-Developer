var randomNumer1 = Math.floor(Math.random()*6) +1;
if(randomNumer1 === 1){
    document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
}
else if(randomNumer1 === 2){
    document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
}
else if(randomNumer1 === 3){
    document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
}
else if(randomNumer1 === 4){
    document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
}
else if(randomNumer1 === 5){
    document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
}
else if(randomNumer1 === 6){
    document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
}

var randomNumer2 = Math.floor(Math.random()*6) +1;
if(randomNumer2 === 1){
    document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
}
else if(randomNumer2 === 2){
    document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
}
else if(randomNumer2 === 3){
    document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
}
else if(randomNumer2 === 4){
    document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
}
else if(randomNumer2 === 5){
    document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
}
else if(randomNumer2 === 6){
    document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
}

if(randomNumer1 > randomNumer2){
    document.querySelector("h1").textContent = "✌️ Player 1 wins!";
}
else if(randomNumer1 < randomNumer2){
    document.querySelector("h1").textContent = "Player 2 wins! ✌️";
}
else{
    document.querySelector("h1").textContent = "✌️ Draw! ✌️";

}
// document.querySelector("img").onload