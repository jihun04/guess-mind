import events from "./events";

let sockets = [];
let nicknames = [];

const socketController = (socket) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);

  socket.on(events.setNickname, ({ nickname }) => {
    if (!nicknames.includes(nickname)) {
      socket.nickname = nickname;
      nicknames.push(nickname);
      sockets.push({ id: socket.id, points: 0, nickname: nickname });
      socket.emit(events.loggedIn);
      broadcast(events.newUser, { nickname });
    } else {
      socket.emit(events.unauthenticated);
    }
  });

  socket.on(events.disconnect, () => {
    if (socket.nickname) {
      broadcast(events.disconnected, { nickname: socket.nickname });
      sockets.splice(
        sockets.findIndex((aSocket) => aSocket.id == socket.id),
        1
      );
      nicknames.splice(socket.nickname, 1);
    }
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

setInterval(() => console.log(sockets), 3000);

export default socketController;
