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

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  disableCanvas();
  hideCanvasControls();
  setNotifs("");
};
export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showCanvasControls();
  setNotifs(`You are the leader, paint: ${word}`);
};
export const handleGameEnded = ({ word }) => {
  setNotifs("Game ended.");
  saveAnchor(word);
  disableCanvas();
  hideCanvasControls();
  resetCanvas();
};
