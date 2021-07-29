import { getSocket } from "./sockets";

const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");
const chatInput = sendMsg.querySelector("input");

const appendMsg = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `
      <span class="author ${nickname ? "out" : "self"}">${
    nickname ? nickname : "You"
  }:</span> ${text}
    `;
  messages.appendChild(li);
  messages.scroll(0, messages.scrollHeight);
};

const handleSendMsg = (e) => {
  e.preventDefault();
  const { value } = chatInput;
  getSocket().emit(window.events.sendMsg, { message: value });
  chatInput.value = "";
  appendMsg(value);
};

export const handleNewMsg = ({ message, nickname }) =>
  appendMsg(message, nickname);

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
