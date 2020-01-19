let userScore = 0;
let compScore = 0;
const userScoreSection = document.getElementById("userScore");
const compScoreSection = document.getElementById("compScore");
const scoreBoardSection = document.querySelector(".scoreBoard");
const resultSection = document.querySelector(".result p");
const rockSection = document.getElementById("rock");
const paperSection = document.getElementById("paper");
const scissorsSection = document.getElementById("scissors");


function win(user, computer) {
    console.log("User Wins! 🔥🔥🔥");
    userScore++;
    userScoreSection.innerHTML = userScore;
    compScoreSection.innerHTML = compScore;
    resultSection.innerHTML = user + " beats " + computer + ". You Win!";
    document.getElementById(user).classList.add('greenGlow');
    setTimeout(function(){ document.getElementById(user).classList.remove('greenGlow') }, 500);
}
function lose(user, computer){
    console.log("User Loses! :👎");
    compScore++;
    userScoreSection.innerHTML = userScore;
    compScoreSection.innerHTML = compScore;
    resultSection.innerHTML = user + " loses to " + computer + ". You Lose!";
    document.getElementById(user).classList.add('redGlow');
    setTimeout(function(){ document.getElementById(user).classList.remove('redGlow') }, 500);
}
function draw(user, computer){
    console.log("Draw! =");
    resultSection.innerHTML = "No Winner!";
    document.getElementById(user).classList.add('grayGlow');
    setTimeout(function(){ document.getElementById(user).classList.remove('grayGlow') }, 500);
}
function getCompChoice(){
    const compChoice = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return compChoice[randomNumber];
}
function game(userChoice){
    const compChoice = getCompChoice();
    console.log("User chose, " + userChoice);
    console.log("Comp chose, " + compChoice);
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice , compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice , compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice , compChoice);
            break;
    }
}
function main(){
    rockSection.addEventListener('click', function(){
        game("rock");
    });
    paperSection.addEventListener('click', function(){
        game("paper");
    });
    scissorsSection.addEventListener('click', function(){
        game("scissors");
    });
}

main();