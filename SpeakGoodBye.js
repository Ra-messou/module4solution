(function(window){
	var speakWord = "Good Bye";
	byeSpeaker = {}
	byeSpeaker.speak = function speak(name){
		console.log(speakWord + " " + name);
	}
	window.byeSpeaker = byeSpeaker
})(window)