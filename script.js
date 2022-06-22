const cellElements = document.querySelectorAll("[data-cell]");

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


    // verificar empate



    // mudar de simbolo

    swapTurns();
}

for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, { once:true});
}
