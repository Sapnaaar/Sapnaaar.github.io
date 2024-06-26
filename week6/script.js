// const myHeading = document.querySelector("p");
// console.log(myHeading);
// console.log(myHeading.textContent);
// myHeading.textContent = "new paragraph";

// const myPara = document.querySelectorAll("p");
// console.log(myPara);
// const myColors = ["purple-box", "coral-box", "lime-box"];

// myPara[0].classList.add("purple-box");
// myPara[1].classList.add("purple-box");

// for (let i = 0; i < 3; i++) {
//   myPara[i].classList.add(myColors[i]);
//   myPara[i].textContent = "new p " + i;
// }

// myPara.forEach(colorMe);

// function colorMe (item)
// {
//     item.classList.add("purple-box");
// }

// const myImg = document.querySelector("#cat-image");
// console.log(myImg);

// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// myButton.addEventListener("click", toggleMe);

// function toggleMe() {
//   const myImg = document.querySelector("#cat-image");
//   // console.log(myImg);
//   myImg.classList.toggle("round");
//   const myTitle = document.querySelector("h1");
//   myTitle.textContent = myImg.dataset.catname;
//   //   const myDiv = document.querySelector(".outer");
//   // //   console.log(myDiv);
//   // myDiv.classList.toggle("coral-box");
// }

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", chooseTopic);

function chooseTopic() {
  const myProjects = document.querySelectorAll("p");
  myProjects.forEach(changeColor);
  function changeColor(item) {
    if (item.dataset.topic === "web") {
      item.classList.add("purple-box");
    } else if (item.dataset.topic === "sound") {
      item.classList.add("coral-box");
    } else if (item.dataset.topic === "games") {
      item.classList.add("lime-box");
    }
  }
}

const myImg = document.querySelector("#cat-image");

myImg.addEventListener("mouseover", makeItRound);
myImg.addEventListener("mouseout", makeItSquare);

function makeItRound() {
  myImg.classList.add("round");
}

function makeItSquare() {
  myImg.classList.add("square");
}
