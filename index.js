let player = {
    name: "Per",
    chips: 200
}
//  console.log(player.chips) visar 200


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
//När sidan laddas in första gången har variablerna ovan de här värderna


playerEl.textContent = player.name + ": $" + player.chips //stoppar in Per och 200 i HTML elementet med ID player-el

function getRandomCard() { //körs när det simuleras att ett spelkort dras från kortleken
    let randomNumber = Math.floor( Math.random()*13 ) + 1 // genererar ett slumpmässigt tal mellan 1 och 0 https://www.w3schools.com/jsref/jsref_floor.asp
    if (randomNumber > 10) { // Om siffran som genereras är mer än 10 körs koden nedan
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber // om inga andra krav uppfylls returneras nummret som genererades på rad 24
    }
}

function startGame() { //Den här funktionen körs om någon klickar på knappen på rad 10 i HTML dokumentet
    isAlive = true
    let firstCard = getRandomCard() // siffran som hamnar i variabeln firstCard är den som returneras från getRandomCard funktionen
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] // cards är en array som innehåller nummer
    sum = firstCard + secondCard
    renderGame() // Här anropas funktionen på rad 42. DEt betyder att koden mellan rad 43 och 58 körs
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " // Innehållet i HTML elementet med ID cards-el fylls på med hela arrayen cards innehåll
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message //beroende på koden på raderna 49 till 57 innehåller message olika text. Texten stoppas på den här raden in i HTML elementet med ID message-el
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) { // Om både det på vänster och höger sidan är true blir slutresultatet true. Om det ligger till på något annat sätt blir slutresultatet false
        let card = getRandomCard()
        sum += card
        cards.push(card) // Den här koden lägger till objektet card i arrayen cards
        renderGame()        
    }
}
