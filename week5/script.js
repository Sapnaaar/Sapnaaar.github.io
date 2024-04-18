// let myName = prompt("What is your name?");
// console.log("Hello", myName);

// let myName = "sapna";
// let mySirname = "rajesh";

// let myFullName = `my full name is ${myName} ${mySirname}`;
// console.log(myFullName);

// let temp = prompt("what is today's temperature?");
// if (temp >= 20 && temp < 30) {
//   console.log("it feels sunny and warm");
// } else if (temp >= 10 && temp < 20) {
//   console.log("it feels cold");
// } else if (temp >= 30) {
//   console.log("it is boiling hot");
// } else if (temp < 10) {
//   console.log("it is freezing");
// }

function checkWeather() {
  console.log("I am just being clicked");
  let myInput = document.querySelector("#myTemp");
  let temp = myInput.value;
  console.log("current temp is", temp);

  if (temp >= 20 && temp < 30) {
    console.log("it feels sunny and warm");
  } else if (temp >= 10 && temp < 20) {
    console.log("it feels cold");
  } else if (temp >= 30) {
    console.log("it is boiling hot");
  } else if (temp < 10) {
    console.log("it is freezing");
  }
}
