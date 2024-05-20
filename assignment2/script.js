const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");

// play pause button------------------------------------------------------------------------------------------------------------
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

// replay button-------------------------------------------------------------------------------------------------------------------

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

// Mute unmute button---------------------------------------------------------------------------------------------------------------

// For the mute/un-mute button I decided to have 2 visual cues to indicate change when a user decides to interact with the button to mute it. To do this I have chosen to change the icon upon clicking to change to a no-audio icon, and to further add to this I also decided to change the colour of the icon slightly when its muted to indicate that the audio is muted and out of play.

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

// Full screen button------------------------------------------------------------------------------------------------------------

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

//   I had initially done document.requestFullscreen instead of video.requestFullscreen which resulted in my code not working, and through research as well I was unable to solve the problem so I sought out chatgpt which located the error for me to fix and also helped me fix it.

// heart button---------------------------------------------------------------------------------------------------------------------
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

heartButton.addEventListener("click", toggleHeart);

const heartImg = document.querySelector("#heart-img");
console.log(heartImg);

function toggleHeart() {
  if (heartImg.src.match("heart-outlined.png")) {
    heartImg.src = "heart-filled.png";
    showMessage("Video has been added to favourites!");
  } else {
    heartImg.src = "heart-outlined.png";
    clearMessage();
  }
}

// Originally I attempted to do it by using "document.getelementByiD" to link the images to javascript in order to to have an image switch upon a click (source: https://stackoverflow.com/questions/55442477/make-text-appear-disappear-on-button-click_) however I realised it didnt feel interactive as when I attempted it the button icon was not  able to indicate that its clickable when the mouse hovers over it, and so as a result I decided to change the code and make it a button instead which has the function of changing icons when clicked by a UserActivation.

// function changeImage() {
//   if (
//     document.getElementById("heartImage").src ==
//     "https://img.icons8.com/ios/50/like--v1.png"
//   ) {
//     document.getElementById("heartImage").src = "heart-filled.png";
//   } else {
//     document.getElementById("heartImage").src =
//       "https://img.icons8.com/ios/50/like--v1.png";
//   }
// }

// having text pop up when favouriting the video-------------------------------------------------------------------------------------
// const messageDiv = document.querySelector("#message");
// console.log(message);

// heartButton.addEventListener("click", addToFavourites);

// function addToFavourites() {
//   messageDiv.textContent = "(video has been added to favourites!)";
// }

// other attempts:
// Here I attempted to code it so that the message is cleared if the user un-favourites the heart icon however this attempt did not work and I was also not able to fix the problem.

function showMessage(message) {
  messageDiv.textContent = message;
}

function clearMessage() {
  messageDiv.textContent = "";
}

// rewind and fast forward button----------------------------------------------------------------------------------------------------
const rewindButton = document.querySelector("#rewind-button");
const fastForwardButton = document.querySelector("#fast-forward-button");

rewindButton.addEventListener("click", rewindVideo);
fastForwardButton.addEventListener("click", fastForwardVideo);

function rewindVideo() {
  video.currentTime -= 15;
}

function fastForwardVideo() {
  video.currentTime += 15;
}

// external source which helped with this code: https://stackoverflow.com/questions/73404753/how-to-add-a-5-sec-rewind-and-fast-forward-buttons-to-html5-audio-player
