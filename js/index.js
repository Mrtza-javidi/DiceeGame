// left dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".left-dice").setAttribute("src", "assets/images/dice-" + randomNumber1 + ".png");
// Right dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".right-dice").setAttribute("src", "assets/images/dice-" + randomNumber2 + ".png");

//check Winner
if (randomNumber1 > randomNumber2) {
    document.querySelector(".title").innerHTML = "🏆 Player 1 won!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".title").innerHTML = "Player 2 won! 🏆"
} else {
    document.querySelector(".title").innerHTML = "Draw! 😀"
}