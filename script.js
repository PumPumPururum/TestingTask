// Vertical scrolling

var level = 0,
yStart,
yEnd,
offset;

document.addEventListener("touchstart", function(e) {
	yStart = e.changedTouches[0].pageY;
});

document.addEventListener("touchmove", function(e) {
});

document.addEventListener("touchend", function(e) {
	yEnd = e.changedTouches[0].pageY;
	if (yEnd - yStart > 150 && level > 0) {
		level--;
	}
	if (yEnd - yStart < -150 && level < 2) {
		level++;
	}
	offset = level * 768;
	scroll({
		top: offset,
		behavior: "smooth"
	});
	
	if (level == 0) document.querySelector("#next").style.visibility="visible";
	else document.querySelector("#next").style.visibility="hidden";
	
	switch (level) {
		case 0:
			document.getElementById("orangeCircle1").style.visibility="visible";
			document.getElementById("orangeCircle2").style.visibility="hidden";
			document.getElementById("orangeCircle3").style.visibility="hidden";
			break;
		case 1:
			document.getElementById("orangeCircle1").style.visibility="hidden";
			document.getElementById("orangeCircle2").style.visibility="visible";
			document.getElementById("orangeCircle3").style.visibility="hidden";
			break;
		case 2:
			document.getElementById("orangeCircle1").style.visibility="hidden";
			document.getElementById("orangeCircle2").style.visibility="hidden";
			document.getElementById("orangeCircle3").style.visibility="visible";
			break;
	}
});


// Horizontal scrolling

var horImgs = document.querySelector("#horImgs"),
sliderValue,
sliderPressed = false;

function sliderPressedT() {
	sliderPressed = true;
}

function sliderPressedF() {
	sliderPressed = false;
}

horImgs.scroll(2048, 0);

setInterval(horizontalScrolling, 500);

function horizontalScrolling() {
	sliderValue = parseInt(document.getElementById("slider").value);
	if (0 <= sliderValue && sliderValue <= 50) {
		document.querySelector("#horImgs").scroll({
			left: 0,
			behavior: "smooth"
		});
	}
	if (51 <= sliderValue && sliderValue <= 149) {
		document.querySelector("#horImgs").scroll({
			left: 1024,
			behavior: "smooth"
		});
	}
	if (150 <= sliderValue && sliderValue <=200) {
		document.querySelector("#horImgs").scroll({
			left: 2048,
			behavior: "smooth"
		});
	}
}

setInterval(iceMoving, 5);

function iceMoving() {
	if (sliderPressed == false) {
		if (0 <= sliderValue && sliderValue <= 50 && document.getElementById("slider").value != 0) document.getElementById("slider").value--;
		if (51 <= sliderValue && sliderValue <= 100 && document.getElementById("slider").value != 100) document.getElementById("slider").value++;
		if (100 <= sliderValue && sliderValue <= 149 && document.getElementById("slider").value != 100) document.getElementById("slider").value--;
		if (150 <= sliderValue && sliderValue <= 200 && document.getElementById("slider").value != 200) document.getElementById("slider").value++;
	}
}