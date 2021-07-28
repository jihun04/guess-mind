(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableChat = exports.disableChat = exports.handleNewMsg = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");
var chatInput = sendMsg.querySelector("input");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n      <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
  messages.scroll(0, messages.scrollHeight);
};

var handleSendMsg = function handleSendMsg(e) {
  e.preventDefault();
  var value = chatInput.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  chatInput.value = "";
  appendMsg(value);
};

var handleNewMsg = function handleNewMsg(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMsg = handleNewMsg;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}

var disableChat = function disableChat() {
  return chatInput.disabled = true;
};

exports.disableChat = disableChat;

var enableChat = function enableChat() {
  return chatInput.disabled = false;
};

exports.enableChat = enableChat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImNoYXRJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRNc2ciLCJ0ZXh0Iiwibmlja25hbWUiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInNjcm9sbCIsInNjcm9sbEhlaWdodCIsImhhbmRsZVNlbmRNc2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TXNnIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc2FibGVDaGF0IiwiZGlzYWJsZWQiLCJlbmFibGVDaGF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7QUFDQSxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFoQjtBQUNBLElBQU1FLFNBQVMsR0FBR0QsT0FBTyxDQUFDRSxhQUFSLENBQXNCLE9BQXRCLENBQWxCOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNwQyxNQUFNQyxFQUFFLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCwwQ0FDMEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEN0MsZ0JBRUVBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRnhCLHNCQUdZRCxJQUhaO0FBS0FQLEVBQUFBLFFBQVEsQ0FBQ1ksV0FBVCxDQUFxQkgsRUFBckI7QUFDQVQsRUFBQUEsUUFBUSxDQUFDYSxNQUFULENBQWdCLENBQWhCLEVBQW1CYixRQUFRLENBQUNjLFlBQTVCO0FBQ0QsQ0FURDs7QUFXQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUMzQkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBUUMsS0FBUixHQUFrQmQsU0FBbEIsQ0FBUWMsS0FBUjtBQUNBLDRCQUFZQyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2xCLE9BQS9CLEVBQXdDO0FBQUVtQixJQUFBQSxPQUFPLEVBQUVKO0FBQVgsR0FBeEM7QUFDQWQsRUFBQUEsU0FBUyxDQUFDYyxLQUFWLEdBQWtCLEVBQWxCO0FBQ0FaLEVBQUFBLFNBQVMsQ0FBQ1ksS0FBRCxDQUFUO0FBQ0QsQ0FORDs7QUFRTyxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUdELE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlkLFFBQVosUUFBWUEsUUFBWjtBQUFBLFNBQzFCRixTQUFTLENBQUNnQixPQUFELEVBQVVkLFFBQVYsQ0FEaUI7QUFBQSxDQUFyQjs7OztBQUdQLElBQUlMLE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUNxQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ1QsYUFBbkM7QUFDRDs7QUFFTSxJQUFNVSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQU9yQixTQUFTLENBQUNzQixRQUFWLEdBQXFCLElBQTVCO0FBQUEsQ0FBcEI7Ozs7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU92QixTQUFTLENBQUNzQixRQUFWLEdBQXFCLEtBQTVCO0FBQUEsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xuY29uc3QgY2hhdElucHV0ID0gc2VuZE1zZy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5cbmNvbnN0IGFwcGVuZE1zZyA9ICh0ZXh0LCBuaWNrbmFtZSkgPT4ge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuaW5uZXJIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJhdXRob3IgJHtuaWNrbmFtZSA/IFwib3V0XCIgOiBcInNlbGZcIn1cIj4ke1xuICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIllvdVwiXG4gIH06PC9zcGFuPiAke3RleHR9XG4gICAgYDtcbiAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQobGkpO1xuICBtZXNzYWdlcy5zY3JvbGwoMCwgbWVzc2FnZXMuc2Nyb2xsSGVpZ2h0KTtcbn07XG5cbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IGNoYXRJbnB1dDtcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnNlbmRNc2csIHsgbWVzc2FnZTogdmFsdWUgfSk7XG4gIGNoYXRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGFwcGVuZE1zZyh2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TXNnID0gKHsgbWVzc2FnZSwgbmlja25hbWUgfSkgPT5cbiAgYXBwZW5kTXNnKG1lc3NhZ2UsIG5pY2tuYW1lKTtcblxuaWYgKHNlbmRNc2cpIHtcbiAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xufVxuXG5leHBvcnQgY29uc3QgZGlzYWJsZUNoYXQgPSAoKSA9PiAoY2hhdElucHV0LmRpc2FibGVkID0gdHJ1ZSk7XG5leHBvcnQgY29uc3QgZW5hYmxlQ2hhdCA9ICgpID0+IChjaGF0SW5wdXQuZGlzYWJsZWQgPSBmYWxzZSk7XG4iXX0=
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./paint");

require("./players");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZDZmZDU4YTEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG5pbXBvcnQgXCIuL3BsYXllcnNcIjtcbiJdfQ==
},{"./chat":1,"./login":3,"./paint":5,"./players":6,"./sockets":7}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NICKNAME = void 0;

var _notifications = require("./notifications");

var _sockets = require("./sockets");

