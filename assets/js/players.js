import { disableChat, enableChat } from "./chat";
import { NICKNAME } from "./login";
import {
  disableCanvas,
  enableCanvas,
  hideCanvasControls,
  resetCanvas,
  saveAnchor,
  showCanvasControls,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) => {
  board.innerHTML = "";
  for (const player of players) {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  }
};

const setNotifs = (text) => {
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ players }) => addPlayers(players);
export const handleGameStarted = () => {
  disableCanvas();
  hideCanvasControls();
  setNotifs("");
};
export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showCanvasControls();
  disableChat();
  setNotifs(`You are the leader, paint: ${word}`);
};
export const handleGameEnded = ({ word, leaderNickname }) => {
  setNotifs("Game ended.");
  if (localStorage.getItem(NICKNAME) === leaderNickname) saveAnchor(word);
  disableCanvas();
  hideCanvasControls();
  resetCanvas();
  enableChat();
};
export const handleGameStarting = () => setNotifs("Game will start soon");
export const handleTimeUpdate = ({ timeleft }) =>
  setNotifs(`Time left: ${timeleft}`);
