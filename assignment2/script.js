const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");

// play pause button
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// replay button

const replayButton = document.querySelector("#replay-button");
console.log(replayButton);

replayButton.addEventListener("click", replayVideo);

const replayImg = document.querySelector("#replay-img");
console.log(replayImg);

function replayVideo() {
  video.currentTime = 0;
  video.play();
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
}

// Mute unmute button

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleSound() {
  if (video.muted) {
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    muteUnmuteButton.style.backgroundColor = "#c1aeae";
    video.muted = false;
  } else {
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    muteUnmuteButton.style.backgroundColor = "#938989";
    video.muted = true;
  }
}

// Full screen button

const fullScreenButton = document.querySelector("#full-screen-button");
console.log(fullScreenButton);

fullScreenButton.addEventListener("click", toggleFullScreen);

function toggleFullScreen() {
  if (!document.fullScreenElement) {
    video.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

// original code:
// if (!document.fullScreenElement) {
//     document.requestFullscreen();
//   } else if (document.exitFullscreen) {
//     document.exitFullscreen();
//   }

//   I had initially done document.requestFullscreen instead of video.requestFullscreen which resulted in my code not working, however through research I was able to figure out my mistake

// --------------------------------------------------------------------------

// Volume button
// const volumeButton = document.querySelector("volume-button");
// console.log(volumeButton);

// volumeButton.addEventListener("click", toggleVolume);

// function toggleVolume(){

// like button------------------------------------------------------------------------
// const heartButton = document.querySelector("#heart-button");
// console.log(heartButton);

// heartButton.addEventListener("click", toggleHeart);
// might have to change?
function changeImage() {
  if (
    document.getElementById("heartImage").src ==
    "https://img.icons8.com/ios/50/like--v1.png"
  ) {
    document.getElementById("heartImage").src = "heart-filled.png";
  } else {
    document.getElementById("heartImage").src =
      "https://img.icons8.com/ios/50/like--v1.png";
  }
}
