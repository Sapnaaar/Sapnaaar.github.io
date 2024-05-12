const myAudio = document.querySelector("#airport-audio");
console.log(myAudio);
myAudio.removeAttribute("controls");
// myAudio.play();

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAirportAudio);
function playAirportAudio() {
  myAudio.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAirportAudio);
function pauseAirportAudio() {
  myAudio.pause();
}
