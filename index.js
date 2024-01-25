// Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1

var randomDiceImg = '/images/' + 'dice' + randomNumber1 + '.png';


var diceImageElement = document.querySelector('img')

diceImageElement.setAttribute('src', randomDiceImg)

// Player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1

var randomDiceImg2 = '/images/' + 'dice' + randomNumber2 + '.png';

var diceImage2 = document.querySelector('img.img2')

diceImage2.setAttribute('src', randomDiceImg2)

//Winner Alert

var title = document.querySelector('h1')

if (randomNumber1 > randomNumber2){
    var winner = '🚩 Player 1 Wins'
}
else if(randomNumber2 === randomNumber1){
    var winner = 'Draw!'
}
else{
    var winner = 'Player 2 Wins 🚩'
}


title.innerHTML = winner;