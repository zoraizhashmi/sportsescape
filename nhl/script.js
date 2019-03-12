//these are the variables to call the 4 image boxes
a = document.getElementById("img1");
b = document.getElementById("img2");
c = document.getElementById("img3");
d = document.getElementById("img4");
key = document.getElementById("winner");
//the variables to set the timer to 30 seconds when the page loads
timeLeft = 45;
timer = document.getElementById('timer');
timerId = setInterval(countdown, 1000);
wrong = new Audio('sounds/booing.mp3');
correct = new Audio('sounds/crowd.mp3');
hideTimer = document.getElementById('timer-holder');
//this array holds the questions that can be randomly selected when the page is loaded
question = ["Who is the defense-man?", "Who is known as the great one?", "Who is known as the Finnish flash?", "Who has the most wins over their career?", "What team has the most Stanley Cup wins?"];
//this variable will randomly select an array value from the question array
rand = Math.floor(Math.random() * question.length );

//this function will run when the page loads. Starting at 45 seconds, it will countdown to 0 seconds. The timeLeft value will be displayed until it reaches 0 seconds
function countdown() {
    if (timeLeft == 0) {
		//when the timeLeft variable is 0, then the key image will be displayed because the class that hides it will be removed. A pop up will appear, a booing sound will play and the page will reload
		timer.innerHTML ='';
		hideTimer.classList.add('hide');
		wrong.play();
		window.alert("sorry you ran out of time");
		location.reload();
    } else {
        timer.innerHTML = timeLeft + ' seconds left';
        timeLeft--;
    }
} 
//This function will run when the body in the HTML is loaded
function random(){
	//this will call the HTML element with the id ="question" and change the text to a randomly selected question array value
    document.getElementById("question").innerHTML = question[rand];
	// in the console section in the inspect tool, it will display the text "the numbre of the question is" and the random value 
	console.log("The number of the question is " + rand);
}

//This function will run when the user clicks on the NHL logo to get a hint
function hint(el) {
	//when the question is "who is the defense-man?" the hint will be a picture of the brown hair
	//the NHL logo will change it's source to the brown hair image
	if (rand==0) {
		el.src = "images/sharks.png";
	} else if (rand==1) {
		el.src = "images/kings.png";
	} else if (rand==2) {
		el.src = "images/ducks.png";
	} else if (rand==3) {
		el.src = "images/devils.png";
	} else if (rand==4) {
		el.src = "images/canada.png";
	} 
}

//the images will cycle from brent - sidney - alex - wayne - teemu - red - martin - montrael then will start again when the top left image is clicked on
function img1(el){
	//when the img src is brent 1 then the element that was being clicked on will change to "sidney1" and the process repeats
	if (el.src.match("images/brent1.png")){
		el.src = "images/sidney1.png";
	} else if (el.src.match("images/sidney1.png")){
		el.src = "images/alex1.png";
	} else if (el.src.match("images/alex1.png")){
	    el.src = "images/wayne1.png";
	} else if (el.src.match("images/wayne1.png")){
	    el.src = "images/johnny1.png";
	}else if (el.src.match("images/johnny1.png")){
	    el.src = "images/teemu1.png";
	} else if (el.src.match("images/teemu1.png")){
	    el.src = "images/red1.png";
	} else if (el.src.match("images/red1.png")){
	    el.src = "images/martin1.png";
	} else if (el.src.match("images/martin1.png")){
	    el.src = "images/mike1.png";
	} else if (el.src.match("images/mike1.png")){
	    el.src = "images/montrael1.png";
	} else if (el.src.match("images/montrael1.png")){
	    el.src = "images/connor1.png";
	} else if (el.src.match("images/connor1.png")){
	    el.src = "images/brent1.png";
	} 
}

// cycle order alex - montrael - wayne - red - sidney - brent - martin - teemu - REPEAT
function img2(el){
	if (el.src.match("images/alex2.png")){
		el.src = "images/montrael2.png";
	} else if (el.src.match("images/montrael2.png")){
		el.src = "images/wayne2.png";
	} else if (el.src.match("images/wayne2.png")){
	    el.src = "images/connor2.png";
	} else if (el.src.match("images/connor2.png")){
	    el.src = "images/mike2.png";
	} else if (el.src.match("images/mike2.png")){
	    el.src = "images/red2.png";
	} else if (el.src.match("images/red2.png")){
	    el.src = "images/sidney2.png";
	} else if (el.src.match("images/sidney2.png")){
	    el.src = "images/brent2.png";
	} else if (el.src.match("images/brent2.png")){
	    el.src = "images/martin2.png";
	} else if (el.src.match("images/martin2.png")){
	    el.src = "images/johnny2.png";
	}  else if (el.src.match("images/johnny2.png")){
	    el.src = "images/teemu2.png";
	}else if (el.src.match("images/teemu2.png")){
	    el.src = "images/alex2.png";
	} 
}


