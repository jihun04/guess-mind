import events from "./events";

let sockets = [];
let nicknames = [];

const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });

  socket.on(events.setNickname, ({ nickname }) => {
    if (!nicknames.includes(nickname)) {
      socket.nickname = nickname;
      nicknames.push(nickname);
      sockets.push({ id: socket.id, points: 0, nickname: nickname });
      socket.emit(events.loggedIn);
      broadcast(events.newUser, { nickname });
      sendPlayerUpdate();
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
      // splice는 start를 string으로 찾으면 그 string이 포함되어 있는 첫 번째 것으로 해줌
      nicknames.splice(
        nicknames.findIndex((nickname) => nickname == socket.nickname),
        1
      );
      sendPlayerUpdate();
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

export default socketController;
