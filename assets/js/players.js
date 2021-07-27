import {
  disableCanvas,
  enableCanvas,
  hideCanvasControls,
  showCanvasControls,
} from "./paint";

const board = document.getElementById("jsPBoard");

const addPlayers = (players) => {
  board.innerHTML = "";
  for (const player of players) {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  }
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  disableCanvas();
  hideCanvasControls();
};
export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showCanvasControls();
};
