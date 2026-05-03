let currentZ = 1000;
let activeWindow = null;
let offsetX = 0;
let offsetY = 0;

const signInBtn = document.getElementById("signInBtn");
const loginScreen = document.getElementById("login");
const desktop = document.getElementById("home");
const contextMenu = document.getElementById("Menu");

signInBtn.addEventListener("click", function () {
  loginScreen.classList.add("hidden");
  desktop.classList.remove("hidden");
});

function openWindow(id) {
  const win = document.getElementById(id);
  win.classList.remove("hidden");
  currentZ++;
  win.style.zIndex = currentZ;
}

function closeWindow(id) {
  document.getElementById(id).classList.add("hidden");
}

function minimizeWindow(id) {
  document.getElementById(id).classList.add("hidden");
}
function dragStart(e, element) {
  activeWindow = element;
  currentZ++;
  activeWindow.style.zIndex = currentZ;

  offsetX = e.clientX - activeWindow.offsetLeft;
  offsetY = e.clientY - activeWindow.offsetTop;

  document.addEventListener("mousemove", dragMove);
  document.addEventListener("mouseup", dragStop);
}

function dragMove(e) {
  if (!activeWindow) return;

  activeWindow.style.left = e.clientX - offsetX + "px";
  activeWindow.style.top = e.clientY - offsetY + "px";
}

function dragStop() {
  document.removeEventListener("mousemove", dragMove);
  document.removeEventListener("mouseup", dragStop);
  activeWindow = null;
}

desktop.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  contextMenu.style.display = "block";
  contextMenu.style.left = e.clientX + "px";
  contextMenu.style.top = e.clientY + "px";
});

document.addEventListener("click", function () {
  contextMenu.style.display = "none";
});

function refreshDesktop() {
  alert("Desktop refreshed");
}

function changeWallpaper(num) {
  if (num === 1) {
    desktop.style.background = "#d9deea";
    desktop.style.backgroundImage =
      "linear-gradient(to right, #ffffff80 1px, transparent 1px), linear-gradient(to bottom, #ffffff80 1px, transparent 1px)";
    desktop.style.backgroundSize = "85px 85px";
  }

  if (num === 2) {
    desktop.style.background = "#f7efef";
    desktop.style.backgroundImage =
      "linear-gradient(to right, #ffd1d180 1px, transparent 1px), linear-gradient(to bottom, #ffd2d280 1px, transparent 1px)";
    desktop.style.backgroundSize = "35px 35px";
  }

  if (num === 3) {
    desktop.style.background = "#5d20ff";
    desktop.style.backgroundImage =
      "linear-gradient(to right, #ffffff80 1px, transparent 1px), linear-gradient(to bottom, #ffffff80 1px, transparent 1px)";
    desktop.style.backgroundSize = "45px 45px";
  }

  if (num === 4) {
    desktop.style.background = "linear-gradient(to right, #f0dede, #cde1f5)";
    desktop.style.backgroundImage = "none";
  }
}
function addCal(value) {
  document.getElementById("calDisplay").value += value;
}

function clearCal() {
  document.getElementById("calDisplay").value = "";
}

function calculateAnswer() {
  let data = document.getElementById("calDisplay").value;

  try {
    document.getElementById("calDisplay").value = eval(data);
  } catch {
    document.getElementById("calDisplay").value = "error";
  }
}
function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  document.querySelector(".time").innerText = hours + ":" + minutes;
}

setInterval(updateTime, 1000);
updateTime();