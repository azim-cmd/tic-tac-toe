let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [[0,1,2], 
[3, 4, 5],
[6, 7, 8], 
[0, 3, 6],
[1, 4, 7],
[2, 5, 6],
[0, 4, 8],
[2, 4, 6]];



let player1Pattern;
let player2Pattern;

let counter = 0;

let draw = () => {
    if(counter === 9){
        msgContainer.classList.remove("hide");
        msg.innerText = "This Game resulted as Draw";
        }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        counter++;
        console.log("button is clicked");
        box.style.backgroundColor = "white";
        if(turnO === true){
            box.innerText = "O"
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        draw();
    })
});


const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if( pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner is ", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.style.backgroundColor = "white";
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.style.backgroundColor = "white";
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click", resetGame);

