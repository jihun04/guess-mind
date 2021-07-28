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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfODRlZDAyYmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG5pbXBvcnQgXCIuL3BsYXllcnNcIjtcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cm9scyIsImNvbG9ycyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtb2RlIiwiY3R4IiwiZ2V0Q29udGV4dCIsIklOSVRJQUxfQ09MT1IiLCJzYXZlTGluayIsIndpZHRoIiwiaGVpZ2h0IiwibGluZVdpZHRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsInBhaW50aW5nIiwiZmlsbGluZyIsInN0YXJ0UGFpbnRpbmciLCJlIiwiYmVnaW5QYXRoIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsIngiLCJvZmZzZXRYIiwieSIsIm9mZnNldFkiLCJzdG9wUGFpbnRpbmciLCJzdHJva2VQYXRoIiwibGluZVRvIiwic3Ryb2tlIiwib25Nb3VzZU1vdmUiLCJjb2xvciIsImhhbmRsZUNvbG9yQ2xpY2siLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlTW9kZUNsaWNrIiwiaW5uZXJUZXh0IiwiZmlsbCIsImN1cnJlbnRDb2xvciIsImhhbmRsZUNhbnZhc0NsaWNrIiwiaGFuZGxlQmVnYW5QYXRoIiwibW92ZVRvIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJoYW5kbGVGaWxsZWQiLCJkaXNhYmxlQ2FudmFzIiwiZW5hYmxlQ2FudmFzIiwiaGlkZUNhbnZhc0NvbnRyb2xzIiwiZGlzcGxheSIsInNob3dDYW52YXNDb250cm9scyIsInNhdmVBbmNob3IiLCJ3b3JkIiwiY3JlYXRlRWxlbWVudCIsImRvd25sb2FkIiwiaHJlZiIsInRvRGF0YVVSTCIsInJlc2V0Q2FudmFzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7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QUEsUUFBUSxDQUFDb0QsSUFBVCxHQUFnQjlELE1BQU0sQ0FBQytELFNBQVAsRUFBaEI7QUFDRCxDQUpNOzs7O0FBTUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUFNbEIsSUFBSSxDQUFDLE1BQUQsQ0FBVjtBQUFBLENBQXBCOzs7O0FBRVAsSUFBSTlDLE1BQUosRUFBWTtBQUNWQSxFQUFBQSxNQUFNLENBQUN5QyxnQkFBUCxDQUF3QixhQUF4QixFQUF1QyxVQUFDd0IsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsY0FBTixFQUFYO0FBQUEsR0FBdkM7QUFDQVgsRUFBQUEsa0JBQWtCO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNvY2tldENvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL3NyYy9zb2NrZXRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDb250cm9sc1wiKTtcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqc0NvbG9yXCIpO1xuY29uc3QgbW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNb2RlXCIpO1xuXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5sZXQgSU5JVElBTF9DT0xPUiA9IFwiIzJjMmMyY1wiO1xubGV0IHNhdmVMaW5rID0gbnVsbDtcblxuY2FudmFzLndpZHRoID0gNDUwO1xuY2FudmFzLmhlaWdodCA9IDQ1MDtcblxuY3R4LmxpbmVXaWR0aCA9IDIuNTtcbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5jdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG5jdHguZmlsbFN0eWxlID0gSU5JVElBTF9DT0xPUjtcblxubGV0IHBhaW50aW5nID0gZmFsc2U7XG5sZXQgZmlsbGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzdGFydFBhaW50aW5nKGUpIHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZIH0pO1xuICBwYWludGluZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHN0b3BQYWludGluZygpIHtcbiAgcGFpbnRpbmcgPSBmYWxzZTtcbn1cblxuY29uc3Qgc3Ryb2tlUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5saW5lVG8oeCwgeSk7XG4gIGN0eC5zdHJva2UoKTtcbn07XG5cbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcbiAgaWYgKCFmaWxsaW5nKSB7XG4gICAgY29uc3QgeCA9IGUub2Zmc2V0WDtcbiAgICBjb25zdCB5ID0gZS5vZmZzZXRZO1xuICAgIGlmIChwYWludGluZykge1xuICAgICAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zdHJva2VQYXRoLCB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGNvbG9yOiBjdHguc3Ryb2tlU3R5bGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ29sb3JDbGljaygpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGhpcztcbiAgY29uc3QgY29sb3IgPSB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImNvbnRyb2xzX19jb2xvci0tY2xpY2tcIik7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJjb250cm9sc19fY29sb3ItLWNsaWNrXCIpO1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb2RlQ2xpY2soKSB7XG4gIGlmIChmaWxsaW5nKSB7XG4gICAgZmlsbGluZyA9IGZhbHNlO1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJGaWxsXCI7XG4gIH0gZWxzZSB7XG4gICAgZmlsbGluZyA9IHRydWU7XG4gICAgbW9kZS5pbm5lclRleHQgPSBcIlBhaW50XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbChjb2xvciA9IG51bGwpIHtcbiAgY29uc3QgY3VycmVudENvbG9yID0gY3R4LmZpbGxTdHlsZTtcbiAgaWYgKGNvbG9yICE9PSBudWxsKSBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gY3VycmVudENvbG9yO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDYW52YXNDbGljaygpIHtcbiAgaWYgKGZpbGxpbmcpIHtcbiAgICBmaWxsKCk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmZpbGwsIHsgY29sb3I6IGN0eC5maWxsU3R5bGUgfSk7XG4gIH1cbn1cblxuZm9yIChjb25zdCBjb2xvciBvZiBjb2xvcnMpIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDb2xvckNsaWNrKTtcblxuaWYgKG1vZGUpIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHgsIHkpO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHksIGNvbG9yID0gbnVsbCB9KSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDb2xvciA9IGN0eC5zdHJva2VTdHlsZTtcbiAgaWYgKGNvbG9yICE9PSBudWxsKSBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudENvbG9yO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVGaWxsZWQgPSAoeyBjb2xvciB9KSA9PiBmaWxsKGNvbG9yKTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVDYW52YXMgPSAoKSA9PiB7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlQ2FudmFzID0gKCkgPT4ge1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2FudmFzQ2xpY2spO1xufTtcblxuZXhwb3J0IGNvbnN0IGhpZGVDYW52YXNDb250cm9scyA9ICgpID0+IChjb250cm9scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NhbnZhc0NvbnRyb2xzID0gKCkgPT4gKGNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIik7XG5cbmV4cG9ydCBjb25zdCBzYXZlQW5jaG9yID0gKHdvcmQpID0+IHtcbiAgc2F2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgc2F2ZUxpbmsuZG93bmxvYWQgPSBgJHt3b3JkfS5wbmdgO1xuICBzYXZlTGluay5ocmVmID0gY2FudmFzLnRvRGF0YVVSTCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0Q2FudmFzID0gKCkgPT4gZmlsbChcIiNmZmZcIik7XG5cbmlmIChjYW52YXMpIHtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuICBoaWRlQ2FudmFzQ29udHJvbHMoKTtcbn1cbiJdfQ==
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
  (0, _chat.enableChat)();
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
};

