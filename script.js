(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = names.length - 1; i >= 0; i--) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j'){
      byeSpeaker.speak(names[i]);
    }else{
      helloSpeaker.speak(names[i]);
    }
  }
})();