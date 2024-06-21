let click = false;
let eraserMode = false;


let divs = document.querySelectorAll(".board div");
document.addEventListener("DOMContentLoaded", function () {
  createBoard(16, "red");
  let colorChoice = "yellow";
  let color = "yellow";

  const colorPicker = document.getElementById("colorPicker");
  colorPicker.oninput = (e) => setColor(e.target.value);
  let body = document.querySelector("body").addEventListener("click", (e) => {
    if ((e.target.tagName = "button")) {
      click = !click;
    }

    let playMsg = document.querySelector("#playMsg");

    if (click) {
      playMsg.innerHTML = "You can draw now";
      playMsg.style.backgroundColor='powderblue'
    } else {
      playMsg.innerHTML = "Click to draw";
    }
  });

  let popupBtn = document.querySelector("#popup");
  popupBtn.addEventListener("click", function () {
    let size = getSize();
    createBoard(size, colorChoice);
  });

  let eraserBtn = document.querySelector("#eraser");
  eraserBtn.addEventListener("click", eraser);
});

function setColor(colorChoice) {
  color = colorChoice;
}

function colorDiv() {
  // let color;
  eraserMode=false;
  if (click ) {
eraserMode=false;
    divs.forEach((div) => {
      div.removeEventListener("mouseover", function () {
        this.style.backgroundColor = "white";
      });
      div.addEventListener("mouseover", colorDiv);
    });


    if (color === "random") {eraserMode=false;
      this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
    } else if (color === "black") {
      this.style.backgroundColor = "black";
    } else {
      this.style.backgroundColor = color;
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
  let divs = document.querySelectorAll(".board div");
  divs.forEach((element) => (element.style.backgroundColor = "white"));
}

// function eraser() {
//   let divs = document.querySelectorAll(".board div");

//   divs.forEach((div) => {
//     div.removeEventListener("mouseover", colorDiv);
//     div.addEventListener("mouseover", function () {
//       this.style.backgroundColor = "white";
//     });
//   });
// }

function eraser() {
  eraserMode = !eraserMode; // Toggle eraserMode when the eraser button is clicked

  let divs = document.querySelectorAll(".board div");

  if (eraserMode) {
    divs.forEach((div) => {
      // Remove the colorDiv event listener and add eraser functionality
      div.removeEventListener("mouseover", colorDiv);
      div.addEventListener("mouseover", function () {
        this.style.backgroundColor = "white";
      });
    });
  } else {
    // If eraserMode is false, reset the divs to default behavior (colorDiv)
    divs.forEach((div) => {
      div.removeEventListener("mouseover", function () {
        this.style.backgroundColor = "white";
      });
      div.addEventListener("mouseover", colorDiv);
    });
  }
}

// function eraser() {
//   // Select all div elements inside the board
//   let divs = document.querySelectorAll(".board div");
//   divs.forEach(div => {
//     // Remove any existing event listeners for colorDiv
//     div.removeEventListener("mouseover", colorDiv);
//     // Add new event listener to set background color to white
//     div.addEventListener("mouseover", function() {
//       this.style.backgroundColor = "white";
//     });
//   });
// }

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
