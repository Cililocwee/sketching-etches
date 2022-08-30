function genBoard(number){    
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());  //refreshes the divs on resize

    board.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    for (let i = 0; i < (number * number); i++){
        let square = document.createElement('div');
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "black";
        })
        square.className = "square";
        board.insertAdjacentElement("beforeend", square);
    }
}

function refreshBoard(){
    const resetbtn = document.getElementById("inputfield");
    genBoard(resetbtn.value);
}

// nowhere near working
function clearBoard(){
    const squares = document.getElementsByClassName("square");
    for (const square of squares){
        if (square.backgroundColor != "blue"){
            square.backgroundColor = "blue"
        }
    }
};


function changeSize(input){
    if (input < 2 || input > 100){
        console.log('Error');
    } else {
    genBoard(input);
    }
}

genBoard(16);

