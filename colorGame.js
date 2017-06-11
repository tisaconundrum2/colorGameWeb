/**
 * Created by tisaconundrum on 6/6/2017.
 */
var colors = getRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
//    generate new colors
    colors = getRandomColors(6);
//    pick new rand colors
    pickedColor = pickColor();
//    change colorDisplay
    colorDisplay.textContent = pickedColor;
//    change colors on page
    setSquareColors();
    h1.style.backgroundColor = "#232323";
})
setSquareColors();

function setSquareColors() {
    for (var i = 0; i < squares.length; i++) {
        // add initial color to squares
        squares[i].style.backgroundColor = colors[i];
        // add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color of pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change everything to given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function getRandomColors(num) {
    // return an array of "num" elements
    var arr = [];
    for (var i = 0; i < num; i++) {
        // get a random color val
        // push into arr
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    // pick "red" from 0 - 255
    r = Math.floor(Math.random() * 256)
    // pick "green" from 0 - 255
    g = Math.floor(Math.random() * 256)
    // pick "blue" from 0 - 255
    b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}