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
