// image scroll button
const leftButton = document.querySelector("#left-button");
console.log(leftButton);

leftButton.addEventListener("click", scrollLeft);

function scrollLeft() {
  console.log("left clicked");
  var left = document.querySelector(".slider");
  left.scrollBy(-1200, 0);
}

const rightButton = document.querySelector("#right-button");
console.log(rightButton);

rightButton.addEventListener("click", scrollRight);

function scrollRight() {
  var right = document.querySelector(".slider");
  right.scrollBy(1200, 0);
}

// To code this I added a click eventlistener to both buttoms and
//attached a scroll function by using scrollBy and specifying by how
//much it should scroll by for each button

// Before I settled on this approach I had also initially tried an image
//slider feature that retrieves the next image through the click of a button
//- instead of the current horizontal scroll approach. However after executing it
//I felt that the horizontal scroll approach would be better suited and also more similar
// to the idea pitch I had done in class. I also felt it was more visually appealing and
//satisying to watch images scroll through the command of a button, whilst also allowing
//users to scroll back and forth through images at their own desired pace without having
//to constantly rely on a button to view an image.

//Here below is the code I had executed for the button image slider:

// const images = [
//   "frame1.png", // images[0]
//   "frame3.png", //images [1]
//   "frame3.png",
//   "frame4.png",
//   "frame5.png",
//   "frame9.png",
//   "frame7.png",
//   "frame8.png",
// ];

// // Firstly I created an array to link and group all image sources together

// const firstImage = 0;
// const lastImage = images.length - 1;
// let currentImage = 0;

// // next button
// const nextButton = document.getElementById("next");
// console.log(nextButton);

// nextButton.addEventListener("click", () => {
//   const imageTag = document.getElementById("image");
//   currentImage++;

//   if (currentImage >= lastImage) {
//     currentImage = 7;
//   }
//   imageTag.src = images[currentImage];
// });

// // prev button
// const prevButton = document.getElementById("prev");
// console.log(prevButton);

// prevButton.addEventListener("click", () => {
//   const imageTag = document.getElementById("image");
//   currentImage--;

//   if (currentImage <= firstImage) {
//     currentImage = 0;
//   }
//   imageTag.src = images[currentImage];
// });

// Select all image wrappers
// const imageWrappers = document.querySelectorAll(".image-wrapper");

// // Function to handle mouseover
// function handleMouseOver(event) {
//   const overlay = event.currentTarget.querySelector(".overlay");
//   const image = event.currentTarget.querySelector("img");
//   overlay.style.opacity = 1;
//   image.style.filter = "brightness(50%)"; // Change brightness as an example
// }

// // Function to handle mouseout
// function handleMouseOut(event) {
//   const overlay = event.currentTarget.querySelector(".overlay");
//   const image = event.currentTarget.querySelector("img");
//   overlay.style.opacity = 0;
//   image.style.filter = "brightness(100%)"; // Revert brightness change
// }

// // Add event listeners to each image wrapper
// imageWrappers.forEach((wrapper) => {
//   wrapper.addEventListener("mouseover", handleMouseOver);
//   wrapper.addEventListener("mouseout", handleMouseOut);
// });
