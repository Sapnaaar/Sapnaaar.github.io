const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// -----------------------------------------------------------------------------

// The following block - play pause button

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.pause();
  }
}

// -----------------------------------------------------------------------------

// changing volume - mute unmute button

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteButton.style.backgroundColor = "red";
    myVideo.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "blue";
    myVideo.muted = true;
  }
}

// -----------------------------------------------------------------------------

// progress bar

myVideo.addEventListener("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector("#progress-bar-fill");
console.log(progressBarFill);

function updateProgressBar() {
  const progress = (myVideo.currentTime / myVideo.duration) * 100;
  //console.log(progress);
  progressBarFill.style.width = progress + "%";
}

// -----------------------------------------------------------------------------
//  navigate different timestamps

const step1Button = document.querySelector("#step-1-button");
console.log(step1Button);
step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 17.0;
}

const step2Button = document.querySelector("#step-2-button");
console.log(step2Button);
step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 52.0;
}

// -----------------------------------------------------------------------------

// double click full screen

myVideo.addEventListener("dblclick", goFullScreen);

const fullScreenButton = document.querySelector("#fullscreen-button");
console.log(fullScreenButton);

fullScreenButton.addEventListener("click", goFullScreen);

function goFullScreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// -----------------------------------------------------------------------------

// control volume

const increaseVolumeButton = document.querySelector("#increase-volume-button");
console.log(increaseVolumeButton);

increaseVolumeButton.addEventListener("click", increaseVolume);

// volume ranges from 0 to 1 with increment of 0.1
function increaseVolume() {
  if (myVideo.volume < 0.9) {
    myVideo.volume += 0.1;
  }
}

const decreaseVolumeButton = document.querySelector("#decrease-volume-button");
console.log(decreaseVolumeButton);

decreaseVolumeButton.addEventListener("click", decreaseVolume);

function decreaseVolume() {
  if (myVideo.volume > 0.11) {
    myVideo.volume -= 0.1;
  }
}

myVideo.addEventListener("volumechange", updateVolume);

function updateVolume() {
  console.log("current volume is", myVideo.volume);
}
