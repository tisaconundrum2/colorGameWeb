/**
 * Created by tisaconundrum on 6/6/2017.
 */
var colors = getRandomColors(6);                               // "colors" is an array, it is given 6 random rgb() colors
var squares = document.querySelectorAll(".square");            // squares is an array, it has the locations of all squares in the HTML file
var pickedColor = pickColor();                                 // pickedColor is a string, it usually is filled with ex: "rgb(197, 211, 22)"
var colorDisplay = document.getElementById("colorDisplay");    // colorDisplay holds HTML location
colorDisplay.textContent = pickedColor;                        // the textContent of colorDisplay gets replaced with pickedColor
var messageDisplay = document.querySelector("#message");       // holds location of element in HTML
var h1 = document.querySelector("h1");                         // holds location of element in HTML
var resetButton = document.querySelector("#reset");            // holds location of element in HTML
var easyBtn = document.querySelector("#easyBtn");              // holds location of element in HTML
var hardBtn = document.querySelector("#hardBtn");              // holds location of element in HTML

easyBtn.addEventListener("click", function () {                // listen for a click of easyBtn
    hardBtn.classList.remove("selected");                      // remove the color from the button
    easyBtn.classList.add("selected");                         // add the color to the button
    colors = getRandomColors(3)                                // "colors" is an array, it is given 3 random rgb() colors
    colorDisplay.textContent = pickedColor;                    // set a new picked color
    for (var i = 0; i < squares.length; i++) {                 // iterate through all the squares
        if (colors[i]) {                                       // check to see if there is some content at this index
            squares[i].style.background = colors[i];           // as long as there is, we will set the squares to have this color
        } else {                                               // if there isn't
            squares[i].style.display = "None";                 // we can turn these boxes off
        }
    }
});

hardBtn.addEventListener("click", function () {                // listen for a click of hardBtn
    hardBtn.classList.add("selected");                         // add color to hardBtn
    easyBtn.classList.remove("selected");                      // remove color from easyBtn
    colors = getRandomColors(6)                                // "colors" is an array, it is given 6 random rgb() colors
    colorDisplay.textContent = pickedColor;                    // set a new picked color
    for (var i = 0; i < squares.length; i++) {                 // iterate through all the squares
        if (colors[i]) {                                       // check to see if there is some content at this index
            squares[i].style.background = colors[i];           // as long as there is, we will set the squares to have this color
        } else {                                               // if there isn't
            squares[i].style.display = "None";                 // we can turn these boxes off
        }
    }
});

resetButton.addEventListener("click", function () {            // listen for a click of resetButton
    colors = getRandomColors(6);                               // "colors" is an array, it is given 6 random rgb() colors
    pickedColor = pickColor();                                 // get a random "rgb()" value
    colorDisplay.textContent = pickedColor;                    // display the color we picked from the array
    for (var i = 0; i < squares.length; i++) {                 // iterate through all squares in the HTML page
        squares[i].style.backgroundColor = colors[i]           // set the color of that square, based on the "rgb()" that's in the "colors" array
    }
    h1.style.backgroundColor = "#232323";                      // in the instance of a win, H1's backgroundColor will get changed to the winning color. Change it back when we reset/play again
});

for (var i = 0; i < squares.length; i++) {                     // iterate through all the squares in the HTML page
    squares[i].style.backgroundColor = colors[i];              // grab each "rgb()" value from the "colors" array and set it as backgroundColor
    squares[i].addEventListener("click", function () {         // add click listener to each of the squares
        var clickedColor = this.style.backgroundColor;         // grab color of clicked square
        if (clickedColor === pickedColor) {                    // compare color of pickedColor, if they match
            messageDisplay.textContent = "Correct";            // output Correct
            resetButton.textContent = "Play Again?";           // change the resetButton's text to say "Play again"
            changeColors(clickedColor);                        // iterate through all the squares and change their colors
            h1.style.backgroundColor = clickedColor            // change H1's backgroundColor to reflect the win
        } else {                                               // else
            this.style.backgroundColor = "#232323";            // (Might be Redundant) make H1's backgroundColor be that of the current HTML's background
            messageDisplay.textContent = "Try Again";          // display "Try Again"
        }
    });
}

function changeColors(color) {                                 //
    for (var i = 0; i < squares.length; i++) {                 // loop through all squares
        squares[i].style.backgroundColor = color;              // change everything to given color
    }
}

function pickColor() {                                         //
    var random = Math.floor(Math.random() * colors.length);    // using builtIn random, we will get a random integer
    return colors[random];                                     // we will then return the "rgb()" of the selected element
}

function getRandomColors(num) {                                //
    // return an array of "num" elements
    var arr = [];                                              // setup temporary array
    var rand;                                                  // rand will hold an "rgb()" value
    for (var i = 0; i < num; i++) {                            // iterate to num
        rand = randomColor();                                  // get a random color "rgb()"
        arr.push(rand);                                        // push into arr
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);                   // pick "red" from 0 - 255
    var g = Math.floor(Math.random() * 256);                   // pick "green" from 0 - 255
    var b = Math.floor(Math.random() * 256);                   // pick "blue" from 0 - 255
    return "rgb(" + r + ", " + g + ", " + b + ")"
}