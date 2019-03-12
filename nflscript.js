function oiler(){
	document.getElementById("c1").src = "images/oiler.jpg";
}

function charger(){
	document.getElementById("c2").src = "images/chargers.jpg";
}


function raiders(){
	document.getElementById("c2").src = "images/raider.jpg";
}


function miamid(){
	document.getElementById("c2").src = "images/miami.png";
}


function steeler(){
	document.getElementById("c1").src = "images/steelers.jpg";
}

function viking(){
	document.getElementById("c1").src = "images/purple.png";
}

function check(){
	if(document.getElementById("c1").src.match("images/purple.png") && document.getElementById("c2").src.match("images/raider.jpg")){
		document.getElementById("check").src = "images/bosskey.gif";
		document.getElementById("c1").src = "images/ref.png";
		document.getElementById("c2").src = "images/ref.png";
		document.getElementById("check").onlick = moveOnMlb();
	} else{
		window.alert("TRY AGAIN");
	}
}

function moveOnMlb(){
	if(document.getElementById("check").src.match("bosskey.gif")){
	window.open("mlb/part1.html", '_self');
	} else{
		
	}
}

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
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};