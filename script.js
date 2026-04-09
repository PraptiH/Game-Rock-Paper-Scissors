let userScore = 0;
let computerScore = 0;
let selects = document.querySelectorAll('.select')
selects.forEach(select=>{
    select.addEventListener('click',()=>{
        console.log('click')
        const userChoice = select.getAttribute("id")
    })
})
const computerChoice =()=>{
    const options = ['rock','paper','scissor']
    const randomOption =Math.floor(Math.random()*3)
    return options[randomOption]

}
