import { disableChat, enableChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideCanvasControls,
  resetCanvas,
  showCanvasControls,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) => {
  board.innerHTML = "";
  for (const player of players) {
    const playerElement = document.createElement("div");
    const nickname = document.createElement("span");
    const points = document.createElement("span");
    nickname.innerText = `${player.nickname}: `;
    nickname.style.color = player.color;
    points.innerText = player.points;
    playerElement.appendChild(nickname);
    playerElement.appendChild(points);
    board.appendChild(playerElement);
  }
};

const setNotifs = (text) => {
  notifs.innerText = text;
};

const handleShowLeader = (leaderNickname, show, leaderColor) => {
  const playerElements = board.querySelectorAll("div");
  for (const playerelement of playerElements) {
    const nickname = playerelement.childNodes[0];
    if (nickname.innerText.slice(0, -2) === leaderNickname) {
      console.dir(nickname);
      if (show) {
        playerelement.style.backgroundColor = leaderColor;
        nickname.style.color = "white";
        playerelement.style.color = "white";
      } else {
        playerelement.style.backgroundColor = "white";
        nickname.style.color = leaderColor;
        playerelement.style.color = "black";
      }
    }
  }
};

export const handlePlayerUpdate = ({ players }) => addPlayers(players);
export const handleGameStarted = ({ leaderNickname, show, leaderColor }) => {
  disableCanvas();
  hideCanvasControls();
  setNotifs("");
  handleShowLeader(leaderNickname, show, leaderColor);
};
export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showCanvasControls();
  disableChat();
  setNotifs(`You are the leader, paint: ${word}`);
};
export const handleGameEnded = ({ leaderNickname, show, leaderColor }) => {
  setNotifs("Game ended.");
  disableCanvas();
  hideCanvasControls();
  resetCanvas();
  enableChat();
  handleShowLeader(leaderNickname, show, leaderColor);
};
export const handleGameStarting = () => setNotifs("Game will start soon");
export const handleTimeUpdate = ({ timeleft }) =>
  setNotifs(`Time left: ${timeleft}`);
