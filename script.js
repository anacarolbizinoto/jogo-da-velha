const cellElements = document.querySelectorAll("[data-cell]");
const winningMessageTextElement = document.querySelector(
    "[data-winning-message-text]"
  );
  const winningMessage = document.querySelector("[data-winning-message]");
  const restartButton = document.querySelector("[data-restart-button]");


let isCircleTurn = false;

 const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
 ]


 const endGame = (isDraw) => {
    if (isDraw) {
      winningMessageTextElement.innerText = "Empate!";
    } else {
      winningMessageTextElement.innerText = isCircleTurn
        ? "O Venceu!"
        : "X Venceu!";
    }

    const checkForWin = (currentPlayer) => {
        return winningCombinations.some((combination) => {
          return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
          });
        });
      };
const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd)
}

const swapTurns = () => {
    isCircleTurn = !isCircleTurn
}

const handleClick = (e) => {
    // colocar X ou O
    const cell = e.target;
    const classToAdd = isCircleTurn ? 'circle' : 'x';
    
    cell.classList.add(classToAdd);

    // verificar vitória

const isWin = checkForWin(classToAdd);
    console.log("winner");

    // verificar empate
    if (isWin) {
        endGame(false);
    } else if (isDraw) {
        endGame (true);
    } else {
    // mudar de simbolo
    swapTurns();
    }
 };

for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, { once:true});
}
