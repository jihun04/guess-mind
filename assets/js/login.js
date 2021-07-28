import { handleUnauthenticated } from "./notifications";
import { initSockets } from "./sockets";

const body = document.body;
const loginForm = document.getElementById("jsLogin");

export const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut",
  LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

const logIn = (nickname) => {
  const socket = io("/");
  socket.emit(window.events.setNickname, { nickname });
  socket.on(window.events.loggedIn, () => {
    localStorage.setItem(NICKNAME, nickname);
    initSockets(socket);
    body.className = LOGGED_IN;
  });
  socket.on(window.events.unauthenticated, () => {
    handleUnauthenticated(nickname);
    localStorage.removeItem(NICKNAME);
  });
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  logIn(nickname);
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
