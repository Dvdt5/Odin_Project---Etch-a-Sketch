const playerInput = document.getElementById("tile-number-input");
const playerInputBtn = document.getElementById("change-number-btn");
const paintBoard = document.getElementById("paint-board");

let currentNumberOfTiles = 5;

function displayTiles() {
    paintBoard.innerHTML = ``;
    for (let i = 0; i < (currentNumberOfTiles*currentNumberOfTiles);i++) {
        const newTile = document.createElement("div");
        paintBoard.appendChild(newTile);
        newTile.classList.add("color-tile");
        newTile.style.width = (500 / currentNumberOfTiles) + "px";
        newTile.style.height = (500 / currentNumberOfTiles) + "px";
    }
}

function setTiles(numberOfTiles) {
    if (numberOfTiles > 100 || numberOfTiles < 1){
        alert("Please enter a number between 0 and 101");
        return;
    }
    if (isNaN(numberOfTiles)){
        alert("Please enter a number");
        return;
    }
    currentNumberOfTiles = numberOfTiles;
    displayTiles();
}



playerInputBtn.addEventListener("click", ()=>setTiles(playerInput.value));