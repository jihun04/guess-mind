import events from "./events";
import { chooseWord } from "./words";

let sockets = [];
let nicknames = [];
let inProgress = false;
let word = null;
let leader = null;

const chooseLeader = () => sockets[Math.floor(Math.random() * sockets.length)];

const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });
  const startGame = () => {
    if (inProgress == false) {
      inProgress = true;
      leader = chooseLeader();
      word = chooseWord();
      setTimeout(() => {
        superBroadcast(events.gameStarted);
        io.to(leader.id).emit(events.leaderNotif, { word });
      }, 2000);
    }
  };
  const endGame = () => {
    inProgress = false;
    superBroadcast(events.gameEnded, { word });
  };

  socket.on(events.setNickname, ({ nickname }) => {
    if (!nicknames.includes(nickname)) {
      socket.nickname = nickname;
      nicknames.push(nickname);
      sockets.push({ id: socket.id, points: 0, nickname: nickname });
      socket.emit(events.loggedIn);
      broadcast(events.newUser, { nickname });
      sendPlayerUpdate();
      if (sockets.length > 1) {
        startGame();
      }
    } else {
      socket.emit(events.unauthenticated);
    }
  });

  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
    sockets = sockets.filter((aSocket) => aSocket.id != socket.id);
    nicknames = nicknames.filter((nickname) => nickname != socket.nickname);
    if (sockets.length == 1) {
      endGame();
    } else if (leader) {
      if (socket.id == leader.id) endGame();
    }
    sendPlayerUpdate();
  });

  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, { message, nickname: socket.nickname });
  });

  socket.on(events.beginPath, ({ x, y }) =>
    broadcast(events.beganPath, { x, y })
  );

  socket.on(events.strokePath, ({ x, y, color }) =>
    broadcast(events.strokedPath, { x, y, color })
  );

  socket.on(events.fill, ({ color }) => {
    broadcast(events.filled, { color });
  });
};

export default socketController;
