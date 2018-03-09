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

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];          // add initial color to squares
    squares[i].addEventListener("click", function () {     // add click listeners to squares
        var clickedColor = this.style.backgroundColor;     // grab color of clicked square
        if (clickedColor === pickedColor) {                // compare color of pickedColor
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {             // loop through all squares
        squares[i].style.backgroundColor = color;          // change everything to given color
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function getRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());                           // get a random color val and push into arr
    }
    return arr;                                            // return an array of "num" elements
}

function randomColor() {
    r = Math.floor(Math.random() * 256);                   // pick "red" from 0 - 255
    g = Math.floor(Math.random() * 256);                   // pick "green" from 0 - 255
    b = Math.floor(Math.random() * 256);                   // pick "blue" from 0 - 255
    return "rgb(" + r + ", " + g + ", " + b + ")"

}