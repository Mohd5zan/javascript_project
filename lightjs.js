var btn = document.querySelector("button");
var h3 = document.querySelector("h3");
var light = document.querySelector(".in");
var flag = 0;
btn.addEventListener("click", function (e) {
  if (flag == 0) {
    h3.innerHTML = "LIGHT OFF";
    light.style.backgroundColor = "white";
    btn.innerHTML = "ON";
    flag = 1;
  } else {
    h3.innerHTML = "LIGHT ON";
    light.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";
    flag = 0;
  }
});
