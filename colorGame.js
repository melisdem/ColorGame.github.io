var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function(){
    for (var j = 0; j < modeButtons.length; j++) {
      modeButtons[j].classList.remove("selected");
    }
    this.classList.add("selected");
    //turnary operator
    //this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

    if (this.textContent ===  "Easy") {
      numSquares = 3;
    } else {
      numSquares = 6;
    }
    reset();
    //figure out how many squares to show
    //pick a new colors
    //pick a new pickedColor
    //update page to reflect changes 
  })
}

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
  if (colors[i]) {
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    } 
  }
  //change h1 color to default
  h1.style.backgroundColor = "steelblue";
  //messageDisplay back to default
  messageDisplay.textContent = "";
  //toggiling New Colors to play again
  resetButton.textContent =  "New Colors";
}

// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });




resetButton.addEventListener("click", function() {
  reset();
})


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add  click listeners to squares
  squares[i].addEventListener("click", function() {
    // grap color of clicked square
    var clickedColor = this.style.backgroundColor
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random]; 
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push to array
    arr.push(randomColor()); 
  }
  //return that array
  return arr;
}


function randomColor() {
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}