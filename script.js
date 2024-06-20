let click = false;
document.addEventListener("DOMContentLoaded", function () {
  createBoard(16, "red");
  let colorChoice = "yellow";
  let color = "yellow";

  let body = document.querySelector("body").addEventListener("click", (e) => {
    if ((e.target.tagName = "button")) {
      click = !click;
    }

    let playMsg = document.querySelector("#playMsg");

    if (click) {
      playMsg.innerHTML = "You can draw now";
    } else {
      playMsg.innerHTML = "Click to draw";
    }
  });

  let popupBtn = document.querySelector("#popup");
  popupBtn.addEventListener("click", function () {
    let size = getSize();
    createBoard(size, colorChoice);
  });
});

function setColor(colorChoice) {
  color = colorChoice;
}

function colorDiv() {
  // let color;

  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
    } else if (color === "black") {
      this.style.backgroundColor = "black";
    } else {
      this.style.backgroundColor = "yellow";
    }
  }
}

function createBoard(size, color) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;

  board.style.gridTemplateRows = `repeat(${size},1fr)`;
  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    // div.style.backgroundColor = color;
    div.style.border = "1px solid white";

    board.insertAdjacentElement("beforeend", div);
    div.addEventListener("mouseover", colorDiv);
  }
}

function reset() {
  let divs = document.querySelectorAll("div");
  divs.forEach((element) => (element.style.backgroundColor = "white"));
}

function eraser() {
  let div = document.querySelector("div");
  div.addEventListener("mouseover", () => {
    this.style.backgroundColor = "white";
  });
}

function getSize() {
  let input = prompt("What wiil be the size of board?");
  const message = document.querySelector("#message");

  if (input === "") {
    message.innerHTML = "please provide valid input!";

    message.style = "background-color:red";
  } else if (input < 1 || input > 70) {
    message.innerHTML = "Board size must be at least 1x1 and less than 70x70";
    message.style = "background-color:red";
  } else if (input >= 1 && input <= 70) {
    message.innerHTML = "Now you can play";
    message.style = "background-color:green";
    return input;
  } else {
    message.innerHTML = "Make sure you're providing valid input!";
    message.style = "background-color:red";
  }
}
