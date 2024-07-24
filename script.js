const playerInput = document.getElementById("tile-number-input");
const playerInputBtn = document.getElementById("change-number-btn");
const paintBoard = document.getElementById("paint-board");
const colorsContainer = document.getElementById("colors");

let currentNumberOfTiles = 5;
let currentColor = "Black";
let canPaint = true;

function displayColorOptions() {
    const colorsOptions = ["Red", "Green" ,"Blue", "Yellow", "Violet", "Orange", "Cyan", "Gray", "" ,"Brown", "Purple", "Chartreuse", "Cornsilk", "Black", "White"]
    for (let i = 0; i < 15;i++) {
        const colorTile = document.createElement("div");
        colorsContainer.appendChild(colorTile);
        colorTile.classList.add("paint-tile");
        colorTile.style.width = 100 + "px";
        colorTile.style.height = 100 + "px";
        colorTile.style.backgroundColor = colorsOptions[i];
        colorTile.addEventListener("click", ()=>currentColor = colorsOptions[i]);
    }
}

function displayTiles() {
    paintBoard.innerHTML = ``;
    for (let i = 0; i < (currentNumberOfTiles*currentNumberOfTiles);i++) {
        const newTile = document.createElement("div");
        paintBoard.appendChild(newTile);
        newTile.classList.add("color-tile");
        newTile.style.width = (500 / currentNumberOfTiles) + "px";
        newTile.style.height = (500 / currentNumberOfTiles) + "px";
        newTile.addEventListener("mouseover", ()=>newTile.style.backgroundColor = currentColor);
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


displayColorOptions();
playerInputBtn.addEventListener("click", ()=>setTiles(playerInput.value));
addEventListener("keydown", (key)=>{
    if (!key.ctrlKey) {return;}
    if (canPaint) {
        paintBoard.style.pointerEvents = "none";
        canPaint = false;
    } else {
        paintBoard.style.pointerEvents = "all";
        canPaint = true;
    }
    
    
});