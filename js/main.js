var scroll = document.querySelectorAll(".nav");

function init() {
	console.log("running");
	for(i=0;i<scroll.length;i++) {
		scroll[i].addEventListener("click", function() {
			console.log("clicked");
			scrollFunc(this.id);
		}, false);
	}
}

function scrollFunc(i) {
	console.log("running");
	if(i == "abstract") {
		TweenLite.to(window, 1, {scrollTo:{y:750}, ease:Power2.easeOut});
	}
	if(i == "sponsor") {
		TweenLite.to(window, 1, {scrollTo:{y:1400}, ease:Power2.easeOut});
	}
	if(i == "features") {
		TweenLite.to(window, 1, {scrollTo:{y:2010}, ease:Power2.easeOut});
	}
	if(i == "techSpecs") {
		TweenLite.to(window, 1, {scrollTo:{y:2700}, ease:Power2.easeOut});
	}
	if(i == "developer") {
		TweenLite.to(window, 1, {scrollTo:{y:4350}, ease:Power2.easeOut});
	}
	if(i == "contact") {
		TweenLite.to(window, 1, {scrollTo:{y:4350}, ease:Power2.easeOut});
	}
}

window.addEventListener("load", init, false);