import events from "./events";
import { chooseWord } from "./words";

let players = [];
let sockets = [];
let nicknames = [];
let inProgress = false;
let word = null;
let leader = null;
let timeleft = 0;
let interval = null;

const chooseLeader = () => players[Math.floor(Math.random() * players.length)];

const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { players });
  const handleTimeleft = () => {
    io.to("not leader").emit(events.timeUpdate, { timeleft });
    timeleft -= 1;
  };
  const startGame = () => {
    if (inProgress === false && players.length > 1) {
      inProgress = true;
      leader = chooseLeader();
      word = chooseWord();
      if (leader) {
        sockets.forEach((aSocket) => {
          if (aSocket.id !== leader.id) aSocket.join("not leader");
        });
      }
      superBroadcast(events.gameStarting);
      setTimeout(() => {
        superBroadcast(events.gameStarted);
        io.to(leader.id).emit(events.leaderNotif, { word });
        timeleft = 40;
        handleTimeleft();
        if (interval === null) {
          interval = setInterval(() => {
            if (timeleft === 0) endGame();
            handleTimeleft();
          }, 1000);
        }
      }, 5000);
    }
  };
  const endGame = () => {
    inProgress = false;
    if (leader) {
      sockets.forEach((aSocket) => {
        if (aSocket.id !== leader.id) aSocket.leave("not leader");
      });
    }
    superBroadcast(events.gameEnded, {
      word,
      leaderNickname: `${leader ? leader.nickname : null}`,
    });
    if (interval !== null) {
      clearInterval(interval);
      interval = null;
    }
    setTimeout(() => startGame(), 2000);
  };
  const addPoint = (id) => {
    players = players.map((player) => {
      if (player.id === id) {
        player.points += 10;
      }
      return player;
    });
    sendPlayerUpdate();
    endGame();
  };

  socket.on(events.setNickname, ({ nickname }) => {
    if (!nicknames.includes(nickname)) {
      socket.nickname = nickname;
      nicknames.push(nickname);
      players.push({ id: socket.id, points: 0, nickname: nickname });
      sockets.push(socket);
      socket.emit(events.loggedIn);
      broadcast(events.newUser, { nickname });
      sendPlayerUpdate();
      startGame();
    } else {
      socket.emit(events.unauthenticated);
    }
  });

  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
    players = players.filter((player) => player.id != socket.id);
    sockets = sockets.filter((aSocket) => aSocket != socket.id);
    nicknames = nicknames.filter((nickname) => nickname != socket.nickname);
    if (players.length == 1) {
      endGame();
    } else if (leader) {
      if (socket.id == leader.id) endGame();
    }
    sendPlayerUpdate();
  });

  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, { message, nickname: socket.nickname });
    if (message === word) {
      superBroadcast(events.newMsg, {
        message: `Winner is: ${socket.nickname}, word was: ${word}`,
        nickname: "Bot",
      });
      addPoint(socket.id);
    }
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
