var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModButtons();
	setupSquares();
	reset();
}

function setupModButtons(){
	//mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
			//ternary operator
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		//add click listeners
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!"
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	//pick random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		//push random color into array
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	//red
	var r = Math.floor(Math.random() * 256);
	//green
	var g = Math.floor(Math.random() * 256);
	//blue
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}