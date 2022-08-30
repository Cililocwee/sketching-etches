function genBoard(number){    
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());  //refreshes the divs on resize

    board.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    for (let i = 0; i < (number * number); i++){
        let square = document.createElement('div');
        square.addEventListener('mouseenter', () => {
            if (prideFlag){
                selectRainbow();
                square.style.backgroundColor = `${currentColor}`;
            } else {
            square.style.backgroundColor = `${currentColor}`;
            }
        })
        square.className = "square";
        board.insertAdjacentElement("beforeend", square);
    }
}

function refreshBoard(){
    const resetbtn = document.getElementById("inputfield");
    currentColor = "";
    prideFlag = false;
    genBoard(resetbtn.value);
}

function selectBlack(){
    currentColor = "black";
    //console.log(currentColor); //debugging purposes
}

function selectRed(){
    currentColor = "red";
    //console.log(currentColor); //debugging purposes
}

function selectWhite(){
    currentColor = "white";
    //console.log(currentColor); //debugging purposes
}

function selectRainbow(){
    let rainbow = ['red','orange','yellow','green','blue','indigo','violet'];
    let leprachaun = Math.floor(Math.random()*rainbow.length);
    currentColor = rainbow[leprachaun];
    //console.log(currentColor); //debugging purposes
    if (prideFlag === false){currentColor = ""};
}

let prideFlag = false;
const potOfGold = document.getElementById("rainbow");

//toggles rainbow mode
potOfGold.addEventListener('click', () => {
    if (prideFlag){
        prideFlag = false;
        currentColor = "nope"; //stops the rainbow
    } else {
        prideFlag = true;
    }
    //console.log(prideFlag); //debugging purposes
})

let currentColor = ""; //default nothing

function changeSize(input){
    if (input < 2 || input > 100){
        console.log('Error');
    } else {
    genBoard(input,currentColor);
    }
}

genBoard(16); //default size on render

