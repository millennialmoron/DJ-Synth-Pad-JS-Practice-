document.addEventListener("keydown", keyPressed);

function keyPressed(e) {
  var keyLogged = e.key;
  makeNoise(keyLogged);
  flashy(keyLogged);
}

for (var i = 0; i < 12; i++) {
  document.querySelectorAll(".synth")[i].addEventListener("click", handleClick);

  function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makeNoise(buttonInnerHTML);
    flashy(buttonInnerHTML);
  }
}

function makeNoise(key) {
  switch (key) {
    case "w":
      var acidKiller2 = new Audio("sounds/acidKiller2.mp3");
      acidKiller2.play();
      break;
    case "a":
      var acidKiller3 = new Audio("sounds/acidKiller3.mp3");
      acidKiller3.play();
      break;
    case "s":
      var acidKiller = new Audio("sounds/acidKiller.mp3");
      acidKiller.play();
      break;
    case "d":
      var glamDanceBass = new Audio("sounds/glamDanceBass.mp3");
      glamDanceBass.play();
      break;
    case "f":
      var snare = new Audio("sounds/snare.mp3"); //LEAVE ALONE
      snare.play();
      break;
    case "c":
      var glamDanceBass2 = new Audio("sounds/glamDanceBass2.mp3");
      glamDanceBass2.play();
      break;
    case "h":
      var danceSynth = new Audio("sounds/danceSynth.mp3");
      danceSynth.play();
      break;
    case "j":
      var danceSynth2 = new Audio("sounds/danceSynth2.mp3");
      danceSynth2.play();
      break;
    case "k":
      var raveSynth = new Audio("sounds/raveSynth.mp3");
      raveSynth.play();
      break;
    case "l":
      var tom3 = new Audio("sounds/tom-3.mp3"); //LEAVE ALONE
      tom3.play();
      break;
    case "i":
      var retroSynth = new Audio("sounds/retroSynth.mp3");
      retroSynth.play();
      break;
    case "m":
      var danceSynth3 = new Audio("sounds/danceSynth3.mp3");
      danceSynth3.play();
      break;

    default:
      console.log(key);

  }
}

function flashy(key) {
  var flashyButton = document.querySelector("." + key);
  flashyButton.classList.add("pressed");
  setTimeout(function() {
    flashyButton.classList.remove("pressed");
  }, 100);
}
