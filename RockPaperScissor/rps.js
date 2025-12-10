let userScore=0;
let compScore=0;
const msg= document.querySelector("#msg");
let choices= document.querySelectorAll(".choice");
const userScorePara= document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

choices.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click", ()=>
    {
    const UserChoice = choice.getAttribute("id");
   console.log("choice was clicked", UserChoice); 
   playGame(UserChoice);      
    });
});


const playGame=( userChoice) => {

    console.log("user choice= ", userChoice);
    //Generate Computer Choice Also
    const compChoice= genComputerChoice();
    console.log(compChoice);

    if(userChoice === compChoice)
    {
        console.log("game was drawn")
        msg.innerText= "Game was drawn";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp choice can be paper,scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper")
        {
            userWin = compChoice=== "scissors" ? false : true;
        } else {
            userWin= compChoice === "rock" ? false : true ;
        }

        showWinner(userWin,userChoice,compChoice );
    }
};

const genComputerChoice = () =>{
        //rock,paper,scissors
    const options = ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];

    //range of randIdx will be from 0 to 2 due to multiplication of 3 with range of default 0 to 1
};


const showWinner = (userWin,UserChoice,compChoice) =>{
if(userWin)
{
    userScore++;
    userScorePara.innerText = userScore; 
    console.log("you win!");
    msg.innerText= `You Win! ${UserChoice} beats ${compChoice}`;
    msg.style.backgroundColor= "green";
}
else {
    compScore++;
    compScorePara.innerText=compScore;
    console.log("You Lose");
    msg.innerText= `You Lose! ${compChoice} beats ${UserChoice}`;
    msg.style.backgroundColor= "red";
}
};