exports.handleGameEnded = handleGameEnded;

var handleGameStarting = function handleGameStarting() {
  return setNotifs("Game will start soon");
};

exports.handleGameStarting = handleGameStarting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibm90aWZzIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJwbGF5ZXIiLCJwbGF5ZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsIm5pY2tuYW1lIiwicG9pbnRzIiwiYXBwZW5kQ2hpbGQiLCJzZXROb3RpZnMiLCJ0ZXh0IiwiaGFuZGxlUGxheWVyVXBkYXRlIiwic29ja2V0cyIsImhhbmRsZUdhbWVTdGFydGVkIiwiaGFuZGxlTGVhZGVyTm90aWYiLCJ3b3JkIiwiaGFuZGxlR2FtZUVuZGVkIiwibGVhZGVyTmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTklDS05BTUUiLCJoYW5kbGVHYW1lU3RhcnRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFTQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjs7QUFFQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFDOUJMLEVBQUFBLEtBQUssQ0FBQ00sU0FBTixHQUFrQixFQUFsQjs7QUFEOEIsNkNBRVRELE9BRlM7QUFBQTs7QUFBQTtBQUU5Qix3REFBOEI7QUFBQSxVQUFuQkUsTUFBbUI7QUFDNUIsVUFBTUMsYUFBYSxHQUFHUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBdEI7QUFDQUQsTUFBQUEsYUFBYSxDQUFDRSxTQUFkLGFBQTZCSCxNQUFNLENBQUNJLFFBQXBDLGVBQWlESixNQUFNLENBQUNLLE1BQXhEO0FBQ0FaLE1BQUFBLEtBQUssQ0FBQ2EsV0FBTixDQUFrQkwsYUFBbEI7QUFDRDtBQU42QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTy9CLENBUEQ7O0FBU0EsSUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0FBQzFCWixFQUFBQSxNQUFNLENBQUNPLFNBQVAsR0FBbUJLLElBQW5CO0FBQ0QsQ0FGRDs7QUFJTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUJiLFVBQVUsQ0FBQ2EsT0FBRCxDQUEzQjtBQUFBLENBQTNCOzs7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBSixFQUFBQSxTQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0QsQ0FMTTs7OztBQU1BLElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsUUFBYztBQUFBLE1BQVhDLElBQVcsU0FBWEEsSUFBVztBQUM3QztBQUNBO0FBQ0E7QUFDQU4sRUFBQUEsU0FBUyxzQ0FBK0JNLElBQS9CLEVBQVQ7QUFDRCxDQUxNOzs7O0FBTUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixRQUE4QjtBQUFBLE1BQTNCRCxJQUEyQixTQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkUsY0FBcUIsU0FBckJBLGNBQXFCO0FBQzNEUixFQUFBQSxTQUFTLENBQUMsYUFBRCxDQUFUO0FBQ0EsTUFBSVMsWUFBWSxDQUFDQyxPQUFiLENBQXFCQyxlQUFyQixNQUFtQ0gsY0FBdkMsRUFBdUQsdUJBQVdGLElBQVg7QUFDdkQ7QUFDQTtBQUNBO0FBQ0QsQ0FOTTs7OztBQU9BLElBQU1NLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFNWixTQUFTLENBQUMsc0JBQUQsQ0FBZjtBQUFBLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlzYWJsZUNoYXQsIGVuYWJsZUNoYXQgfSBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQgeyBOSUNLTkFNRSB9IGZyb20gXCIuL2xvZ2luXCI7XG5pbXBvcnQge1xuICBkaXNhYmxlQ2FudmFzLFxuICBlbmFibGVDYW52YXMsXG4gIGhpZGVDYW52YXNDb250cm9scyxcbiAgcmVzZXRDYW52YXMsXG4gIHNhdmVBbmNob3IsXG4gIHNob3dDYW52YXNDb250cm9scyxcbn0gZnJvbSBcIi4vcGFpbnRcIjtcblxuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUEJvYXJkXCIpO1xuY29uc3Qgbm90aWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmc1wiKTtcblxuY29uc3QgYWRkUGxheWVycyA9IChwbGF5ZXJzKSA9PiB7XG4gIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAoY29uc3QgcGxheWVyIG9mIHBsYXllcnMpIHtcbiAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcGxheWVyRWxlbWVudC5pbm5lclRleHQgPSBgJHtwbGF5ZXIubmlja25hbWV9OiAke3BsYXllci5wb2ludHN9YDtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJFbGVtZW50KTtcbiAgfVxufTtcblxuY29uc3Qgc2V0Tm90aWZzID0gKHRleHQpID0+IHtcbiAgbm90aWZzLmlubmVyVGV4dCA9IHRleHQ7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlUGxheWVyVXBkYXRlID0gKHsgc29ja2V0cyB9KSA9PiBhZGRQbGF5ZXJzKHNvY2tldHMpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVTdGFydGVkID0gKCkgPT4ge1xuICBkaXNhYmxlQ2FudmFzKCk7XG4gIGhpZGVDYW52YXNDb250cm9scygpO1xuICBlbmFibGVDaGF0KCk7XG4gIHNldE5vdGlmcyhcIlwiKTtcbn07XG5leHBvcnQgY29uc3QgaGFuZGxlTGVhZGVyTm90aWYgPSAoeyB3b3JkIH0pID0+IHtcbiAgZW5hYmxlQ2FudmFzKCk7XG4gIHNob3dDYW52YXNDb250cm9scygpO1xuICBkaXNhYmxlQ2hhdCgpO1xuICBzZXROb3RpZnMoYFlvdSBhcmUgdGhlIGxlYWRlciwgcGFpbnQ6ICR7d29yZH1gKTtcbn07XG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZUVuZGVkID0gKHsgd29yZCwgbGVhZGVyTmlja25hbWUgfSkgPT4ge1xuICBzZXROb3RpZnMoXCJHYW1lIGVuZGVkLlwiKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKSA9PT0gbGVhZGVyTmlja25hbWUpIHNhdmVBbmNob3Iod29yZCk7XG4gIGRpc2FibGVDYW52YXMoKTtcbiAgaGlkZUNhbnZhc0NvbnRyb2xzKCk7XG4gIHJlc2V0Q2FudmFzKCk7XG59O1xuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVTdGFydGluZyA9ICgpID0+IHNldE5vdGlmcyhcIkdhbWUgd2lsbCBzdGFydCBzb29uXCIpO1xuIl19
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
      }, 10000);
    }
  };

  var endGame = function endGame() {
    inProgress = false;
    superBroadcast(_events["default"].gameEnded, {
      word: word,
      leaderNickname: "".concat(leader ? leader.nickname : null)
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic29ja2V0cyIsIm5pY2tuYW1lcyIsImluUHJvZ3Jlc3MiLCJ3b3JkIiwibGVhZGVyIiwiY2hvb3NlTGVhZGVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic29ja2V0Q29udHJvbGxlciIsInNvY2tldCIsImlvIiwiYnJvYWRjYXN0IiwiZXZlbnQiLCJkYXRhIiwiZW1pdCIsInN1cGVyQnJvYWRjYXN0Iiwic2VuZFBsYXllclVwZGF0ZSIsImV2ZW50cyIsInBsYXllclVwZGF0ZSIsInN0YXJ0R2FtZSIsImdhbWVTdGFydGluZyIsInNldFRpbWVvdXQiLCJnYW1lU3RhcnRlZCIsInRvIiwiaWQiLCJsZWFkZXJOb3RpZiIsImVuZEdhbWUiLCJnYW1lRW5kZWQiLCJsZWFkZXJOaWNrbmFtZSIsIm5pY2tuYW1lIiwib24iLCJzZXROaWNrbmFtZSIsImluY2x1ZGVzIiwicHVzaCIsInBvaW50cyIsImxvZ2dlZEluIiwibmV3VXNlciIsInVuYXV0aGVudGljYXRlZCIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0ZWQiLCJmaWx0ZXIiLCJhU29ja2V0Iiwic2VuZE1zZyIsIm1lc3NhZ2UiLCJuZXdNc2ciLCJiZWdpblBhdGgiLCJ4IiwieSIsImJlZ2FuUGF0aCIsInN0cm9rZVBhdGgiLCJjb2xvciIsInN0cm9rZWRQYXRoIiwiZmlsbCIsImZpbGxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsSUFBSUEsT0FBTyxHQUFHLEVBQWQ7QUFDQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxJQUFJQyxVQUFVLEdBQUcsS0FBakI7QUFDQSxJQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFiOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBTUwsT0FBTyxDQUFDTSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFB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QUNxQixFQUFQLENBQVViLG1CQUFPNEIsU0FBakIsRUFBNEI7QUFBQSxRQUFHQyxDQUFILFNBQUdBLENBQUg7QUFBQSxRQUFNQyxDQUFOLFNBQU1BLENBQU47QUFBQSxXQUMxQnBDLFNBQVMsQ0FBQ00sbUJBQU8rQixTQUFSLEVBQW1CO0FBQUVGLE1BQUFBLENBQUMsRUFBREEsQ0FBRjtBQUFLQyxNQUFBQSxDQUFDLEVBQURBO0FBQUwsS0FBbkIsQ0FEaUI7QUFBQSxHQUE1QjtBQUlBdEMsRUFBQUEsTUFBTSxDQUFDcUIsRUFBUCxDQUFVYixtQkFBT2dDLFVBQWpCLEVBQTZCO0FBQUEsUUFBR0gsQ0FBSCxTQUFHQSxDQUFIO0FBQUEsUUFBTUMsQ0FBTixTQUFNQSxDQUFOO0FBQUEsUUFBU0csS0FBVCxTQUFTQSxLQUFUO0FBQUEsV0FDM0J2QyxTQUFTLENBQUNNLG1CQUFPa0MsV0FBUixFQUFxQjtBQUFFTCxNQUFBQSxDQUFDLEVBQURBLENBQUY7QUFBS0MsTUFBQUEsQ0FBQyxFQUFEQSxDQUFMO0FBQVFHLE1BQUFBLEtBQUssRUFBTEE7QUFBUixLQUFyQixDQURrQjtBQUFBLEdBQTdCO0FBSUF6QyxFQUFBQSxNQUFNLENBQUNxQixFQUFQLENBQVViLG1CQUFPbUMsSUFBakIsRUFBdUIsaUJBQWU7QUFBQSxRQUFaRixLQUFZLFNBQVpBLEtBQVk7QUFDcEN2QyxJQUFBQSxTQUFTLENBQUNNLG1CQUFPb0MsTUFBUixFQUFnQjtBQUFFSCxNQUFBQSxLQUFLLEVBQUxBO0FBQUYsS0FBaEIsQ0FBVDtBQUNELEdBRkQ7QUFHRCxDQXBFRDs7ZUFzRWUxQyxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgeyBjaG9vc2VXb3JkIH0gZnJvbSBcIi4vd29yZHNcIjtcblxubGV0IHNvY2tldHMgPSBbXTtcbmxldCBuaWNrbmFtZXMgPSBbXTtcbmxldCBpblByb2dyZXNzID0gZmFsc2U7XG5sZXQgd29yZCA9IG51bGw7XG5sZXQgbGVhZGVyID0gbnVsbDtcblxuY29uc3QgY2hvb3NlTGVhZGVyID0gKCkgPT4gc29ja2V0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzb2NrZXRzLmxlbmd0aCldO1xuXG5jb25zdCBzb2NrZXRDb250cm9sbGVyID0gKHNvY2tldCwgaW8pID0+IHtcbiAgY29uc3QgYnJvYWRjYXN0ID0gKGV2ZW50LCBkYXRhKSA9PiBzb2NrZXQuYnJvYWRjYXN0LmVtaXQoZXZlbnQsIGRhdGEpO1xuICBjb25zdCBzdXBlckJyb2FkY2FzdCA9IChldmVudCwgZGF0YSkgPT4gaW8uZW1pdChldmVudCwgZGF0YSk7XG4gIGNvbnN0IHNlbmRQbGF5ZXJVcGRhdGUgPSAoKSA9PlxuICAgIHN1cGVyQnJvYWRjYXN0KGV2ZW50cy5wbGF5ZXJVcGRhdGUsIHsgc29ja2V0cyB9KTtcbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGlmIChpblByb2dyZXNzID09IGZhbHNlKSB7XG4gICAgICBpblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgIGxlYWRlciA9IGNob29zZUxlYWRlcigpO1xuICAgICAgd29yZCA9IGNob29zZVdvcmQoKTtcbiAgICAgIHN1cGVyQnJvYWRjYXN0KGV2ZW50cy5nYW1lU3RhcnRpbmcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHN1cGVyQnJvYWRjYXN0KGV2ZW50cy5nYW1lU3RhcnRlZCk7XG4gICAgICAgIGlvLnRvKGxlYWRlci5pZCkuZW1pdChldmVudHMubGVhZGVyTm90aWYsIHsgd29yZCB9KTtcbiAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XG4gICAgaW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgIHN1cGVyQnJvYWRjYXN0KGV2ZW50cy5nYW1lRW5kZWQsIHtcbiAgICAgIHdvcmQsXG4gICAgICBsZWFkZXJOaWNrbmFtZTogYCR7bGVhZGVyID8gbGVhZGVyLm5pY2tuYW1lIDogbnVsbH1gLFxuICAgIH0pO1xuICB9O1xuXG4gIHNvY2tldC5vbihldmVudHMuc2V0Tmlja25hbWUsICh7IG5pY2tuYW1lIH0pID0+IHtcbiAgICBpZiAoIW5pY2tuYW1lcy5pbmNsdWRlcyhuaWNrbmFtZSkpIHtcbiAgICAgIHNvY2tldC5uaWNrbmFtZSA9IG5pY2tuYW1lO1xuICAgICAgbmlja25hbWVzLnB1c2gobmlja25hbWUpO1xuICAgICAgc29ja2V0cy5wdXNoKHsgaWQ6IHNvY2tldC5pZCwgcG9pbnRzOiAwLCBuaWNrbmFtZTogbmlja25hbWUgfSk7XG4gICAgICBzb2NrZXQuZW1pdChldmVudHMubG9nZ2VkSW4pO1xuICAgICAgYnJvYWRjYXN0KGV2ZW50cy5uZXdVc2VyLCB7IG5pY2tuYW1lIH0pO1xuICAgICAgc2VuZFBsYXllclVwZGF0ZSgpO1xuICAgICAgaWYgKHNvY2tldHMubGVuZ3RoID4gMSkge1xuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc29ja2V0LmVtaXQoZXZlbnRzLnVuYXV0aGVudGljYXRlZCk7XG4gICAgfVxuICB9KTtcblxuICBzb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3QsICgpID0+IHtcbiAgICBicm9hZGNhc3QoZXZlbnRzLmRpc2Nvbm5lY3RlZCwgeyBuaWNrbmFtZTogc29ja2V0Lm5pY2tuYW1lIH0pO1xuICAgIHNvY2tldHMgPSBzb2NrZXRzLmZpbHRlcigoYVNvY2tldCkgPT4gYVNvY2tldC5pZCAhPSBzb2NrZXQuaWQpO1xuICAgIG5pY2tuYW1lcyA9IG5pY2tuYW1lcy5maWx0ZXIoKG5pY2tuYW1lKSA9PiBuaWNrbmFtZSAhPSBzb2NrZXQubmlja25hbWUpO1xuICAgIGlmIChzb2NrZXRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICBlbmRHYW1lKCk7XG4gICAgfSBlbHNlIGlmIChsZWFkZXIpIHtcbiAgICAgIGlmIChzb2NrZXQuaWQgPT0gbGVhZGVyLmlkKSBlbmRHYW1lKCk7XG4gICAgfVxuICAgIHNlbmRQbGF5ZXJVcGRhdGUoKTtcbiAgfSk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5zZW5kTXNnLCAoeyBtZXNzYWdlIH0pID0+IHtcbiAgICBicm9hZGNhc3QoZXZlbnRzLm5ld01zZywgeyBtZXNzYWdlLCBuaWNrbmFtZTogc29ja2V0Lm5pY2tuYW1lIH0pO1xuICB9KTtcblxuICBzb2NrZXQub24oZXZlbnRzLmJlZ2luUGF0aCwgKHsgeCwgeSB9KSA9PlxuICAgIGJyb2FkY2FzdChldmVudHMuYmVnYW5QYXRoLCB7IHgsIHkgfSlcbiAgKTtcblxuICBzb2NrZXQub24oZXZlbnRzLnN0cm9rZVBhdGgsICh7IHgsIHksIGNvbG9yIH0pID0+XG4gICAgYnJvYWRjYXN0KGV2ZW50cy5zdHJva2VkUGF0aCwgeyB4LCB5LCBjb2xvciB9KVxuICApO1xuXG4gIHNvY2tldC5vbihldmVudHMuZmlsbCwgKHsgY29sb3IgfSkgPT4ge1xuICAgIGJyb2FkY2FzdChldmVudHMuZmlsbGVkLCB7IGNvbG9yIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNvY2tldENvbnRyb2xsZXI7XG4iXX0=
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