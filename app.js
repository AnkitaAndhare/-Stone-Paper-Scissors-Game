let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); // acces choices
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random() * 3); // when we want range from 0 to n then multiply by n-1 to random no and to get only decimal val floor
  return options[ranIdx];
};

const drawGame = () => {
  console.log("geme was draw.");
  msg.innerText = "Game was draw..Play again!";
  msg.style.backgroundColor = "081b31";
};

const showwinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  // generate computer choice = module
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // compchoices = scissors , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "scissors") {
      // paper, rock
      userWin = compChoice === "rock" ? false : true;
    } else {
      // rock , scissors
      userWin = compChoice === "rock" ? true : false;
    }
    showwinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