var body = document.body;
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
exports.NICKNAME = NICKNAME;
var LOGGED_OUT = "loggedOut",
    LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  socket.on(window.events.loggedIn, function () {
    localStorage.setItem(NICKNAME, nickname);
    (0, _sockets.initSockets)(socket);
    body.className = LOGGED_IN;
  });
  socket.on(window.events.unauthenticated, function () {
    (0, _notifications.handleUnauthenticated)(nickname);
    localStorage.removeItem(NICKNAME);
  });
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwiTklDS05BTUUiLCJMT0dHRURfT1VUIiwiTE9HR0VEX0lOIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9nSW4iLCJzb2NrZXQiLCJpbyIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJzZXROaWNrbmFtZSIsIm9uIiwibG9nZ2VkSW4iLCJzZXRJdGVtIiwiY2xhc3NOYW1lIiwidW5hdXRoZW50aWNhdGVkIiwicmVtb3ZlSXRlbSIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0QsSUFBdEI7QUFDQSxJQUFNRSxTQUFTLEdBQUdELFFBQVEsQ0FBQ0UsY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVPLElBQU1DLFFBQVEsR0FBRyxVQUFqQjs7QUFDUCxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFBQSxJQUNFQyxTQUFTLEdBQUcsVUFEZDtBQUdBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7QUFDMUIsTUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUVULElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUF2QztBQUNBSSxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUgsTUFBTSxDQUFDQyxNQUFQLENBQWNHLFFBQXhCLEVBQWtDLFlBQU07QUFDdENWLElBQUFBLFlBQVksQ0FBQ1csT0FBYixDQUFxQmYsUUFBckIsRUFBK0JHLFFBQS9CO0FBQ0EsOEJBQVlJLE1BQVo7QUFDQVgsSUFBQUEsSUFBSSxDQUFDb0IsU0FBTCxHQUFpQmQsU0FBakI7QUFDRCxHQUpEO0FBS0FLLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVSCxNQUFNLENBQUNDLE1BQVAsQ0FBY00sZUFBeEIsRUFBeUMsWUFBTTtBQUM3Qyw4Q0FBc0JkLFFBQXRCO0FBQ0FDLElBQUFBLFlBQVksQ0FBQ2MsVUFBYixDQUF3QmxCLFFBQXhCO0FBQ0QsR0FIRDtBQUlELENBWkQ7O0FBY0EsSUFBSUcsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCUCxFQUFBQSxJQUFJLENBQUNvQixTQUFMLEdBQWlCZixVQUFqQjtBQUNELENBRkQsTUFFTztBQUNMSyxFQUFBQSxLQUFLLENBQUNILFFBQUQsQ0FBTDtBQUNEOztBQUVELElBQU1nQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHeEIsU0FBUyxDQUFDeUIsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBQ0EsTUFBUUMsS0FBUixHQUFrQkYsS0FBbEIsQ0FBUUUsS0FBUjtBQUNBRixFQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBYyxFQUFkO0FBQ0FsQixFQUFBQSxLQUFLLENBQUNrQixLQUFELENBQUw7QUFDRCxDQU5EOztBQVFBLElBQUkxQixTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDMkIsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlVW5hdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgaW5pdFNvY2tldHMgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xuXG5leHBvcnQgY29uc3QgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIixcbiAgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xuXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKTtcblxuY29uc3QgbG9nSW4gPSAobmlja25hbWUpID0+IHtcbiAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pO1xuICBzb2NrZXQub24od2luZG93LmV2ZW50cy5sb2dnZWRJbiwgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCBuaWNrbmFtZSk7XG4gICAgaW5pdFNvY2tldHMoc29ja2V0KTtcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgfSk7XG4gIHNvY2tldC5vbih3aW5kb3cuZXZlbnRzLnVuYXV0aGVudGljYXRlZCwgKCkgPT4ge1xuICAgIGhhbmRsZVVuYXV0aGVudGljYXRlZChuaWNrbmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oTklDS05BTUUpO1xuICB9KTtcbn07XG5cbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XG59IGVsc2Uge1xuICBsb2dJbihuaWNrbmFtZSk7XG59XG5cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgbG9nSW4odmFsdWUpO1xufTtcblxuaWYgKGxvZ2luRm9ybSkge1xuICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcbn1cbiJdfQ==
},{"./notifications":4,"./sockets":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleUnauthenticated = exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.body;

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  fireNotification("".concat(nickname, " just joined!"), "rgba(76, 217, 100, 0.5)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  fireNotification("".concat(nickname, " just left!"), "rgba(255, 59, 48, 0.5)");
};

exports.handleDisconnected = handleDisconnected;

var handleUnauthenticated = function handleUnauthenticated(nickname) {
  fireNotification("".concat(nickname, " is already existent nickname!"), "rgba(44, 44, 44, 0.5)");
};

exports.handleUnauthenticated = handleUnauthenticated;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwiZmlyZU5vdGlmaWNhdGlvbiIsInRleHQiLCJjb2xvciIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiaGFuZGxlTmV3VXNlciIsIm5pY2tuYW1lIiwiaGFuZGxlRGlzY29ubmVjdGVkIiwiaGFuZGxlVW5hdXRoZW50aWNhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0QsSUFBdEI7O0FBRUEsSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDeEMsTUFBTUMsWUFBWSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFDQUQsRUFBQUEsWUFBWSxDQUFDRSxTQUFiLEdBQXlCSixJQUF6QjtBQUNBRSxFQUFBQSxZQUFZLENBQUNHLEtBQWIsQ0FBbUJDLGVBQW5CLEdBQXFDTCxLQUFyQztBQUNBQyxFQUFBQSxZQUFZLENBQUNLLFNBQWIsR0FBeUIsY0FBekI7QUFDQVYsRUFBQUEsSUFBSSxDQUFDVyxXQUFMLENBQWlCTixZQUFqQjtBQUNELENBTkQ7O0FBUU8sSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM3Q1gsRUFBQUEsZ0JBQWdCLFdBQUlXLFFBQUosb0JBQTZCLHlCQUE3QixDQUFoQjtBQUNELENBRk07Ozs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLFFBQWtCO0FBQUEsTUFBZkQsUUFBZSxTQUFmQSxRQUFlO0FBQ2xEWCxFQUFBQSxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsd0JBQTNCLENBQWhCO0FBQ0QsQ0FGTTs7OztBQUlBLElBQU1FLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0YsUUFBRCxFQUFjO0FBQ2pEWCxFQUFBQSxnQkFBZ0IsV0FDWFcsUUFEVyxxQ0FFZCx1QkFGYyxDQUFoQjtBQUlELENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcikgPT4ge1xuICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gdGV4dDtcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gXCJub3RpZmljYXRpb25cIjtcbiAgYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PiB7XG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkIWAsIFwicmdiYSg3NiwgMjE3LCAxMDAsIDAuNSlcIik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT4ge1xuICBmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGxlZnQhYCwgXCJyZ2JhKDI1NSwgNTksIDQ4LCAwLjUpXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVVuYXV0aGVudGljYXRlZCA9IChuaWNrbmFtZSkgPT4ge1xuICBmaXJlTm90aWZpY2F0aW9uKFxuICAgIGAke25pY2tuYW1lfSBpcyBhbHJlYWR5IGV4aXN0ZW50IG5pY2tuYW1lIWAsXG4gICAgXCJyZ2JhKDQ0LCA0NCwgNDQsIDAuNSlcIlxuICApO1xufTtcbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCanvas = exports.saveAnchor = exports.showCanvasControls = exports.hideCanvasControls = exports.enableCanvas = exports.disableCanvas = exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _socketController = _interopRequireDefault(require("../../src/socketController"));

var _sockets = require("./sockets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var canvas = document.getElementById("jsCanvas");
var controls = document.getElementById("jsControls");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var ctx = canvas.getContext("2d");
var INITIAL_COLOR = "#2c2c2c";
var saveLink = null;
canvas.width = 450;
canvas.height = 450;
ctx.lineWidth = 2.5;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
var painting = false;
var filling = false;

function startPainting(e) {
  ctx.beginPath();
  (0, _sockets.getSocket)().emit(window.events.beginPath, {
    x: e.offsetX,
    y: e.offsetY
  });
  painting = true;
}

function stopPainting() {
  painting = false;
}

var strokePath = function strokePath(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
};

function onMouseMove(e) {
  if (!filling) {
    var x = e.offsetX;
    var y = e.offsetY;

    if (painting) {
      strokePath(x, y);
      (0, _sockets.getSocket)().emit(window.events.strokePath, {
        x: x,
        y: y,
        color: ctx.strokeStyle
      });
    }
  }
}

function handleColorClick() {
  var _this = this;

  var target = this;
  var color = target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  target.classList.add("controls__color--click");
  target.addEventListener("transitionend", function () {
    target.classList.remove("controls__color--click");
    target.removeEventListener("click", _this);
  });
}

function handleModeClick() {
  if (filling) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;
  if (color !== null) ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = currentColor;
}

function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
}

var _iterator = _createForOfIteratorHelper(colors),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var color = _step.value;
    color.addEventListener("click", handleColorClick);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

if (mode) mode.addEventListener("click", handleModeClick);

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  ctx.beginPath();
  ctx.moveTo(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? null : _ref2$color;
  var currentColor = ctx.strokeStyle;
  if (color !== null) ctx.strokeStyle = color;
  strokePath(x, y);
  ctx.strokeStyle = currentColor;
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;

var disableCanvas = function disableCanvas() {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("click", handleCanvasClick);
};

exports.disableCanvas = disableCanvas;

var enableCanvas = function enableCanvas() {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
};

exports.enableCanvas = enableCanvas;

var hideCanvasControls = function hideCanvasControls() {
  return controls.style.display = "none";
};

exports.hideCanvasControls = hideCanvasControls;

var showCanvasControls = function showCanvasControls() {
  return controls.style.display = "flex";
};

exports.showCanvasControls = showCanvasControls;

var saveAnchor = function saveAnchor(word) {
  saveLink = document.createElement("a");
  saveLink.download = "".concat(word, ".png");
  saveLink.href = canvas.toDataURL();
};

exports.saveAnchor = saveAnchor;

var resetCanvas = function resetCanvas() {
  return fill("#fff");
};

exports.resetCanvas = resetCanvas;

if (canvas) {
  canvas.addEventListener("contextmenu", function (event) {
    return event.preventDefault();
  });
  hideCanvasControls();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cm9scyIsImNvbG9ycyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtb2RlIiwiY3R4IiwiZ2V0Q29udGV4dCIsIklOSVRJQUxfQ09MT1IiLCJzYXZlTGluayIsIndpZHRoIiwiaGVpZ2h0IiwibGluZVdpZHRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsInBhaW50aW5nIiwiZmlsbGluZyIsInN0YXJ0UGFpbnRpbmciLCJlIiwiYmVnaW5QYXRoIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsIngiLCJvZmZzZXRYIiwieSIsIm9mZnNldFkiLCJzdG9wUGFpbnRpbmciLCJzdHJva2VQYXRoIiwibGluZVRvIiwic3Ryb2tlIiwib25Nb3VzZU1vdmUiLCJjb2xvciIsImhhbmRsZUNvbG9yQ2xpY2siLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlTW9kZUNsaWNrIiwiaW5uZXJUZXh0IiwiZmlsbCIsImN1cnJlbnRDb2xvciIsImhhbmRsZUNhbnZhc0NsaWNrIiwiaGFuZGxlQmVnYW5QYXRoIiwibW92ZVRvIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJoYW5kbGVGaWxsZWQiLCJkaXNhYmxlQ2FudmFzIiwiZW5hYmxlQ2FudmFzIiwiaGlkZUNhbnZhc0NvbnRyb2xzIiwiZGlzcGxheSIsInNob3dDYW52YXNDb250cm9scyIsInNhdmVBbmNob3IiLCJ3b3JkIiwiY3JlYXRlRWxlbWVudCIsImRvd25sb2FkIiwiaHJlZiIsInRvRGF0YVVSTCIsInJlc2V0Q2FudmFzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsSUFBTUUsTUFBTSxHQUFHSCxRQUFRLENBQUNJLHNCQUFULENBQWdDLFNBQWhDLENBQWY7QUFDQSxJQUFNQyxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBRUEsSUFBTUssR0FBRyxHQUFHUCxNQUFNLENBQUNRLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUVBLElBQUlDLGFBQWEsR0FBRyxTQUFwQjtBQUNBLElBQUlDLFFBQVEsR0FBRyxJQUFmO0FBRUFWLE1BQU0sQ0FBQ1csS0FBUCxHQUFlLEdBQWY7QUFDQVgsTUFBTSxDQUFDWSxNQUFQLEdBQWdCLEdBQWhCO0FBRUFMLEdBQUcsQ0FBQ00sU0FBSixHQUFnQixHQUFoQjtBQUNBTixHQUFHLENBQUNPLFNBQUosR0FBZ0IsT0FBaEI7QUFDQVAsR0FBRyxDQUFDUSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQmYsTUFBTSxDQUFDVyxLQUExQixFQUFpQ1gsTUFBTSxDQUFDWSxNQUF4QztBQUNBTCxHQUFHLENBQUNTLFdBQUosR0FBa0JQLGFBQWxCO0FBQ0FGLEdBQUcsQ0FBQ08sU0FBSixHQUFnQkwsYUFBaEI7QUFFQSxJQUFJUSxRQUFRLEdBQUcsS0FBZjtBQUNBLElBQUlDLE9BQU8sR0FBRyxLQUFkOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0FBQ3hCYixFQUFBQSxHQUFHLENBQUNjLFNBQUo7QUFDQSw0QkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNILFNBQS9CLEVBQTBDO0FBQUVJLElBQUFBLENBQUMsRUFBRUwsQ0FBQyxDQUFDTSxPQUFQO0FBQWdCQyxJQUFBQSxDQUFDLEVBQUVQLENBQUMsQ0FBQ1E7QUFBckIsR0FBMUM7QUFDQVgsRUFBQUEsUUFBUSxHQUFHLElBQVg7QUFDRDs7QUFFRCxTQUFTWSxZQUFULEdBQXdCO0FBQ3RCWixFQUFBQSxRQUFRLEdBQUcsS0FBWDtBQUNEOztBQUVELElBQU1hLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNMLENBQUQsRUFBSUUsQ0FBSixFQUFVO0FBQzNCcEIsRUFBQUEsR0FBRyxDQUFDd0IsTUFBSixDQUFXTixDQUFYLEVBQWNFLENBQWQ7QUFDQXBCLEVBQUFBLEdBQUcsQ0FBQ3lCLE1BQUo7QUFDRCxDQUhEOztBQUtBLFNBQVNDLFdBQVQsQ0FBcUJiLENBQXJCLEVBQXdCO0FBQ3RCLE1BQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1osUUFBTU8sQ0FBQyxHQUFHTCxDQUFDLENBQUNNLE9BQVo7QUFDQSxRQUFNQyxDQUFDLEdBQUdQLENBQUMsQ0FBQ1EsT0FBWjs7QUFDQSxRQUFJWCxRQUFKLEVBQWM7QUFDWmEsTUFBQUEsVUFBVSxDQUFDTCxDQUFELEVBQUlFLENBQUosQ0FBVjtBQUNBLGdDQUFZTCxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY00sVUFBL0IsRUFBMkM7QUFDekNMLFFBQUFBLENBQUMsRUFBREEsQ0FEeUM7QUFFekNFLFFBQUFBLENBQUMsRUFBREEsQ0FGeUM7QUFHekNPLFFBQUFBLEtBQUssRUFBRTNCLEdBQUcsQ0FBQ1M7QUFIOEIsT0FBM0M7QUFLRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBU21CLGdCQUFULEdBQTRCO0FBQUE7O0FBQzFCLE1BQU1DLE1BQU0sR0FBRyxJQUFmO0FBQ0EsTUFBTUYsS0FBSyxHQUFHRSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsZUFBM0I7QUFDQS9CLEVBQUFBLEdBQUcsQ0FBQ1MsV0FBSixHQUFrQmtCLEtBQWxCO0FBQ0EzQixFQUFBQSxHQUFHLENBQUNPLFNBQUosR0FBZ0JvQixLQUFoQjtBQUNBRSxFQUFBQSxNQUFNLENBQUNHLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLHdCQUFyQjtBQUNBSixFQUFBQSxNQUFNLENBQUNLLGdCQUFQLENBQXdCLGVBQXhCLEVBQXlDLFlBQU07QUFDN0NMLElBQUFBLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkcsTUFBakIsQ0FBd0Isd0JBQXhCO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0MsS0FBcEM7QUFDRCxHQUhEO0FBSUQ7O0FBRUQsU0FBU0MsZUFBVCxHQUEyQjtBQUN6QixNQUFJMUIsT0FBSixFQUFhO0FBQ1hBLElBQUFBLE9BQU8sR0FBRyxLQUFWO0FBQ0FaLElBQUFBLElBQUksQ0FBQ3VDLFNBQUwsR0FBaUIsTUFBakI7QUFDRCxHQUhELE1BR087QUFDTDNCLElBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0FaLElBQUFBLElBQUksQ0FBQ3VDLFNBQUwsR0FBaUIsT0FBakI7QUFDRDtBQUNGOztBQUVELFNBQVNDLElBQVQsR0FBNEI7QUFBQSxNQUFkWixLQUFjLHVFQUFOLElBQU07QUFDMUIsTUFBTWEsWUFBWSxHQUFHeEMsR0FBRyxDQUFDTyxTQUF6QjtBQUNBLE1BQUlvQixLQUFLLEtBQUssSUFBZCxFQUFvQjNCLEdBQUcsQ0FBQ08sU0FBSixHQUFnQm9CLEtBQWhCO0FBQ3BCM0IsRUFBQUEsR0FBRyxDQUFDUSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQmYsTUFBTSxDQUFDVyxLQUExQixFQUFpQ1gsTUFBTSxDQUFDWSxNQUF4QztBQUNBTCxFQUFBQSxHQUFHLENBQUNPLFNBQUosR0FBZ0JpQyxZQUFoQjtBQUNEOztBQUVELFNBQVNDLGlCQUFULEdBQTZCO0FBQzNCLE1BQUk5QixPQUFKLEVBQWE7QUFDWDRCLElBQUFBLElBQUk7QUFDSiw4QkFBWXhCLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjc0IsSUFBL0IsRUFBcUM7QUFBRVosTUFBQUEsS0FBSyxFQUFFM0IsR0FBRyxDQUFDTztBQUFiLEtBQXJDO0FBQ0Q7QUFDRjs7MkNBRW1CVixNOzs7O0FBQXBCO0FBQUEsUUFBVzhCLEtBQVg7QUFBNEJBLElBQUFBLEtBQUssQ0FBQ08sZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0NOLGdCQUFoQztBQUE1Qjs7Ozs7OztBQUVBLElBQUk3QixJQUFKLEVBQVVBLElBQUksQ0FBQ21DLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCRyxlQUEvQjs7QUFFSCxJQUFNSyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWM7QUFBQSxNQUFYeEIsQ0FBVyxRQUFYQSxDQUFXO0FBQUEsTUFBUkUsQ0FBUSxRQUFSQSxDQUFRO0FBQzNDcEIsRUFBQUEsR0FBRyxDQUFDYyxTQUFKO0FBQ0FkLEVBQUFBLEdBQUcsQ0FBQzJDLE1BQUosQ0FBV3pCLENBQVgsRUFBY0UsQ0FBZDtBQUNELENBSE07Ozs7QUFJQSxJQUFNd0IsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixRQUE0QjtBQUFBLE1BQXpCMUIsQ0FBeUIsU0FBekJBLENBQXlCO0FBQUEsTUFBdEJFLENBQXNCLFNBQXRCQSxDQUFzQjtBQUFBLDBCQUFuQk8sS0FBbUI7QUFBQSxNQUFuQkEsS0FBbUIsNEJBQVgsSUFBVztBQUMzRCxNQUFNYSxZQUFZLEdBQUd4QyxHQUFHLENBQUNTLFdBQXpCO0FBQ0EsTUFBSWtCLEtBQUssS0FBSyxJQUFkLEVBQW9CM0IsR0FBRyxDQUFDUyxXQUFKLEdBQWtCa0IsS0FBbEI7QUFDcEJKLEVBQUFBLFVBQVUsQ0FBQ0wsQ0FBRCxFQUFJRSxDQUFKLENBQVY7QUFDQXBCLEVBQUFBLEdBQUcsQ0FBQ1MsV0FBSixHQUFrQitCLFlBQWxCO0FBQ0QsQ0FMTTs7OztBQU1BLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBR2xCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVZLElBQUksQ0FBQ1osS0FBRCxDQUFuQjtBQUFBLENBQXJCOzs7O0FBRUEsSUFBTW1CLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUNqQ3JELEVBQUFBLE1BQU0sQ0FBQzJDLG1CQUFQLENBQTJCLFdBQTNCLEVBQXdDVixXQUF4QztBQUNBakMsRUFBQUEsTUFBTSxDQUFDMkMsbUJBQVAsQ0FBMkIsV0FBM0IsRUFBd0N4QixhQUF4QztBQUNBbkIsRUFBQUEsTUFBTSxDQUFDMkMsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NkLFlBQXRDO0FBQ0E3QixFQUFBQSxNQUFNLENBQUMyQyxtQkFBUCxDQUEyQixZQUEzQixFQUF5Q2QsWUFBekM7QUFDQTdCLEVBQUFBLE1BQU0sQ0FBQzJDLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DSyxpQkFBcEM7QUFDRCxDQU5NOzs7O0FBUUEsSUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUNoQ3RELEVBQUFBLE1BQU0sQ0FBQ3lDLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDUixXQUFyQztBQUNBakMsRUFBQUEsTUFBTSxDQUFDeUMsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUN0QixhQUFyQztBQUNBbkIsRUFBQUEsTUFBTSxDQUFDeUMsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNaLFlBQW5DO0FBQ0E3QixFQUFBQSxNQUFNLENBQUN5QyxnQkFBUCxDQUF3QixZQUF4QixFQUFzQ1osWUFBdEM7QUFDQTdCLEVBQUFBLE1BQU0sQ0FBQ3lDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDTyxpQkFBakM7QUFDRCxDQU5NOzs7O0FBUUEsSUFBTU8sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLFNBQU9wRCxRQUFRLENBQUNrQyxLQUFULENBQWVtQixPQUFmLEdBQXlCLE1BQWhDO0FBQUEsQ0FBM0I7Ozs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsU0FBT3RELFFBQVEsQ0FBQ2tDLEtBQVQsQ0FBZW1CLE9BQWYsR0FBeUIsTUFBaEM7QUFBQSxDQUEzQjs7OztBQUVBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUNsQ2pELEVBQUFBLFFBQVEsR0FBR1QsUUFBUSxDQUFDMkQsYUFBVCxDQUF1QixHQUF2QixDQUFYO0FBQ0FsRCxFQUFBQSxRQUFRLENBQUNtRCxRQUFULGFBQXVCRixJQUF2QjtBQUNBakQsRUFBQUEsUUFBUSxDQUFDb0QsSUFBVCxHQUFnQjlELE1BQU0sQ0FBQytELFNBQVAsRUFBaEI7QUFDRCxDQUpNOzs7O0FBTUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUFNbEIsSUFBSSxDQUFDLE1BQUQsQ0FBVjtBQUFBLENBQXBCOzs7O0FBRVAsSUFBSTlDLE1BQUosRUFBWTtBQUNWQSxFQUFBQSxNQUFNLENBQUN5QyxnQkFBUCxDQUF3QixhQUF4QixFQUF1QyxVQUFDd0IsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsY0FBTixFQUFYO0FBQUEsR0FBdkM7QUFDQVgsRUFBQUEsa0JBQWtCO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNvY2tldENvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL3NyYy9zb2NrZXRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDb250cm9sc1wiKTtcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqc0NvbG9yXCIpO1xuY29uc3QgbW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNb2RlXCIpO1xuXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5sZXQgSU5JVElBTF9DT0xPUiA9IFwiIzJjMmMyY1wiO1xubGV0IHNhdmVMaW5rID0gbnVsbDtcblxuY2FudmFzLndpZHRoID0gNDUwO1xuY2FudmFzLmhlaWdodCA9IDQ1MDtcblxuY3R4LmxpbmVXaWR0aCA9IDIuNTtcbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5jdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG5jdHguZmlsbFN0eWxlID0gSU5JVElBTF9DT0xPUjtcblxubGV0IHBhaW50aW5nID0gZmFsc2U7XG5sZXQgZmlsbGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzdGFydFBhaW50aW5nKGUpIHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZIH0pO1xuICBwYWludGluZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHN0b3BQYWludGluZygpIHtcbiAgcGFpbnRpbmcgPSBmYWxzZTtcbn1cblxuY29uc3Qgc3Ryb2tlUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5saW5lVG8oeCwgeSk7XG4gIGN0eC5zdHJva2UoKTtcbn07XG5cbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcbiAgaWYgKCFmaWxsaW5nKSB7XG4gICAgY29uc3QgeCA9IGUub2Zmc2V0WDtcbiAgICBjb25zdCB5ID0gZS5vZmZzZXRZO1xuICAgIGlmIChwYWludGluZykge1xuICAgICAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zdHJva2VQYXRoLCB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGNvbG9yOiBjdHguc3Ryb2tlU3R5bGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ29sb3JDbGljaygpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGhpcztcbiAgY29uc3QgY29sb3IgPSB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImNvbnRyb2xzX19jb2xvci0tY2xpY2tcIik7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJjb250cm9sc19fY29sb3ItLWNsaWNrXCIpO1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb2RlQ2xpY2soKSB7XG4gIGlmIChmaWxsaW5nKSB7XG4gICAgZmlsbGluZyA9IGZhbHNlO1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJGaWxsXCI7XG4gIH0gZWxzZSB7XG4gICAgZmlsbGluZyA9IHRydWU7XG4gICAgbW9kZS5pbm5lclRleHQgPSBcIlBhaW50XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbChjb2xvciA9IG51bGwpIHtcbiAgY29uc3QgY3VycmVudENvbG9yID0gY3R4LmZpbGxTdHlsZTtcbiAgaWYgKGNvbG9yICE9PSBudWxsKSBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gY3VycmVudENvbG9yO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDYW52YXNDbGljaygpIHtcbiAgaWYgKGZpbGxpbmcpIHtcbiAgICBmaWxsKCk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmZpbGwsIHsgY29sb3I6IGN0eC5maWxsU3R5bGUgfSk7XG4gIH1cbn1cblxuZm9yIChjb25zdCBjb2xvciBvZiBjb2xvcnMpIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDb2xvckNsaWNrKTtcblxuaWYgKG1vZGUpIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHgsIHkpO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHksIGNvbG9yID0gbnVsbCB9KSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDb2xvciA9IGN0eC5zdHJva2VTdHlsZTtcbiAgaWYgKGNvbG9yICE9PSBudWxsKSBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudENvbG9yO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVGaWxsZWQgPSAoeyBjb2xvciB9KSA9PiBmaWxsKGNvbG9yKTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVDYW52YXMgPSAoKSA9PiB7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlQ2FudmFzID0gKCkgPT4ge1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2FudmFzQ2xpY2spO1xufTtcblxuZXhwb3J0IGNvbnN0IGhpZGVDYW52YXNDb250cm9scyA9ICgpID0+IChjb250cm9scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NhbnZhc0NvbnRyb2xzID0gKCkgPT4gKGNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIik7XG5cbmV4cG9ydCBjb25zdCBzYXZlQW5jaG9yID0gKHdvcmQpID0+IHtcbiAgc2F2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgc2F2ZUxpbmsuZG93bmxvYWQgPSBgJHt3b3JkfS5wbmdgO1xuICBzYXZlTGluay5ocmVmID0gY2FudmFzLnRvRGF0YVVSTCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0Q2FudmFzID0gKCkgPT4gZmlsbChcIiNmZmZcIik7XG5cbmlmIChjYW52YXMpIHtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuICBoaWRlQ2FudmFzQ29udHJvbHMoKTtcbn1cbiJdfQ==
},{"../../src/socketController":9,"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGameStarting = exports.handleGameEnded = exports.handleLeaderNotif = exports.handleGameStarted = exports.handlePlayerUpdate = void 0;

var _chat = require("./chat");

var _login = require("./login");

var _paint = require("./paint");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var board = document.getElementById("jsPBoard");
var notifs = document.getElementById("jsNotifs");

var addPlayers = function addPlayers(players) {
  board.innerHTML = "";

  var _iterator = _createForOfIteratorHelper(players),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var player = _step.value;
      var playerElement = document.createElement("span");
      playerElement.innerText = "".concat(player.nickname, ": ").concat(player.points);
      board.appendChild(playerElement);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var setNotifs = function setNotifs(text) {
  notifs.innerText = text;
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;

var handleGameStarted = function handleGameStarted() {
  (0, _paint.disableCanvas)();
  (0, _paint.hideCanvasControls)();
  setNotifs("");
};

exports.handleGameStarted = handleGameStarted;

var handleLeaderNotif = function handleLeaderNotif(_ref2) {
  var word = _ref2.word;
  (0, _paint.enableCanvas)();
  (0, _paint.showCanvasControls)();
  (0, _chat.disableChat)();
  setNotifs("You are the leader, paint: ".concat(word));
};

exports.handleLeaderNotif = handleLeaderNotif;

var handleGameEnded = function handleGameEnded(_ref3) {
  var word = _ref3.word,
      leaderNickname = _ref3.leaderNickname;
  setNotifs("Game ended.");
  if (localStorage.getItem(_login.NICKNAME) === leaderNickname) (0, _paint.saveAnchor)(word);
  (0, _paint.disableCanvas)();
  (0, _paint.hideCanvasControls)();
  (0, _paint.resetCanvas)();
  (0, _chat.enableChat)();
};

exports.handleGameEnded = handleGameEnded;

var handleGameStarting = function handleGameStarting() {
  return setNotifs("Game will start soon");
};

exports.handleGameStarting = handleGameStarting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibm90aWZzIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJwbGF5ZXIiLCJwbGF5ZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsIm5pY2tuYW1lIiwicG9pbnRzIiwiYXBwZW5kQ2hpbGQiLCJzZXROb3RpZnMiLCJ0ZXh0IiwiaGFuZGxlUGxheWVyVXBkYXRlIiwic29ja2V0cyIsImhhbmRsZUdhbWVTdGFydGVkIiwiaGFuZGxlTGVhZGVyTm90aWYiLCJ3b3JkIiwiaGFuZGxlR2FtZUVuZGVkIiwibGVhZGVyTmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTklDS05BTUUiLCJoYW5kbGVHYW1lU3RhcnRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFTQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjs7QUFFQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFDOUJMLEVBQUFBLEtBQUssQ0FBQ00sU0FBTixHQUFrQixFQUFsQjs7QUFEOEIsNkNBRVRELE9BRlM7QUFBQTs7QUFBQTtBQUU5Qix3REFBOEI7QUFBQSxVQUFuQkUsTUFBbUI7QUFDNUIsVUFBTUMsYUFBYSxHQUFHUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBdEI7QUFDQUQsTUFBQUEsYUFBYSxDQUFDRSxTQUFkLGFBQTZCSCxNQUFNLENBQUNJLFFBQXBDLGVBQWlESixNQUFNLENBQUNLLE1BQXhEO0FBQ0FaLE1BQUFBLEtBQUssQ0FBQ2EsV0FBTixDQUFrQkwsYUFBbEI7QUFDRDtBQU42QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTy9CLENBUEQ7O0FBU0EsSUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0FBQzFCWixFQUFBQSxNQUFNLENBQUNPLFNBQVAsR0FBbUJLLElBQW5CO0FBQ0QsQ0FGRDs7QUFJTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUJiLFVBQVUsQ0FBQ2EsT0FBRCxDQUEzQjtBQUFBLENBQTNCOzs7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ3JDO0FBQ0E7QUFDQUosRUFBQUEsU0FBUyxDQUFDLEVBQUQsQ0FBVDtBQUNELENBSk07Ozs7QUFLQSxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLFFBQWM7QUFBQSxNQUFYQyxJQUFXLFNBQVhBLElBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0FOLEVBQUFBLFNBQVMsc0NBQStCTSxJQUEvQixFQUFUO0FBQ0QsQ0FMTTs7OztBQU1BLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBOEI7QUFBQSxNQUEzQkQsSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsTUFBckJFLGNBQXFCLFNBQXJCQSxjQUFxQjtBQUMzRFIsRUFBQUEsU0FBUyxDQUFDLGFBQUQsQ0FBVDtBQUNBLE1BQUlTLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkMsZUFBckIsTUFBbUNILGNBQXZDLEVBQXVELHVCQUFXRixJQUFYO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FQTTs7OztBQVFBLElBQU1NLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFNWixTQUFTLENBQUMsc0JBQUQsQ0FBZjtBQUFBLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlzYWJsZUNoYXQsIGVuYWJsZUNoYXQgfSBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQgeyBOSUNLTkFNRSB9IGZyb20gXCIuL2xvZ2luXCI7XG5pbXBvcnQge1xuICBkaXNhYmxlQ2FudmFzLFxuICBlbmFibGVDYW52YXMsXG4gIGhpZGVDYW52YXNDb250cm9scyxcbiAgcmVzZXRDYW52YXMsXG4gIHNhdmVBbmNob3IsXG4gIHNob3dDYW52YXNDb250cm9scyxcbn0gZnJvbSBcIi4vcGFpbnRcIjtcblxuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUEJvYXJkXCIpO1xuY29uc3Qgbm90aWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmc1wiKTtcblxuY29uc3QgYWRkUGxheWVycyA9IChwbGF5ZXJzKSA9PiB7XG4gIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAoY29uc3QgcGxheWVyIG9mIHBsYXllcnMpIHtcbiAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcGxheWVyRWxlbWVudC5pbm5lclRleHQgPSBgJHtwbGF5ZXIubmlja25hbWV9OiAke3BsYXllci5wb2ludHN9YDtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJFbGVtZW50KTtcbiAgfVxufTtcblxuY29uc3Qgc2V0Tm90aWZzID0gKHRleHQpID0+IHtcbiAgbm90aWZzLmlubmVyVGV4dCA9IHRleHQ7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlUGxheWVyVXBkYXRlID0gKHsgc29ja2V0cyB9KSA9PiBhZGRQbGF5ZXJzKHNvY2tldHMpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVTdGFydGVkID0gKCkgPT4ge1xuICBkaXNhYmxlQ2FudmFzKCk7XG4gIGhpZGVDYW52YXNDb250cm9scygpO1xuICBzZXROb3RpZnMoXCJcIik7XG59O1xuZXhwb3J0IGNvbnN0IGhhbmRsZUxlYWRlck5vdGlmID0gKHsgd29yZCB9KSA9PiB7XG4gIGVuYWJsZUNhbnZhcygpO1xuICBzaG93Q2FudmFzQ29udHJvbHMoKTtcbiAgZGlzYWJsZUNoYXQoKTtcbiAgc2V0Tm90aWZzKGBZb3UgYXJlIHRoZSBsZWFkZXIsIHBhaW50OiAke3dvcmR9YCk7XG59O1xuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVFbmRlZCA9ICh7IHdvcmQsIGxlYWRlck5pY2tuYW1lIH0pID0+IHtcbiAgc2V0Tm90aWZzKFwiR2FtZSBlbmRlZC5cIik7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSkgPT09IGxlYWRlck5pY2tuYW1lKSBzYXZlQW5jaG9yKHdvcmQpO1xuICBkaXNhYmxlQ2FudmFzKCk7XG4gIGhpZGVDYW52YXNDb250cm9scygpO1xuICByZXNldENhbnZhcygpO1xuICBlbmFibGVDaGF0KCk7XG59O1xuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVTdGFydGluZyA9ICgpID0+IHNldE5vdGlmcyhcIkdhbWUgd2lsbCBzdGFydCBzb29uXCIpO1xuIl19
},{"./chat":1,"./login":3,"./paint":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var _paint = require("./paint");

var _players = require("./players");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMsg);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
  socket.on(events.playerUpdate, _players.handlePlayerUpdate);
  socket.on(events.gameStarted, _players.handleGameStarted);
  socket.on(events.leaderNotif, _players.handleLeaderNotif);
  socket.on(events.gameEnded, _players.handleGameEnded);
  socket.on(events.gameStarting, _players.handleGameStarting);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01zZyIsImJlZ2FuUGF0aCIsImhhbmRsZUJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJmaWxsZWQiLCJoYW5kbGVGaWxsZWQiLCJwbGF5ZXJVcGRhdGUiLCJoYW5kbGVQbGF5ZXJVcGRhdGUiLCJnYW1lU3RhcnRlZCIsImhhbmRsZUdhbWVTdGFydGVkIiwibGVhZGVyTm90aWYiLCJoYW5kbGVMZWFkZXJOb3RpZiIsImdhbWVFbmRlZCIsImhhbmRsZUdhbWVFbmRlZCIsImdhbWVTdGFydGluZyIsImhhbmRsZUdhbWVTdGFydGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQVFBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFhO0FBQ3RDLGdCQUFtQkMsTUFBbkI7QUFBQSxNQUFRQyxNQUFSLFdBQVFBLE1BQVI7QUFDQUwsRUFBQUEsTUFBTSxHQUFHRyxPQUFUO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNFLE9BQWpCLEVBQTBCQyw0QkFBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0ksWUFBakIsRUFBK0JDLGlDQUEvQjtBQUNBVixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDTSxNQUFqQixFQUF5QkMsa0JBQXpCO0FBQ0FaLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNRLFNBQWpCLEVBQTRCQyxzQkFBNUI7QUFDQWQsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1UsV0FBakIsRUFBOEJDLHdCQUE5QjtBQUNBaEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1ksTUFBakIsRUFBeUJDLG1CQUF6QjtBQUNBbEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2MsWUFBakIsRUFBK0JDLDJCQUEvQjtBQUNBcEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2dCLFdBQWpCLEVBQThCQywwQkFBOUI7QUFDQXRCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNrQixXQUFqQixFQUE4QkMsMEJBQTlCO0FBQ0F4QixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDb0IsU0FBakIsRUFBNEJDLHdCQUE1QjtBQUNBMUIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ3NCLFlBQWpCLEVBQStCQywyQkFBL0I7QUFDRCxDQWRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3TXNnIH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgaGFuZGxlRGlzY29ubmVjdGVkLCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVGaWxsZWQsIGhhbmRsZVN0cm9rZWRQYXRoIH0gZnJvbSBcIi4vcGFpbnRcIjtcbmltcG9ydCB7XG4gIGhhbmRsZUdhbWVFbmRlZCxcbiAgaGFuZGxlR2FtZVN0YXJ0ZWQsXG4gIGhhbmRsZUdhbWVTdGFydGluZyxcbiAgaGFuZGxlTGVhZGVyTm90aWYsXG4gIGhhbmRsZVBsYXllclVwZGF0ZSxcbn0gZnJvbSBcIi4vcGxheWVyc1wiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgc29ja2V0ID0gYVNvY2tldDtcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XG4gIHNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNc2cpO1xuICBzb2NrZXQub24oZXZlbnRzLmJlZ2FuUGF0aCwgaGFuZGxlQmVnYW5QYXRoKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5zdHJva2VkUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGgpO1xuICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5wbGF5ZXJVcGRhdGUsIGhhbmRsZVBsYXllclVwZGF0ZSk7XG4gIHNvY2tldC5vbihldmVudHMuZ2FtZVN0YXJ0ZWQsIGhhbmRsZUdhbWVTdGFydGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5sZWFkZXJOb3RpZiwgaGFuZGxlTGVhZGVyTm90aWYpO1xuICBzb2NrZXQub24oZXZlbnRzLmdhbWVFbmRlZCwgaGFuZGxlR2FtZUVuZGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5nYW1lU3RhcnRpbmcsIGhhbmRsZUdhbWVTdGFydGluZyk7XG59O1xuIl19
},{"./chat":1,"./notifications":4,"./paint":5,"./players":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var events = {
  setNickname: "setNickname",
  newUser: "newUser",
  loggedIn: "loggedIn",
  unauthenticated: "unauthenticated",
  disconnect: "disconnect",
  disconnected: "disconnected",
  sendMsg: "sendMsg",
  newMsg: "newMsg",
  beginPath: "beginPath",
  strokePath: "strokePath",
  beganPath: "beganPath",
  strokedPath: "strokedPath",
  fill: "fill",
  filled: "filled",
  playerUpdate: "playerUpdate",
  gameStarted: "gameStarted",
  leaderNotif: "leaderNotif",
  gameEnded: "gameEnded",
  gameStarting: "gameStarting"
};
var _default = events;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6WyJldmVudHMiLCJzZXROaWNrbmFtZSIsIm5ld1VzZXIiLCJsb2dnZWRJbiIsInVuYXV0aGVudGljYXRlZCIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0ZWQiLCJzZW5kTXNnIiwibmV3TXNnIiwiYmVnaW5QYXRoIiwic3Ryb2tlUGF0aCIsImJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiZmlsbCIsImZpbGxlZCIsInBsYXllclVwZGF0ZSIsImdhbWVTdGFydGVkIiwibGVhZGVyTm90aWYiLCJnYW1lRW5kZWQiLCJnYW1lU3RhcnRpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxXQUFXLEVBQUUsYUFEQTtBQUViQyxFQUFBQSxPQUFPLEVBQUUsU0FGSTtBQUdiQyxFQUFBQSxRQUFRLEVBQUUsVUFIRztBQUliQyxFQUFBQSxlQUFlLEVBQUUsaUJBSko7QUFLYkMsRUFBQUEsVUFBVSxFQUFFLFlBTEM7QUFNYkMsRUFBQUEsWUFBWSxFQUFFLGNBTkQ7QUFPYkMsRUFBQUEsT0FBTyxFQUFFLFNBUEk7QUFRYkMsRUFBQUEsTUFBTSxFQUFFLFFBUks7QUFTYkMsRUFBQUEsU0FBUyxFQUFFLFdBVEU7QUFVYkMsRUFBQUEsVUFBVSxFQUFFLFlBVkM7QUFXYkMsRUFBQUEsU0FBUyxFQUFFLFdBWEU7QUFZYkMsRUFBQUEsV0FBVyxFQUFFLGFBWkE7QUFhYkMsRUFBQUEsSUFBSSxFQUFFLE1BYk87QUFjYkMsRUFBQUEsTUFBTSxFQUFFLFFBZEs7QUFlYkMsRUFBQUEsWUFBWSxFQUFFLGNBZkQ7QUFnQmJDLEVBQUFBLFdBQVcsRUFBRSxhQWhCQTtBQWlCYkMsRUFBQUEsV0FBVyxFQUFFLGFBakJBO0FBa0JiQyxFQUFBQSxTQUFTLEVBQUUsV0FsQkU7QUFtQmJDLEVBQUFBLFlBQVksRUFBRTtBQW5CRCxDQUFmO2VBc0JlbkIsTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV2ZW50cyA9IHtcbiAgc2V0Tmlja25hbWU6IFwic2V0Tmlja25hbWVcIixcbiAgbmV3VXNlcjogXCJuZXdVc2VyXCIsXG4gIGxvZ2dlZEluOiBcImxvZ2dlZEluXCIsXG4gIHVuYXV0aGVudGljYXRlZDogXCJ1bmF1dGhlbnRpY2F0ZWRcIixcbiAgZGlzY29ubmVjdDogXCJkaXNjb25uZWN0XCIsXG4gIGRpc2Nvbm5lY3RlZDogXCJkaXNjb25uZWN0ZWRcIixcbiAgc2VuZE1zZzogXCJzZW5kTXNnXCIsXG4gIG5ld01zZzogXCJuZXdNc2dcIixcbiAgYmVnaW5QYXRoOiBcImJlZ2luUGF0aFwiLFxuICBzdHJva2VQYXRoOiBcInN0cm9rZVBhdGhcIixcbiAgYmVnYW5QYXRoOiBcImJlZ2FuUGF0aFwiLFxuICBzdHJva2VkUGF0aDogXCJzdHJva2VkUGF0aFwiLFxuICBmaWxsOiBcImZpbGxcIixcbiAgZmlsbGVkOiBcImZpbGxlZFwiLFxuICBwbGF5ZXJVcGRhdGU6IFwicGxheWVyVXBkYXRlXCIsXG4gIGdhbWVTdGFydGVkOiBcImdhbWVTdGFydGVkXCIsXG4gIGxlYWRlck5vdGlmOiBcImxlYWRlck5vdGlmXCIsXG4gIGdhbWVFbmRlZDogXCJnYW1lRW5kZWRcIixcbiAgZ2FtZVN0YXJ0aW5nOiBcImdhbWVTdGFydGluZ1wiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzO1xuIl19
},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = _interopRequireDefault(require("./events"));

var _words = require("./words");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sockets = [];
var nicknames = [];
var inProgress = false;
var word = null;
var leader = null;

var chooseLeader = function chooseLeader() {
  return sockets[Math.floor(Math.random() * sockets.length)];
};

var socketController = function socketController(socket, io) {
  var broadcast = function broadcast(event, data) {
    return socket.broadcast.emit(event, data);
  };

  var superBroadcast = function superBroadcast(event, data) {
    return io.emit(event, data);
  };

  var sendPlayerUpdate = function sendPlayerUpdate() {
    return superBroadcast(_events["default"].playerUpdate, {
      sockets: sockets
    });
  };

  var startGame = function startGame() {
    if (inProgress == false) {
      inProgress = true;
      leader = chooseLeader();
      word = (0, _words.chooseWord)();
      superBroadcast(_events["default"].gameStarting);
      setTimeout(function () {
        superBroadcast(_events["default"].gameStarted);
        io.to(leader.id).emit(_events["default"].leaderNotif, {
          word: word
        });
      }, 5000);
    }
  };

  var endGame = function endGame() {
    inProgress = false;
    superBroadcast(_events["default"].gameEnded, {
      word: word,
      leaderNickname: "".concat(leader ? leader.nickname : null)
    });
    setTimeout(function () {
      return startGame();
    }, 2000);
  };

  var addPoint = function addPoint(id) {
    sockets = sockets.map(function (aSocket) {
      if (aSocket.id === id) {
        aSocket.points += 10;
      }

      return aSocket;
    });
    sendPlayerUpdate();
    endGame();
  };

  socket.on(_events["default"].setNickname, function (_ref) {
    var nickname = _ref.nickname;

    if (!nicknames.includes(nickname)) {
      socket.nickname = nickname;
      nicknames.push(nickname);
      sockets.push({
        id: socket.id,
        points: 0,
        nickname: nickname
      });
      socket.emit(_events["default"].loggedIn);
      broadcast(_events["default"].newUser, {
        nickname: nickname
      });
      sendPlayerUpdate();

      if (sockets.length > 1) {
        startGame();
      }
    } else {
      socket.emit(_events["default"].unauthenticated);
    }
  });
  socket.on(_events["default"].disconnect, function () {
    broadcast(_events["default"].disconnected, {
      nickname: socket.nickname
    });
    sockets = sockets.filter(function (aSocket) {
      return aSocket.id != socket.id;
    });
    nicknames = nicknames.filter(function (nickname) {
      return nickname != socket.nickname;
    });

    if (sockets.length == 1) {
      endGame();
    } else if (leader) {
      if (socket.id == leader.id) endGame();
    }

    sendPlayerUpdate();
  });
  socket.on(_events["default"].sendMsg, function (_ref2) {
    var message = _ref2.message;
    broadcast(_events["default"].newMsg, {
      message: message,
      nickname: socket.nickname
    });

    if (message === word) {
      superBroadcast(_events["default"].newMsg, {
        message: "Winner is: ".concat(socket.nickname, ", word was: ").concat(word),
        nickname: "Bot"
      });
      addPoint(socket.id);
    }
  });
  socket.on(_events["default"].beginPath, function (_ref3) {
    var x = _ref3.x,
        y = _ref3.y;
    return broadcast(_events["default"].beganPath, {
      x: x,
      y: y
    });
  });
  socket.on(_events["default"].strokePath, function (_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        color = _ref4.color;
    return broadcast(_events["default"].strokedPath, {
      x: x,
      y: y,
      color: color
    });
  });
  socket.on(_events["default"].fill, function (_ref5) {
    var color = _ref5.color;
    broadcast(_events["default"].filled, {
      color: color
    });
  });
};

var _default = socketController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic29ja2V0cyIsIm5pY2tuYW1lcyIsImluUHJvZ3Jlc3MiLCJ3b3JkIiwibGVhZGVyIiwiY2hvb3NlTGVhZGVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic29ja2V0Q29udHJvbGxlciIsInNvY2tldCIsImlvIiwiYnJvYWRjYXN0IiwiZXZlbnQiLCJkYXRhIiwiZW1pdCIsInN1cGVyQnJvYWRjYXN0Iiwic2VuZFBsYXllclVwZGF0ZSIsImV2ZW50cyIsInBsYXllclVwZGF0ZSIsInN0YXJ0R2FtZSIsImdhbWVTdGFydGluZyIsInNldFRpbWVvdXQiLCJnYW1lU3RhcnRlZCIsInRvIiwiaWQiLCJsZWFkZXJOb3RpZiIsImVuZEdhbWUiLCJnYW1lRW5kZWQiLCJsZWFkZXJOaWNrbmFtZSIsIm5pY2tuYW1lIiwiYWRkUG9pbnQiLCJtYXAiLCJhU29ja2V0IiwicG9pbnRzIiwib24iLCJzZXROaWNrbmFtZSIsImluY2x1ZGVzIiwicHVzaCIsImxvZ2dlZEluIiwibmV3VXNlciIsInVuYXV0aGVudGljYXRlZCIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0ZWQiLCJmaWx0ZXIiLCJzZW5kTXNnIiwibWVzc2FnZSIsIm5ld01zZyIsImJlZ2luUGF0aCIsIngiLCJ5IiwiYmVnYW5QYXRoIiwic3Ryb2tlUGF0aCIsImNvbG9yIiwic3Ryb2tlZFBhdGgiLCJmaWxsIiwiZmlsbGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFJQSxPQUFPLEdBQUcsRUFBZDtBQUNBLElBQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBLElBQUlDLFVBQVUsR0FBRyxLQUFqQjtBQUNBLElBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsSUFBSUMsTUFBTSxHQUFHLElBQWI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFNTCxPQUFPLENBQUNNLElBQUksQ0FB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R0EsQ0FBSDtBQUFBLFFBQU1DLENBQU4sU0FBTUEsQ0FBTjtBQUFBLFFBQVNHLEtBQVQsU0FBU0EsS0FBVDtBQUFBLFdBQzNCekMsU0FBUyxDQUFDTSxtQkFBT29DLFdBQVIsRUFBcUI7QUFBRUwsTUFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLE1BQUFBLENBQUMsRUFBREEsQ0FBTDtBQUFRRyxNQUFBQSxLQUFLLEVBQUxBO0FBQVIsS0FBckIsQ0FEa0I7QUFBQSxHQUE3QjtBQUlBM0MsRUFBQUEsTUFBTSxDQUFDeUIsRUFBUCxDQUFVakIsbUJBQU9xQyxJQUFqQixFQUF1QixpQkFBZTtBQUFBLFFBQVpGLEtBQVksU0FBWkEsS0FBWTtBQUNwQ3pDLElBQUFBLFNBQVMsQ0FBQ00sbUJBQU9zQyxNQUFSLEVBQWdCO0FBQUVILE1BQUFBLEtBQUssRUFBTEE7QUFBRixLQUFoQixDQUFUO0FBQ0QsR0FGRDtBQUdELENBdEZEOztlQXdGZTVDLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB7IGNob29zZVdvcmQgfSBmcm9tIFwiLi93b3Jkc1wiO1xuXG5sZXQgc29ja2V0cyA9IFtdO1xubGV0IG5pY2tuYW1lcyA9IFtdO1xubGV0IGluUHJvZ3Jlc3MgPSBmYWxzZTtcbmxldCB3b3JkID0gbnVsbDtcbmxldCBsZWFkZXIgPSBudWxsO1xuXG5jb25zdCBjaG9vc2VMZWFkZXIgPSAoKSA9PiBzb2NrZXRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNvY2tldHMubGVuZ3RoKV07XG5cbmNvbnN0IHNvY2tldENvbnRyb2xsZXIgPSAoc29ja2V0LCBpbykgPT4ge1xuICBjb25zdCBicm9hZGNhc3QgPSAoZXZlbnQsIGRhdGEpID0+IHNvY2tldC5icm9hZGNhc3QuZW1pdChldmVudCwgZGF0YSk7XG4gIGNvbnN0IHN1cGVyQnJvYWRjYXN0ID0gKGV2ZW50LCBkYXRhKSA9PiBpby5lbWl0KGV2ZW50LCBkYXRhKTtcbiAgY29uc3Qgc2VuZFBsYXllclVwZGF0ZSA9ICgpID0+XG4gICAgc3VwZXJCcm9hZGNhc3QoZXZlbnRzLnBsYXllclVwZGF0ZSwgeyBzb2NrZXRzIH0pO1xuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgaWYgKGluUHJvZ3Jlc3MgPT0gZmFsc2UpIHtcbiAgICAgIGluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgbGVhZGVyID0gY2hvb3NlTGVhZGVyKCk7XG4gICAgICB3b3JkID0gY2hvb3NlV29yZCgpO1xuICAgICAgc3VwZXJCcm9hZGNhc3QoZXZlbnRzLmdhbWVTdGFydGluZyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3VwZXJCcm9hZGNhc3QoZXZlbnRzLmdhbWVTdGFydGVkKTtcbiAgICAgICAgaW8udG8obGVhZGVyLmlkKS5lbWl0KGV2ZW50cy5sZWFkZXJOb3RpZiwgeyB3b3JkIH0pO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICAgIGluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICBzdXBlckJyb2FkY2FzdChldmVudHMuZ2FtZUVuZGVkLCB7XG4gICAgICB3b3JkLFxuICAgICAgbGVhZGVyTmlja25hbWU6IGAke2xlYWRlciA/IGxlYWRlci5uaWNrbmFtZSA6IG51bGx9YCxcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHN0YXJ0R2FtZSgpLCAyMDAwKTtcbiAgfTtcbiAgY29uc3QgYWRkUG9pbnQgPSAoaWQpID0+IHtcbiAgICBzb2NrZXRzID0gc29ja2V0cy5tYXAoKGFTb2NrZXQpID0+IHtcbiAgICAgIGlmIChhU29ja2V0LmlkID09PSBpZCkge1xuICAgICAgICBhU29ja2V0LnBvaW50cyArPSAxMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhU29ja2V0O1xuICAgIH0pO1xuICAgIHNlbmRQbGF5ZXJVcGRhdGUoKTtcbiAgICBlbmRHYW1lKCk7XG4gIH07XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5zZXROaWNrbmFtZSwgKHsgbmlja25hbWUgfSkgPT4ge1xuICAgIGlmICghbmlja25hbWVzLmluY2x1ZGVzKG5pY2tuYW1lKSkge1xuICAgICAgc29ja2V0Lm5pY2tuYW1lID0gbmlja25hbWU7XG4gICAgICBuaWNrbmFtZXMucHVzaChuaWNrbmFtZSk7XG4gICAgICBzb2NrZXRzLnB1c2goeyBpZDogc29ja2V0LmlkLCBwb2ludHM6IDAsIG5pY2tuYW1lOiBuaWNrbmFtZSB9KTtcbiAgICAgIHNvY2tldC5lbWl0KGV2ZW50cy5sb2dnZWRJbik7XG4gICAgICBicm9hZGNhc3QoZXZlbnRzLm5ld1VzZXIsIHsgbmlja25hbWUgfSk7XG4gICAgICBzZW5kUGxheWVyVXBkYXRlKCk7XG4gICAgICBpZiAoc29ja2V0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzb2NrZXQuZW1pdChldmVudHMudW5hdXRoZW50aWNhdGVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdCwgKCkgPT4ge1xuICAgIGJyb2FkY2FzdChldmVudHMuZGlzY29ubmVjdGVkLCB7IG5pY2tuYW1lOiBzb2NrZXQubmlja25hbWUgfSk7XG4gICAgc29ja2V0cyA9IHNvY2tldHMuZmlsdGVyKChhU29ja2V0KSA9PiBhU29ja2V0LmlkICE9IHNvY2tldC5pZCk7XG4gICAgbmlja25hbWVzID0gbmlja25hbWVzLmZpbHRlcigobmlja25hbWUpID0+IG5pY2tuYW1lICE9IHNvY2tldC5uaWNrbmFtZSk7XG4gICAgaWYgKHNvY2tldHMubGVuZ3RoID09IDEpIHtcbiAgICAgIGVuZEdhbWUoKTtcbiAgICB9IGVsc2UgaWYgKGxlYWRlcikge1xuICAgICAgaWYgKHNvY2tldC5pZCA9PSBsZWFkZXIuaWQpIGVuZEdhbWUoKTtcbiAgICB9XG4gICAgc2VuZFBsYXllclVwZGF0ZSgpO1xuICB9KTtcblxuICBzb2NrZXQub24oZXZlbnRzLnNlbmRNc2csICh7IG1lc3NhZ2UgfSkgPT4ge1xuICAgIGJyb2FkY2FzdChldmVudHMubmV3TXNnLCB7IG1lc3NhZ2UsIG5pY2tuYW1lOiBzb2NrZXQubmlja25hbWUgfSk7XG4gICAgaWYgKG1lc3NhZ2UgPT09IHdvcmQpIHtcbiAgICAgIHN1cGVyQnJvYWRjYXN0KGV2ZW50cy5uZXdNc2csIHtcbiAgICAgICAgbWVzc2FnZTogYFdpbm5lciBpczogJHtzb2NrZXQubmlja25hbWV9LCB3b3JkIHdhczogJHt3b3JkfWAsXG4gICAgICAgIG5pY2tuYW1lOiBcIkJvdFwiLFxuICAgICAgfSk7XG4gICAgICBhZGRQb2ludChzb2NrZXQuaWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5iZWdpblBhdGgsICh7IHgsIHkgfSkgPT5cbiAgICBicm9hZGNhc3QoZXZlbnRzLmJlZ2FuUGF0aCwgeyB4LCB5IH0pXG4gICk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5zdHJva2VQYXRoLCAoeyB4LCB5LCBjb2xvciB9KSA9PlxuICAgIGJyb2FkY2FzdChldmVudHMuc3Ryb2tlZFBhdGgsIHsgeCwgeSwgY29sb3IgfSlcbiAgKTtcblxuICBzb2NrZXQub24oZXZlbnRzLmZpbGwsICh7IGNvbG9yIH0pID0+IHtcbiAgICBicm9hZGNhc3QoZXZlbnRzLmZpbGxlZCwgeyBjb2xvciB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzb2NrZXRDb250cm9sbGVyO1xuIl19
},{"./events":8,"./words":10}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseWord = void 0;
var words = ["alarm", "animal", "aunt", "bait", "balloon", "bath", "bead", "beam", "bean", "bedroom", "boot", "bread", "brick", "brother", "camp", "chicken", "children", "crook", "deer", "dock", "doctor", "downtown", "drum", "dust", "eye", "family", "father", "fight", "flesh", "food", "frog", "goose", "grade", "grandfather", "grandmother", "grape", "grass", "hook", "horse", "jail", "jam", "kiss", "kitten", "light", "loaf", "lock", "lunch", "lunchroom", "meal", "mother", "notebook", "owl", "pail", "parent", "park", "plot", "rabbit", "rake", "robin", "sack", "sail", "scale", "sea", "sister", "soap", "song", "spark", "space", "spoon", "spot", "spy", "summer", "tiger", "toad", "town", "trail", "tramp", "tray", "trick", "trip", "uncle", "vase", "winter", "water", "week", "wheel", "wish", "wool", "yard", "zebra", "women", "apple", "arm", "banana", "bike", "bird", "book", "chin", "clam", "class", "clover", "club", "corn", "crayon", "crow", "crown", "crowd", "crib", "desk", "dime", "dirt", "dress", "fang", "field", "flag", "flower", "fog", "game", "heat", "hill", "home", "horn", "hose", "joke", "juice", "kite", "lake", "maid", "mask", "mice", "milk", "mint", "meal", "meat", "moon", "mother", "morning", "name", "nest", "nose", "pear", "pen", "pencil", "plant", "rain", "river", "road", "rock", "room", "rose", "seed", "shape", "shoe", "shop", "show", "sink", "snail", "snake", "snow", "soda", "sofa", "star", "step", "stew", "stove", "straw", "string", "summer", "swing", "table", "tank", "team", "tent", "test", "toes", "tree", "vest", "water", "wing", "winter", "woman", "women"];

var chooseWord = function chooseWord() {
  return words[Math.floor(Math.random() * words.length)];
};

exports.chooseWord = chooseWord;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmRzLmpzIl0sIm5hbWVzIjpbIndvcmRzIiwiY2hvb3NlV29yZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHLENBQ1osT0FEWSxFQUVaLFFBRlksRUFHWixNQUhZLEVBSVosTUFKWSxFQUtaLFNBTFksRUFNWixNQU5ZLEVBT1osTUFQWSxFQVFaLE1BUlksRUFTWixNQVRZLEVBVVosU0FWWSxFQVdaLE1BWFksRUFZWixPQVpZLEVBYVosT0FiWSxFQWNaLFNBZFksRUFlWixNQWZZLEVBZ0JaLFNBaEJZLEVBaUJaLFVBakJZLEVBa0JaLE9BbEJZLEVBbUJaLE1BbkJZLEVBb0JaLE1BcEJZLEVBcUJaLFFBckJZLEVBc0JaLFVBdEJZLEVBdUJaLE1BdkJZLEVBd0JaLE1BeEJZLEVBeUJaLEtBekJZLEVBMEJaLFFBMUJZLEVBMkJaLFFBM0JZLEVBNEJaLE9BNUJZLEVBNkJaLE9BN0JZLEVBOEJaLE1BOUJZLEVBK0JaLE1BL0JZLEVBZ0NaLE9BaENZLEVBaUNaLE9BakNZLEVBa0NaLGFBbENZLEVBbUNaLGFBbkNZLEVBb0NaLE9BcENZLEVBcUNaLE9BckNZLEVBc0NaLE1BdENZLEVBdUNaLE9BdkNZLEVBd0NaLE1BeENZLEVBeUNaLEtBekNZLEVBMENaLE1BMUNZLEVBMkNaLFFBM0NZLEVBNENaLE9BNUNZLEVBNkNaLE1BN0NZLEVBOENaLE1BOUNZLEVBK0NaLE9BL0NZLEVBZ0RaLFdBaERZLEVBaURaLE1BakRZLEVBa0RaLFFBbERZLEVBbURaLFVBbkRZLEVBb0RaLEtBcERZLEVBcURaLE1BckRZLEVBc0RaLFFBdERZLEVBdURaLE1BdkRZLEVBd0RaLE1BeERZLEVBeURaLFFBekRZLEVBMERaLE1BMURZLEVBMkRaLE9BM0RZLEVBNERaLE1BNURZLEVBNkRaLE1BN0RZLEVBOERaLE9BOURZLEVBK0RaLEtBL0RZLEVBZ0VaLFFBaEVZLEVBaUVaLE1BakVZLEVBa0VaLE1BbEVZLEVBbUVaLE9BbkVZLEVBb0VaLE9BcEVZLEVBcUVaLE9BckVZLEVBc0VaLE1BdEVZLEVBdUVaLEtBdkVZLEVBd0VaLFFBeEVZLEVBeUVaLE9BekVZLEVBMEVaLE1BMUVZLEVBMkVaLE1BM0VZLEVBNEVaLE9BNUVZLEVBNkVaLE9BN0VZLEVBOEVaLE1BOUVZLEVBK0VaLE9BL0VZLEVBZ0ZaLE1BaEZZLEVBaUZaLE9BakZZLEVBa0ZaLE1BbEZZLEVBbUZaLFFBbkZZLEVBb0ZaLE9BcEZZLEVBcUZaLE1BckZZLEVBc0ZaLE9BdEZZLEVBdUZaLE1BdkZZLEVBd0ZaLE1BeEZZLEVBeUZaLE1BekZZLEVBMEZaLE9BMUZZLEVBMkZaLE9BM0ZZLEVBNEZaLE9BNUZZLEVBNkZaLEtBN0ZZLEVBOEZaLFFBOUZZLEVBK0ZaLE1BL0ZZLEVBZ0daLE1BaEdZLEVBaUdaLE1BakdZLEVBa0daLE1BbEdZLEVBbUdaLE1BbkdZLEVBb0daLE9BcEdZLEVBcUdaLFFBckdZLEVBc0daLE1BdEdZLEVBdUdaLE1BdkdZLEVBd0daLFFBeEdZLEVBeUdaLE1BekdZLEVBMEdaLE9BMUdZLEVBMkdaLE9BM0dZLEVBNEdaLE1BNUdZLEVBNkdaLE1BN0dZLEVBOEdaLE1BOUdZLEVBK0daLE1BL0dZLEVBZ0haLE9BaEhZLEVBaUhaLE1BakhZLEVBa0haLE9BbEhZLEVBbUhaLE1BbkhZLEVBb0haLFFBcEhZLEVBcUhaLEtBckhZLEVBc0haLE1BdEhZLEVBdUhaLE1BdkhZLEVBd0haLE1BeEhZLEVBeUhaLE1BekhZLEVBMEhaLE1BMUhZLEVBMkhaLE1BM0hZLEVBNEhaLE1BNUhZLEVBNkhaLE9BN0hZLEVBOEhaLE1BOUhZLEVBK0haLE1BL0hZLEVBZ0laLE1BaElZLEVBaUlaLE1BaklZLEVBa0laLE1BbElZLEVBbUlaLE1BbklZLEVBb0laLE1BcElZLEVBcUlaLE1BcklZLEVBc0laLE1BdElZLEVBdUlaLE1BdklZLEVBd0laLFFBeElZLEVBeUlaLFNBeklZLEVBMElaLE1BMUlZLEVBMklaLE1BM0lZLEVBNElaLE1BNUlZLEVBNklaLE1BN0lZLEVBOElaLEtBOUlZLEVBK0laLFFBL0lZLEVBZ0paLE9BaEpZLEVBaUpaLE1BakpZLEVBa0paLE9BbEpZLEVBbUpaLE1BbkpZLEVBb0paLE1BcEpZLEVBcUpaLE1BckpZLEVBc0paLE1BdEpZLEVBdUpaLE1BdkpZLEVBd0paLE9BeEpZLEVBeUpaLE1BekpZLEVBMEpaLE1BMUpZLEVBMkpaLE1BM0pZLEVBNEpaLE1BNUpZLEVBNkpaLE9BN0pZLEVBOEpaLE9BOUpZLEVBK0paLE1BL0pZLEVBZ0taLE1BaEtZLEVBaUtaLE1BaktZLEVBa0taLE1BbEtZLEVBbUtaLE1BbktZLEVBb0taLE1BcEtZLEVBcUtaLE9BcktZLEVBc0taLE9BdEtZLEVBdUtaLFFBdktZLEVBd0taLFFBeEtZLEVBeUtaLE9BektZLEVBMEtaLE9BMUtZLEVBMktaLE1BM0tZLEVBNEtaLE1BNUtZLEVBNktaLE1BN0tZLEVBOEtaLE1BOUtZLEVBK0taLE1BL0tZLEVBZ0xaLE1BaExZLEVBaUxaLE1BakxZLEVBa0xaLE9BbExZLEVBbUxaLE1BbkxZLEVBb0xaLFFBcExZLEVBcUxaLE9BckxZLEVBc0xaLE9BdExZLENBQWQ7O0FBeUxPLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FBTUQsS0FBSyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixLQUFLLENBQUNLLE1BQWpDLENBQUQsQ0FBWDtBQUFBLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd29yZHMgPSBbXG4gIFwiYWxhcm1cIixcbiAgXCJhbmltYWxcIixcbiAgXCJhdW50XCIsXG4gIFwiYmFpdFwiLFxuICBcImJhbGxvb25cIixcbiAgXCJiYXRoXCIsXG4gIFwiYmVhZFwiLFxuICBcImJlYW1cIixcbiAgXCJiZWFuXCIsXG4gIFwiYmVkcm9vbVwiLFxuICBcImJvb3RcIixcbiAgXCJicmVhZFwiLFxuICBcImJyaWNrXCIsXG4gIFwiYnJvdGhlclwiLFxuICBcImNhbXBcIixcbiAgXCJjaGlja2VuXCIsXG4gIFwiY2hpbGRyZW5cIixcbiAgXCJjcm9va1wiLFxuICBcImRlZXJcIixcbiAgXCJkb2NrXCIsXG4gIFwiZG9jdG9yXCIsXG4gIFwiZG93bnRvd25cIixcbiAgXCJkcnVtXCIsXG4gIFwiZHVzdFwiLFxuICBcImV5ZVwiLFxuICBcImZhbWlseVwiLFxuICBcImZhdGhlclwiLFxuICBcImZpZ2h0XCIsXG4gIFwiZmxlc2hcIixcbiAgXCJmb29kXCIsXG4gIFwiZnJvZ1wiLFxuICBcImdvb3NlXCIsXG4gIFwiZ3JhZGVcIixcbiAgXCJncmFuZGZhdGhlclwiLFxuICBcImdyYW5kbW90aGVyXCIsXG4gIFwiZ3JhcGVcIixcbiAgXCJncmFzc1wiLFxuICBcImhvb2tcIixcbiAgXCJob3JzZVwiLFxuICBcImphaWxcIixcbiAgXCJqYW1cIixcbiAgXCJraXNzXCIsXG4gIFwia2l0dGVuXCIsXG4gIFwibGlnaHRcIixcbiAgXCJsb2FmXCIsXG4gIFwibG9ja1wiLFxuICBcImx1bmNoXCIsXG4gIFwibHVuY2hyb29tXCIsXG4gIFwibWVhbFwiLFxuICBcIm1vdGhlclwiLFxuICBcIm5vdGVib29rXCIsXG4gIFwib3dsXCIsXG4gIFwicGFpbFwiLFxuICBcInBhcmVudFwiLFxuICBcInBhcmtcIixcbiAgXCJwbG90XCIsXG4gIFwicmFiYml0XCIsXG4gIFwicmFrZVwiLFxuICBcInJvYmluXCIsXG4gIFwic2Fja1wiLFxuICBcInNhaWxcIixcbiAgXCJzY2FsZVwiLFxuICBcInNlYVwiLFxuICBcInNpc3RlclwiLFxuICBcInNvYXBcIixcbiAgXCJzb25nXCIsXG4gIFwic3BhcmtcIixcbiAgXCJzcGFjZVwiLFxuICBcInNwb29uXCIsXG4gIFwic3BvdFwiLFxuICBcInNweVwiLFxuICBcInN1bW1lclwiLFxuICBcInRpZ2VyXCIsXG4gIFwidG9hZFwiLFxuICBcInRvd25cIixcbiAgXCJ0cmFpbFwiLFxuICBcInRyYW1wXCIsXG4gIFwidHJheVwiLFxuICBcInRyaWNrXCIsXG4gIFwidHJpcFwiLFxuICBcInVuY2xlXCIsXG4gIFwidmFzZVwiLFxuICBcIndpbnRlclwiLFxuICBcIndhdGVyXCIsXG4gIFwid2Vla1wiLFxuICBcIndoZWVsXCIsXG4gIFwid2lzaFwiLFxuICBcIndvb2xcIixcbiAgXCJ5YXJkXCIsXG4gIFwiemVicmFcIixcbiAgXCJ3b21lblwiLFxuICBcImFwcGxlXCIsXG4gIFwiYXJtXCIsXG4gIFwiYmFuYW5hXCIsXG4gIFwiYmlrZVwiLFxuICBcImJpcmRcIixcbiAgXCJib29rXCIsXG4gIFwiY2hpblwiLFxuICBcImNsYW1cIixcbiAgXCJjbGFzc1wiLFxuICBcImNsb3ZlclwiLFxuICBcImNsdWJcIixcbiAgXCJjb3JuXCIsXG4gIFwiY3JheW9uXCIsXG4gIFwiY3Jvd1wiLFxuICBcImNyb3duXCIsXG4gIFwiY3Jvd2RcIixcbiAgXCJjcmliXCIsXG4gIFwiZGVza1wiLFxuICBcImRpbWVcIixcbiAgXCJkaXJ0XCIsXG4gIFwiZHJlc3NcIixcbiAgXCJmYW5nXCIsXG4gIFwiZmllbGRcIixcbiAgXCJmbGFnXCIsXG4gIFwiZmxvd2VyXCIsXG4gIFwiZm9nXCIsXG4gIFwiZ2FtZVwiLFxuICBcImhlYXRcIixcbiAgXCJoaWxsXCIsXG4gIFwiaG9tZVwiLFxuICBcImhvcm5cIixcbiAgXCJob3NlXCIsXG4gIFwiam9rZVwiLFxuICBcImp1aWNlXCIsXG4gIFwia2l0ZVwiLFxuICBcImxha2VcIixcbiAgXCJtYWlkXCIsXG4gIFwibWFza1wiLFxuICBcIm1pY2VcIixcbiAgXCJtaWxrXCIsXG4gIFwibWludFwiLFxuICBcIm1lYWxcIixcbiAgXCJtZWF0XCIsXG4gIFwibW9vblwiLFxuICBcIm1vdGhlclwiLFxuICBcIm1vcm5pbmdcIixcbiAgXCJuYW1lXCIsXG4gIFwibmVzdFwiLFxuICBcIm5vc2VcIixcbiAgXCJwZWFyXCIsXG4gIFwicGVuXCIsXG4gIFwicGVuY2lsXCIsXG4gIFwicGxhbnRcIixcbiAgXCJyYWluXCIsXG4gIFwicml2ZXJcIixcbiAgXCJyb2FkXCIsXG4gIFwicm9ja1wiLFxuICBcInJvb21cIixcbiAgXCJyb3NlXCIsXG4gIFwic2VlZFwiLFxuICBcInNoYXBlXCIsXG4gIFwic2hvZVwiLFxuICBcInNob3BcIixcbiAgXCJzaG93XCIsXG4gIFwic2lua1wiLFxuICBcInNuYWlsXCIsXG4gIFwic25ha2VcIixcbiAgXCJzbm93XCIsXG4gIFwic29kYVwiLFxuICBcInNvZmFcIixcbiAgXCJzdGFyXCIsXG4gIFwic3RlcFwiLFxuICBcInN0ZXdcIixcbiAgXCJzdG92ZVwiLFxuICBcInN0cmF3XCIsXG4gIFwic3RyaW5nXCIsXG4gIFwic3VtbWVyXCIsXG4gIFwic3dpbmdcIixcbiAgXCJ0YWJsZVwiLFxuICBcInRhbmtcIixcbiAgXCJ0ZWFtXCIsXG4gIFwidGVudFwiLFxuICBcInRlc3RcIixcbiAgXCJ0b2VzXCIsXG4gIFwidHJlZVwiLFxuICBcInZlc3RcIixcbiAgXCJ3YXRlclwiLFxuICBcIndpbmdcIixcbiAgXCJ3aW50ZXJcIixcbiAgXCJ3b21hblwiLFxuICBcIndvbWVuXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgY2hvb3NlV29yZCA9ICgpID0+IHdvcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdvcmRzLmxlbmd0aCldO1xuIl19
},{}]},{},[2])