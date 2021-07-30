import { getSocket } from "./sockets";

const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");
const chatInput = sendMsg.querySelector("input");

const appendMsg = (text, nickname, color, underlined) => {
  const li = document.createElement("li");
  const author = document.createElement("span");
  const msgText = document.createElement("span");
  const underline = document.createElement("div");
  if (underlined) {
    underline.style.backgroundColor = color;
    underline.classList.add("underline");
    li.appendChild(underline);
  }
  author.innerText = `${nickname}: `;
  author.style.color = color;
  msgText.innerText = text;
  li.appendChild(author);
  li.appendChild(msgText);
  messages.appendChild(li);
  messages.scroll(0, messages.scrollHeight);
};

const handleSendMsg = (e) => {
  e.preventDefault();
  const { value } = chatInput;
  getSocket().emit(window.events.sendMsg, { message: value });
  chatInput.value = "";
};

export const handleNewMsg = ({ message, nickname, color, underlined }) =>
  appendMsg(message, nickname, color, underlined);

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}

export const disableChat = () => {
  chatInput.disabled = true;
  chatInput.style.cursor = "not-allowed";
};
export const enableChat = () => {
  chatInput.disabled = false;
  chatInput.style.cursor = "text";
};
