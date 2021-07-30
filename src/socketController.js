import events from "./events";
import { chooseWord } from "./words";

const initialColors = [
  "rgb(255, 59, 48)",
  "rgb(255, 149, 0)",
  "rgb(255, 204, 0)",
  "rgb(76, 217, 100)",
  "rgb(90, 200, 250)",
  "rgb(0, 122, 255)",
  "rgb(131, 86, 214)",
];
let players = [];
let sockets = [];
let nicknames = [];
let inProgress = false;
let word = null;
let leader = null;
let timeleft = 0;
let interval = null;
let colors = initialColors;

const chooseLeader = () => players[Math.floor(Math.random() * players.length)];

const genRGB = () => Math.ceil(Math.random() * 200);

const getRGB = () => `rgb(${genRGB()}, ${genRGB()}, ${genRGB()})`;

const chooseColor = () => {
  let color = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];
  if (color === undefined) {
    color = getRGB();
  }
  return color;
};

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
        if (leader) {
          superBroadcast(events.gameStarted, {
            leaderNickname: leader.nickname,
            show: true,
            leaderColor: leader.color,
          });
        }
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
      superBroadcast(events.gameEnded, {
        leaderNickname: leader.nickname,
        show: false,
        leaderColor: leader.color,
      });
    }
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
      const playerColor = chooseColor();
      socket.nickname = nickname;
      socket.color = playerColor;
      nicknames.push(nickname);
      players.push({
        id: socket.id,
        points: 0,
        nickname: nickname,
        color: playerColor,
      });
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
    sockets = sockets.filter((aSocket) => aSocket.id != socket.id);
    nicknames = nicknames.filter((nickname) => nickname != socket.nickname);
    if (!colors.includes(socket.color)) {
      colors.push(socket.color);
    }
    if (colors.length > 7) colors = initialColors;
    if (players.length == 1) {
      endGame();
    } else if (leader) {
      if (socket.id == leader.id) endGame();
    }
    sendPlayerUpdate();
  });

  socket.on(events.sendMsg, ({ message }) => {
    superBroadcast(events.newMsg, {
      message,
      nickname: socket.nickname,
      color: socket.color,
      underlined: message === word ? true : false,
    });
    if (message === word) {
      superBroadcast(events.newMsg, {
        message: `Winner is: ${socket.nickname},\nword was: ${word}`,
        nickname: "Bot",
        color: "#2c2c2c",
        underlined: false,
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
