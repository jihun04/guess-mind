import socketController from "../../src/socketController";
import { getSocket } from "./sockets";

const canvas = document.getElementById("jsCanvas");
const controls = document.getElementById("jsControls");
const colors = document.getElementsByClassName("jsColor");
const mode = document.getElementById("jsMode");

const ctx = canvas.getContext("2d");

let INITIAL_COLOR = "#2c2c2c";

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
      getSocket().emit(window.events.strokePath, {
        x,
        y,
        color: ctx.strokeStyle,
      });
    }
  }
}

function handleColorClick() {
  const target = this;
  const color = target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
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

function fill() {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleCanvasClick() {
  if (filling) {
    fill();
    getSocket().emit(window.events.fill, { color: ctx.fillStyle });
  }
}

for (const color of colors) color.addEventListener("click", handleColorClick);

if (mode) mode.addEventListener("click", handleModeClick);

export const handleBeganPath = ({ x, y }) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
};
export const handleStrokedPath = ({ x, y, color = null }) => {
  const currentColor = ctx.strokeStyle;
  if (color !== null) ctx.strokeStyle = color;
  strokePath(x, y);
  ctx.strokeStyle = currentColor;
};
export const handleFilled = ({ color = null }) => {
  const currentColor = ctx.fillStyle;
  if (color !== null) ctx.fillStyle = color;
  fill();
  ctx.fillStyle = currentColor;
};

export const disableCanvas = () => {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("click", handleCanvasClick);
};

export const enableCanvas = () => {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
};

export const hideCanvasControls = () => (controls.style.display = "none");

export const showCanvasControls = () => (controls.style.display = "block");

if (canvas) {
  enableCanvas();
  canvas.addEventListener("contextmenu", (event) => event.preventDefault());
}
