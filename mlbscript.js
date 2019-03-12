function checkPosition(){
		var audio = new Audio('sounds/glove.mp3');
	audio.play();	
}

function sRoomStart() {
	 alert("But wait... there's more!");
	mlbTwo()	
}


function moveOnPartTwo(el){
	if(el.src.match("images/bosskey.gif")){
		window.open("part2.html", '_self');
	}
	else {
		var audio = new Audio('sounds/glove.mp3');
	audio.play();}
}

function partOnePass(){
		if (document.getElementById('molina').classList.contains("opaque") && document.getElementById('gallo').classList.contains("opaque") && document.getElementById('freeman').classList.contains("opaque")){
		var audio = new Audio('sounds/winner.wav');
		audio.play();
		document.getElementById('degrom').src = "images/bosskey.gif";}
		else {
		}
}

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



var timeleft = 45;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
	window.open("part1.html", '_self');
	}
}, 1000);

	
/*function startTimer(duration, display) {
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