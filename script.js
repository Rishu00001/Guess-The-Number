let x = Math.floor((Math.random()*100)+1)
console.log(x)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuess = []
let numguess = 1

let playGame = true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess) || ((guess<1) || (guess > 100))){
        alert("Please Enter valid number")
    }
    else{
        prevGuess.push(guess)
        if(numguess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. The number was ${x}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess) {
    let gap = Math.abs(x - guess); 
    if (guess === x) {
        displayMessage(`You Won!`);
        endGame(); 
    } 
    else if (gap <= 5) {
        displayMessage(`You are too close. Keep patience!`);
    } 
    else if (gap <= 15) {
        if (guess > x) {
            displayMessage(`Excellent! Go a little down.`);
        } else {
            displayMessage(`Excellent! Go a little up.`);
        }
    } 
    else if (gap <= 30) {
        if (guess > x) {
            displayMessage(`Good try! But still far, go Down.`);
        } else {
            displayMessage(`Good try! But still far, go Up.`);
        }
    } 
    else {
        if (guess > x) {
            displayMessage(`Oops! You are too far, go down.`);
        } else {
            displayMessage(`Oops! You are too far, go up.`);
        }
    }
}


function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`
    numguess++
    lastResult.innerHTML = `${11-numguess}`

}

function displayMessage(message){
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.val = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 class = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newbutton  = document.querySelector('.newGame')
    newbutton.addEventListener('click',function(e){
        x = Math.floor((Math.random()*100)+1)
        prevGuess = []
        numguess = 1
        guessSlot.innerHTML = ''
        lastResult.innerHTML = `${11-numguess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        document.querySelector('.lowOrHi').innerHTML = ' '
        playGame = true
    })
}


