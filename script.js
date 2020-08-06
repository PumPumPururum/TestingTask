// Vertical scrolling

var level = 0,
yStart,
yEnd,
offset,
nextStyle = document.getElementById("next").style;

document.addEventListener("touchstart", function(doc) {
	yStart = doc.changedTouches[0].pageY;
});

document.addEventListener("touchend", function(doc) {
	yEnd = doc.changedTouches[0].pageY;
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
	
	if (level == 0) nextStyle.visibility = "visible";
	else nextStyle.visibility = "hidden";
	
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

var slider = document.getElementById("slider"),
sliderValue,
sliderPressed = false,
horImgs = document.getElementById("horImgs");

horImgs.scroll(2048, 0);

setInterval(horizontalScrolling, 500);

function horizontalScrolling() {
	sliderValue = parseInt(slider.value);
	if (0 <= sliderValue && sliderValue <= 50) {
		horImgs.scroll({
			left: 0,
			behavior: "smooth"
		});
	}
	else if (51 <= sliderValue && sliderValue <= 149) {
		horImgs.scroll({
			left: 1024,
			behavior: "smooth"
		});
	}
	else if (150 <= sliderValue && sliderValue <=200) {
		horImgs.scroll({
			left: 2048,
			behavior: "smooth"
		});
	}
}

slider.addEventListener("touchstart", (e) => sliderPressed = true);
slider.addEventListener("touchend", (e) => sliderPressed = false);

setInterval(iceMoving, 5);

function iceMoving() {
	if (sliderPressed == false) {
		if (0 < sliderValue && sliderValue <= 50 && slider.value != 0) slider.value--;
		if (51 <= sliderValue && sliderValue < 100 && slider.value != 100) slider.value++;
		if (100 < sliderValue && sliderValue <= 149 && slider.value != 100) slider.value--;
		if (150 <= sliderValue && sliderValue < 200 && slider.value != 200) slider.value++;
	}
}