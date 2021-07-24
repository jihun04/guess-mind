import { getSocket } from "./sockets";

const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const mode = document.getElementById("jsMode");

const ctx = canvas.getContext("2d");

const INITIAL_COLOR = "#2c2c2c";

canvas.width = 450;
canvas.height = 450;

ctx.lineWidth = 2.5;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

let painting = false;
let filling = false;

function startPainting(e) {
  ctx.beginPath();
  getSocket().emit(window.events.beginPath, { x: e.offsetX, y: e.offsetY });
  painting = true;
}

function stopPainting() {
  painting = false;
}

const strokePath = (x, y) => {
  ctx.lineTo(x, y);
  ctx.stroke();
};

function onMouseMove(e) {
  if (!filling) {
    const x = e.offsetX;
    const y = e.offsetY;
    if (painting) {
      strokePath(x, y);
      getSocket().emit(window.events.strokePath, { x, y });
    } else {
    }
  }
}

function handleColorClick() {
  const color = this.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  getSocket().emit(window.events.changeColor, { color });
  target.classList.add("controls__color--click");
  target.addEventListener("transitionend", () => {
    target.classList.remove("controls__color--click");
    target.removeEventListener("click", this);
  });
}

function handleModeClick() {
  if (filling) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", (event) => event.preventDefault());
}

for (const color of colors) color.addEventListener("click", handleColorClick);

if (mode) mode.addEventListener("click", handleModeClick);

export const handleBeganPath = ({ x, y }) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
};
export const handleStrokedPath = ({ x, y }) => strokePath(x, y);
