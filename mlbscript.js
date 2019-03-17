//This is a basic function I found in the js which was applied to all of the elements, so I made it so that when any jersey got clicked, the sound of a ball hitting a catcher's glove indicating a strike, or (incorrect). 
//I guess I added this to make it more interactive. 
function checkPosition(){
		var audio = new Audio('sounds/glove.mp3');
	audio.play();	
}

// This is just a random function I threw in to make the escape room throw a curveball at the user (no pun intended) upon entering the second page. They would be expecting one page but they got two for the MLB jersey room.
function sRoomStart() {
	 alert("But wait... there's more!");
	mlbTwo()	
}

//This function will allow the user move on to the second part upon clicking the degrom jersey-turned key. 
function moveOnPartTwo(el){
	if(el.src.match("images/bosskey.gif")){
		window.open("mlbpart2.html", '_self');
	}
	else {
		var audio = new Audio('sounds/glove.mp3');
	audio.play();}
}

//this function makes the key show if the three proper jerseys are selected and translucent. If not the key will remain 
function partOnePass(){
		if (document.getElementById('molina').classList.contains("opaque") && document.getElementById('gallo').classList.contains("opaque") && document.getElementById('freeman').classList.contains("opaque")){
		var audio = new Audio('sounds/winner.wav');
		audio.play();
		document.getElementById('degrom').src = "images/bosskey.gif";}
		else {
		}
}

//this function allows for the correct jersey in its row (in part 1) to become less opaque, indicating it is correct. It also forces the user to use the hints, for without the hints triggered the jersey will do nothing
function rCorrect(el){
		if (document.getElementById('ball1a').src.match("images/red/red.png") && document.getElementById('ball2a').src.match("images/red/red.png")){
		el.classList.add("opaque");
		}
		else {
		var audio = new Audio('sounds/glove.mp3');
		audio.play();
		}
		partOnePass();
}

//this function allows for the correct jersey in its row (in part 1) to become less opaque, indicating it is correct. It also forces the user to use the hints, for without the hints triggered the jersey will do nothing
function pCorrect(el){
	if (document.getElementById('ball3a').src.match("images/pinstripes/pinstripe.png") && document.getElementById('ball4a').src.match("images/pinstripes/pinstripe.png")){
	el.classList.add("opaque"); 
	}
	else{
		var audio = new Audio('sounds/glove.mp3');
		audio.play();
	}
	partOnePass();
}

//this function allows for the correct jersey in its row (in part 1) to become less opaque, indicating it is correct. It also forces the user to use the hints, for without the hints triggered the jersey will do nothing
function eCorrect(el){
	if (document.getElementById('ball5a').src.match("images/even/under10.png") && document.getElementById('ball6a').src.match("images/even/under10.png")){
	el.classList.add("opaque");
	}
	else {
		var audio = new Audio('sounds/glove.mp3');
		audio.play();
	}
	partOnePass();
}

//this function allows for the room to be complete once the correct jersey is selected. It also forces the user to use the hints, for without the hints triggered the jersey will do nothing
function sWinner(el){
	if (document.getElementById('mlb1').src.match("images/blank.png") && document.getElementById('mlb2').src.match("images/blank.png")){
	window.open("congrats.html", '_self');
		var audio = new Audio('sounds/winner.wav');
		audio.play();
	}
	else if (el.src.match("images/bosskey.gif")){
	window.open("congrats.html", '_self');
	}
	else {
		var audio = new Audio('sounds/glove.mp3');
		audio.play();
	}
}

//this function allows for the logos in MLB part 1 Row 1 to turn into red blocks, revealing the hint (I also resize the images to make them look nicer) This happens when the MLB logos in the top are both clicked
function redHintReveal(el){
		el.src = "images/blank.png";
	var audio = new Audio('sounds/whoosh.mp3');
	audio.play();
	if (document.getElementById('ball1a').src.match("images/blank.png") && document.getElementById('ball2a').src.match("images/blank.png")){
		document.getElementById('ball1a').src = "images/red/red.png"
		document.getElementById('ball2a').src = "images/red/red.png"
		document.getElementById('ball1a').classList.remove("hint-size");
		document.getElementById('ball1a').classList.add("make-small");
		document.getElementById('ball2a').classList.remove("hint-size");
		document.getElementById('ball2a').classList.add("make-small");
		var audio = new Audio('sounds/batcrack.wav');
	audio.play();
	} 
	else {
	}
}

//this function allows for the logos in MLB part 1 Row 2 to turn into Pinstripes, revealing the hint (I also resize the images to make them look nicer) This happens when the MLB logos in the middle are both clicked
function pinstripleHintReveal(el){
		el.src = "images/blank.png";
	var audio = new Audio('sounds/whoosh.mp3');
	audio.play();	
	if (document.getElementById('ball3a').src.match("images/blank.png") && document.getElementById('ball4a').src.match("images/blank.png")){
		document.getElementById('ball3a').src = "images/pinstripes/pinstripe.png"
		document.getElementById('ball4a').src = "images/pinstripes/pinstripe.png"
		document.getElementById('ball3a').classList.remove("hint-size");
		document.getElementById('ball3a').classList.add("make-small");
		document.getElementById('ball4a').classList.remove("hint-size");
		document.getElementById('ball4a').classList.add("make-small");
		var audio = new Audio('sounds/batcrack.wav');
	audio.play();
	} 
	else {
	}
}	

//this function allows for the logos in MLB part 1 Row 3 to turn into <10s, revealing the hint (I also resize the images to make them look nicer) This happens when the MLB logos in the last row are both clicked
	function digitHintReveal(el){
		el.src = "images/blank.png";
	var audio = new Audio('sounds/whoosh.mp3');
	audio.play();
	if (document.getElementById('ball5a').src.match("images/blank.png") && document.getElementById('ball6a').src.match("images/blank.png")){
		document.getElementById('ball5a').src = "images/even/under10.png"
		document.getElementById('ball6a').src = "images/even/under10.png"
		document.getElementById('ball5a').classList.remove("hint-size");
		document.getElementById('ball5a').classList.add("make-small");
		document.getElementById('ball6a').classList.remove("hint-size");
		document.getElementById('ball6a').classList.add("make-small");
		var audio = new Audio('sounds/batcrack.wav');
	audio.play();
	}
	else {
	}	
}
	
	
//this function allows for the baseballs in MLB part 2 to turn into S's, revealing the hint. This happens when the MLB logos in the middle are both clicked
function sHintReveal(el){
	el.src = "images/blank.png";
	var audio = new Audio('sounds/whoosh.mp3');
	audio.play();
	if (document.getElementById('mlb1').src.match("images/blank.png") && document.getElementById('mlb2').src.match("images/blank.png")){
		document.getElementById('ball1b').src = "images/s/s.png"
		document.getElementById('ball2b').src = "images/s/s.png"
		document.getElementById('ball3b').src = "images/s/s.png"
		document.getElementById('ball4b').src = "images/s/s.png"
		var audio = new Audio('sounds/batcrack.wav');
	audio.play();
	} 
	else {
		// do nothing
	}
}


//this is my timer function for my java
var timeleft = 45;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
	window.open("mlbpart1.html", '_self');
	}
}, 1000);

	
/*
//This is an unused timer function

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
           window.history.back();
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};
*/ 
