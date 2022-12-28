function colorShift() {
  let newColor = "";
  let newFont = "";
  let x = Math.floor(Math.random() * 3);
  switch (x) {
    case 0:
      newColor = "red";
      newFont = "Verdana";
      break;
    case 1:
      newColor = "blue";
      newFont = "Times New Roman";
      break;
    case 2:
      newColor = "green";
      newFont = "Florence";
      break;
  }
  let elem = document.getElementById("logo");
  elem.style.color = newColor;
  elem.style.fontFamily = newFont;
}

//<scripts> are parsed sequentially and do the HTML file does NOT load the next element until the scripts are done running

//

document.getElementById("change").innerHTML = "This";
let fontChange = document.getElementById("change");
fontChange.style.fontFamily = "Times New Roman";
document.body.style.backgroundColor = "lightBlue";
document.querySelector("h3").style.color = "green";

let parent = document.querySelector("h3").parentNode;
let children = document.querySelector("h3").childNodes;

console.log(parent, children);

//
let paragraph = document.createElement("p");
paragraph.id = "test";
paragraph.innerHTML = "This is added in via JS";
document.body.appendChild(paragraph);

//
let remove = document.querySelector("h4");
document.body.removeChild(remove);

//
let buttonColor = document.getElementById("bColor");
let buttonColorFont = document.getElementById("bColorFont");

buttonColor.onclick = function () {
  buttonColor.style.backgroundColor = "pink";
};

function changeFont() {
  buttonColorFont.style.fontFamily = "Times New Roman";
}

//Event Handler
let vanish = document.getElementById("vanish");
vanish.style.visibility = "hidden";

//Event Listener
function showInfo() {
  vanish.style.visibility = "visible";
}

vanish.addEventListener("click", showInfo);

//Event Listener
let footer = document.getElementById("footer");
let penguin = document.getElementById("penguin");

function changeBanner() {
  penguin.style.display = "block";
}

function changeBack() {
  penguin.style.display = "none";
}

//Remove Event Listener
let ticket = document.getElementById("ticket");

function ticketGenerator() {
  ticket.innerHTML = "Ticket Generated";
  alert("Your ticket is: " + Math.floor(Math.random() * 100));
  ticket.removeEventListener("click", ticketGenerator);
}

//Time Stamp
let time = document.getElementById("time");

function getTime(event) {
  time.innerHTML = event.timeStamp;
}

//Color Generator
let pickColor = document.getElementById("pickColor");
let randomColor = document.getElementById("randomColor");

function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event) {
  let randomColor =
    "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
  event.target.style.backgroundColor = randomColor;
}

pickColor.addEventListener("click", colorChange);

randomColor.addEventListener("wheel", colorChange);
