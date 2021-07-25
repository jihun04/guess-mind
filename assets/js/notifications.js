const body = document.body;

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} just joined!`, "rgba(76, 217, 100, 0.5)");
};

export const handleDisconnected = ({ nickname }) => {
  fireNotification(`${nickname} just left!`, "rgba(255, 59, 48, 0.5)");
};

export const handleUnauthenticated = (nickname) => {
  fireNotification(
    `${nickname} is already exist nickname!`,
    "rgba(44, 44, 44, 0.5)"
  );
};
