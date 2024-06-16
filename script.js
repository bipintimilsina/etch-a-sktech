document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);

});

function createBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;

  board.style.gridTemplateRows = `repeat(${size},1fr)`;
  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = "yellow";
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let input = prompt("What wiil be the size of board?");
  const message=document.querySelector("#message")

if(input==="")
{
  
}



}