// cycle order teemu - martin - brent - wayne - montrael - red - sidney - alex - REPEAT
function img3(el){
	if (el.src.match("images/teemu3.png")){
		el.src = "images/martin3.png";
	} else if (el.src.match("images/martin3.png")){
		el.src = "images/brent3.png";
	} else if (el.src.match("images/brent3.png")){
	    el.src = "images/wayne3.png";
	} else if (el.src.match("images/wayne3.png")){
	    el.src = "images/montrael3.png";
	} else if (el.src.match("images/montrael3.png")){
	    el.src = "images/johnny3.png";
	} else if (el.src.match("images/johnny3.png")){
	    el.src = "images/red3.png";
	} else if (el.src.match("images/red3.png")){
	    el.src = "images/mike3.png";
	} else if (el.src.match("images/mike3.png")){
	    el.src = "images/sidney3.png";
	} else if (el.src.match("images/sidney3.png")){
	    el.src = "images/connor3.png";
	} else if (el.src.match("images/connor3.png")){
	    el.src = "images/alex3.png";
	} else if (el.src.match("images/alex3.png")){
	    el.src = "images/teemu3.png";
	} 
}
//cycle order wayne - red - martin - alex - teemu - brent - montrael - sidney - REPEAT
function img4(el){
	if (el.src.match("images/wayne4.png")){
		el.src = "images/red4.png";
	} else if (el.src.match("images/red4.png")){
		el.src = "images/martin4.png";
	} else if (el.src.match("images/martin4.png")){
	    el.src = "images/mike4.png";
	} else if (el.src.match("images/mike4.png")){
	    el.src = "images/alex4.png";
	} else if (el.src.match("images/alex4.png")){
	    el.src = "images/connor4.png";
	} else if (el.src.match("images/connor4.png")){
	    el.src = "images/teemu4.png";
	} else if (el.src.match("images/teemu4.png")){
	    el.src = "images/brent4.png";
	} else if (el.src.match("images/brent4.png")){
	    el.src = "images/johnny4.png";
	} else if (el.src.match("images/johnny4.png")){
	    el.src = "images/montrael4.png";
	}else if (el.src.match("images/montrael4.png")){
	    el.src = "images/sidney4.png";
	} else if (el.src.match("images/sidney4.png")){
	    el.src = "images/wayne4.png";
	} 
}

//when the user clicks on the chekc answer box, this function will run. 
//This function will check the user's answer
function checkAnswer(){
	//value 0 in the array question is "who is a defenseman?" If the rand variable is 0, and the 4 images make one big picture of brent burns then...
	if (rand==0 && a.src.match("images/brent1.png") && b.src.match("images/brent2.png") && c.src.match("images/brent3.png") && d.src.match("images/brent4.png")) {
		//the class hide on the key will be removed causing the key to be shown
		key.classList.remove("hide");
		//an alert will pop up at the top of the screen
		window.alert("yay you did");	
		//a cheering sound will play
		correct.play();
		hideTimer.classList.add('hide');
	} //value 1 is "Who is known as the great one?" which the answer is Wayne Gretzky
	else if (rand==1 && a.src.match("images/wayne1.png") && b.src.match("images/wayne2.png") && c.src.match("images/wayne3.png") && d.src.match("images/wayne4.png")) {
		key.classList.remove("hide");
		window.alert("yay you did");
		hideTimer.classList.add('hide');
		correct.play();
	} //value 2 is "who is known as the Finnish flash?" which the answer is Teemu Selanne
	else if (rand==2 && a.src.match("images/teemu1.png") && b.src.match("images/teemu2.png") && c.src.match("images/teemu3.png") && d.src.match("images/teemu4.png")) {
		key.classList.remove("hide");
		window.alert("yay you did");
		hideTimer.classList.add('hide');
		correct.play();
	} //value 3 is "Who has the most wins over their career?" which the answer is Martin Brodeur
	else if (rand==3 && a.src.match("images/martin1.png") && b.src.match("images/martin2.png") && c.src.match("images/martin3.png") && d.src.match("images/martin4.png")) {
		key.classList.remove("hide");
		window.alert("yay you did");
		hideTimer.classList.add('hide');
		correct.play();
	} // value 4 is "What team has the most Stanley Cup wins?" which the answer is Montreal Canadiens
	else if (rand==4 && a.src.match("images/montrael1.png") && b.src.match("images/montrael2.png") && c.src.match("images/montrael3.png") && d.src.match("images/montrael4.png")) {
		key.classList.remove("hide");
		hideTimer.classList.add('hide');
		window.alert("yay you did");
		correct.play();
	}
	else {  //if the answer is incorrect, an alert will appear saying that they need to start again, a booing sound will play and the page will restart
		wrong.play();
		window.alert("sorry you're wrong. Restart");
		location.reload();
	}
}
