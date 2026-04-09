let userScore = 0;
let computerScore = 0;
let userWin = true
let message = document.getElementById("message")
let selects = document.querySelectorAll('.select')
selects.forEach(select => {
    select.addEventListener('click', () => {
        console.log('click')
        const userChoice = select.getAttribute("id")
        playGame(userChoice)
    })
})
const generateComputerChoice = () => {
    const options = ['rock', 'paper', 'scissor']
    const randomOption = Math.floor(Math.random() * 3)
    return options[randomOption]

}
const playGame = (userChoice) => {
    console.log("user", userChoice)
    const computerChoice = generateComputerChoice()
    console.log("comupter", computerChoice)

    if (userChoice === 'rock') {
        userWin = computerChoice === "paper" ? false : true
    }
    else if (userChoice === 'paper') {
        userWin = computerChoice === "scissor" ? false : true
    }
    else if (userChoice === 'scissor') {
        userWin = computerChoice === "rock" ? false : true
    }
    showWinner(userWin, userChoice, computerChoice)
}

const showWinner = (userWin, userChoice, computerChoice) => {
     if (userChoice === computerChoice) {
        message.innerText = `It's a draw. Play again`
    }
    else if (userWin) {
        message.innerText = `Your ${userChoice} win against ${computerChoice}.`
        message.style.backgroundColor="green"
    }
    else {
        message.innerText = `Your ${userChoice} lose against ${computerChoice}.`
        message.style.backgroundColor="red"
    }
}
