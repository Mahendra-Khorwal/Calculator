var keys = document.querySelectorAll("#keyboard > div");
var bag = "";
for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", operation);
}
//Arithmetic Operations
function operation() {
  var value = event.target.innerText;
  if (value == "=" && bag == "") {
    return 0;
  } else if (value == "C") {
    bag = "";
    document.querySelector("#display").innerText = "";
  } else if (value == "=") {
    document.querySelector("#display").innerText = eval(bag);
    bag = "";
  } else {
    bag = bag + value;
    document.querySelector("#display").innerText = bag;
  }
}
//Theme Mode Function
function themes() {
  let body = document.querySelector("body");
  let mode = document.getElementById("theme").value;

  switch (mode) {
    case "LIGHT MODE":
      body.style.backgroundColor = "#ffeb007a";
      body.style.color = "black";
      break;
    case "DARK MODE":
      body.style.backgroundColor = "black";
      body.style.color = "white";
      break;
    default:
      body.style.backgroundColor = "white";
      body.style.color = "black";
  }
}
