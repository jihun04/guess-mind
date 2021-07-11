import { initSockets } from "./sockets";

const body = document.body;
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut",
  LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

const logIn = (nickname) => {
  const socket = io("/");
  socket.emit(window.events.setNickname, { nickname });
  initSockets(socket);
  body.className = LOGGED_IN;
}

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  logIn(nickname);
}

const handleFormSubmit = e => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  logIn(value);
}

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
