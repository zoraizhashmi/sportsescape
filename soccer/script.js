// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked

// "el" stands for the "element" that was just clicked
var wrongSound = document.getElementById('wrong');
var rightSound = document.getElementById('goal');


a = document.getElementById("correct");
b = document.getElementById("correct1");

//"greenimage" stand for the image that will be switcching into once you click the correct soccer ball
//also "if" means that once you click "soccerball.png" then "key" will show up, but while the correct soccer isn't clicked then "key" will remain hidden as "hiddenkey"
function greenImage(el){
	document.getElementById("correct").src =("images/soccergoall.png");
	if (el.src.match=("images/soccergoall.png")){
		document.getElementById("key").classList.remove("hidekey");
		document.getElementById("key").classList.add("show");
		rightSound.play();
	 else {
	}
}

//"redimage" stand for the image that will be turning into when you click on the wrong soccer ball
//"wrongsound" means thats the sound that will be playing everytime you click on a wrong soccer ball
function redImage(el){
	el.src =("images/redx.png");
    if (el.src.match=("images/redx.png")){
		wrongSound.play();
	} else {
	}
}

function moveOnNhl(el){
	if(el.classList.contains("show")) { 
		window.open("nhl/nhlpuzzle.html", '_self');
	} else {
	}
}
	
