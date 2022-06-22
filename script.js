const cellElements = document.querySelectorAll("[data-cell]");

let isCircleTurn = false;

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
