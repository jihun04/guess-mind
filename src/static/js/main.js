(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMsg = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n      <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
  messages.scroll(0, messages.scrollHeight);
};

var handleSendMsg = function handleSendMsg(e) {
  e.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwic2Nyb2xsIiwic2Nyb2xsSGVpZ2h0IiwiaGFuZGxlU2VuZE1zZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsIm1lc3NhZ2UiLCJoYW5kbGVOZXdNc2ciLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7QUFDQSxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFoQjs7QUFFQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLFFBQVAsRUFBb0I7QUFDcEMsTUFBTUMsRUFBRSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBRCxFQUFBQSxFQUFFLENBQUNFLFNBQUgsMENBQzBCSCxRQUFRLEdBQUcsS0FBSCxHQUFXLE1BRDdDLGdCQUN3REEsUUFBUSxHQUFHQSxRQUFILEdBQWMsS0FEOUUsc0JBQytGRCxJQUQvRjtBQUdBTCxFQUFBQSxRQUFRLENBQUNVLFdBQVQsQ0FBcUJILEVBQXJCO0FBQ0FQLEVBQUFBLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQixDQUFoQixFQUFtQlgsUUFBUSxDQUFDWSxZQUE1QjtBQUNELENBUEQ7O0FBU0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDM0JBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR2IsT0FBTyxDQUFDYyxhQUFSLENBQXNCLE9BQXRCLENBQWQ7QUFDQSxNQUFRQyxLQUFSLEdBQWtCRixLQUFsQixDQUFRRSxLQUFSO0FBQ0EsNEJBQVlDLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjbEIsT0FBL0IsRUFBd0M7QUFBRW1CLElBQUFBLE9BQU8sRUFBRUo7QUFBWCxHQUF4QztBQUNBRixFQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBYyxFQUFkO0FBQ0FkLEVBQUFBLFNBQVMsQ0FBQ2MsS0FBRCxDQUFUO0FBQ0QsQ0FQRDs7QUFTTyxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUdELE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVloQixRQUFaLFFBQVlBLFFBQVo7QUFBQSxTQUMxQkYsU0FBUyxDQUFDa0IsT0FBRCxFQUFVaEIsUUFBVixDQURpQjtBQUFBLENBQXJCOzs7O0FBR1AsSUFBSUgsT0FBSixFQUFhO0FBQ1hBLEVBQUFBLE9BQU8sQ0FBQ3FCLGdCQUFSLENBQXlCLFFBQXpCLEVBQWtDWCxhQUFsQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNZXNzYWdlc1wiKTtcbmNvbnN0IHNlbmRNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzU2VuZE1zZ1wiKTtcblxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5pbm5lckhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImF1dGhvciAke25pY2tuYW1lID8gXCJvdXRcIiA6IFwic2VsZlwifVwiPiR7bmlja25hbWUgPyBuaWNrbmFtZSA6IFwiWW91XCJ9Ojwvc3Bhbj4gJHt0ZXh0fVxuICAgIGA7XG4gIG1lc3NhZ2VzLmFwcGVuZENoaWxkKGxpKTtcbiAgbWVzc2FnZXMuc2Nyb2xsKDAsIG1lc3NhZ2VzLnNjcm9sbEhlaWdodCk7XG59O1xuXG5jb25zdCBoYW5kbGVTZW5kTXNnID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnNlbmRNc2csIHsgbWVzc2FnZTogdmFsdWUgfSlcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICBhcHBlbmRNc2codmFsdWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01zZyA9ICh7IG1lc3NhZ2UsIG5pY2tuYW1lIH0pID0+IFxuICBhcHBlbmRNc2cobWVzc2FnZSwgbmlja25hbWUpO1xuXG5pZiAoc2VuZE1zZykge1xuICBzZW5kTXNnLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIixoYW5kbGVTZW5kTXNnKTtcbn0iXX0=
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./paint");

require("./players");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMjljYjdjMjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG5pbXBvcnQgXCIuL3BsYXllcnNcIjtcbiJdfQ==
},{"./chat":1,"./login":3,"./paint":5,"./players":6,"./sockets":7}],3:[function(require,module,exports){
"use strict";

var _notifications = require("./notifications");

var _sockets = require("./sockets");

var body = document.body;
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwiTklDS05BTUUiLCJMT0dHRURfT1VUIiwiTE9HR0VEX0lOIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9nSW4iLCJzb2NrZXQiLCJpbyIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJzZXROaWNrbmFtZSIsIm9uIiwibG9nZ2VkSW4iLCJzZXRJdGVtIiwiY2xhc3NOYW1lIiwidW5hdXRoZW50aWNhdGVkIiwicmVtb3ZlSXRlbSIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNELElBQXRCO0FBQ0EsSUFBTUUsU0FBUyxHQUFHRCxRQUFRLENBQUNFLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFBQSxJQUNFQyxTQUFTLEdBQUcsVUFEZDtBQUdBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7QUFDMUIsTUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUVULElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUF2QztBQUNBSSxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUgsTUFBTSxDQUFDQyxNQUFQLENBQWNHLFFBQXhCLEVBQWtDLFlBQU07QUFDdENWLElBQUFBLFlBQVksQ0FBQ1csT0FBYixDQUFxQmYsUUFBckIsRUFBK0JHLFFBQS9CO0FBQ0EsOEJBQVlJLE1BQVo7QUFDQVgsSUFBQUEsSUFBSSxDQUFDb0IsU0FBTCxHQUFpQmQsU0FBakI7QUFDRCxHQUpEO0FBS0FLLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVSCxNQUFNLENBQUNDLE1BQVAsQ0FBY00sZUFBeEIsRUFBeUMsWUFBTTtBQUM3Qyw4Q0FBc0JkLFFBQXRCO0FBQ0FDLElBQUFBLFlBQVksQ0FBQ2MsVUFBYixDQUF3QmxCLFFBQXhCO0FBQ0QsR0FIRDtBQUlELENBWkQ7O0FBY0EsSUFBSUcsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCUCxFQUFBQSxJQUFJLENBQUNvQixTQUFMLEdBQWlCZixVQUFqQjtBQUNELENBRkQsTUFFTztBQUNMSyxFQUFBQSxLQUFLLENBQUNILFFBQUQsQ0FBTDtBQUNEOztBQUVELElBQU1nQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHeEIsU0FBUyxDQUFDeUIsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBQ0EsTUFBUUMsS0FBUixHQUFrQkYsS0FBbEIsQ0FBUUUsS0FBUjtBQUNBRixFQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBYyxFQUFkO0FBQ0FsQixFQUFBQSxLQUFLLENBQUNrQixLQUFELENBQUw7QUFDRCxDQU5EOztBQVFBLElBQUkxQixTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDMkIsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlVW5hdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgaW5pdFNvY2tldHMgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xuXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiLFxuICBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5cbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xuXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xuICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XG4gIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgbmlja25hbWUgfSk7XG4gIHNvY2tldC5vbih3aW5kb3cuZXZlbnRzLmxvZ2dlZEluLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIG5pY2tuYW1lKTtcbiAgICBpbml0U29ja2V0cyhzb2NrZXQpO1xuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xuICB9KTtcbiAgc29ja2V0Lm9uKHdpbmRvdy5ldmVudHMudW5hdXRoZW50aWNhdGVkLCAoKSA9PiB7XG4gICAgaGFuZGxlVW5hdXRoZW50aWNhdGVkKG5pY2tuYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShOSUNLTkFNRSk7XG4gIH0pO1xufTtcblxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcbn0gZWxzZSB7XG4gIGxvZ0luKG5pY2tuYW1lKTtcbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICBsb2dJbih2YWx1ZSk7XG59O1xuXG5pZiAobG9naW5Gb3JtKSB7XG4gIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXQpO1xufVxuIl19
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
  fireNotification("".concat(nickname, " is already exist nickname!"), "rgba(44, 44, 44, 0.5)");
};

exports.handleUnauthenticated = handleUnauthenticated;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwiZmlyZU5vdGlmaWNhdGlvbiIsInRleHQiLCJjb2xvciIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiaGFuZGxlTmV3VXNlciIsIm5pY2tuYW1lIiwiaGFuZGxlRGlzY29ubmVjdGVkIiwiaGFuZGxlVW5hdXRoZW50aWNhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0QsSUFBdEI7O0FBRUEsSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDeEMsTUFBTUMsWUFBWSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFDQUQsRUFBQUEsWUFBWSxDQUFDRSxTQUFiLEdBQXlCSixJQUF6QjtBQUNBRSxFQUFBQSxZQUFZLENBQUNHLEtBQWIsQ0FBbUJDLGVBQW5CLEdBQXFDTCxLQUFyQztBQUNBQyxFQUFBQSxZQUFZLENBQUNLLFNBQWIsR0FBeUIsY0FBekI7QUFDQVYsRUFBQUEsSUFBSSxDQUFDVyxXQUFMLENBQWlCTixZQUFqQjtBQUNELENBTkQ7O0FBUU8sSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM3Q1gsRUFBQUEsZ0JBQWdCLFdBQUlXLFFBQUosb0JBQTZCLHlCQUE3QixDQUFoQjtBQUNELENBRk07Ozs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLFFBQWtCO0FBQUEsTUFBZkQsUUFBZSxTQUFmQSxRQUFlO0FBQ2xEWCxFQUFBQSxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsd0JBQTNCLENBQWhCO0FBQ0QsQ0FGTTs7OztBQUlBLElBQU1FLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0YsUUFBRCxFQUFjO0FBQ2pEWCxFQUFBQSxnQkFBZ0IsV0FDWFcsUUFEVyxrQ0FFZCx1QkFGYyxDQUFoQjtBQUlELENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcikgPT4ge1xuICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gdGV4dDtcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gXCJub3RpZmljYXRpb25cIjtcbiAgYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PiB7XG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkIWAsIFwicmdiYSg3NiwgMjE3LCAxMDAsIDAuNSlcIik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT4ge1xuICBmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGxlZnQhYCwgXCJyZ2JhKDI1NSwgNTksIDQ4LCAwLjUpXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVVuYXV0aGVudGljYXRlZCA9IChuaWNrbmFtZSkgPT4ge1xuICBmaXJlTm90aWZpY2F0aW9uKFxuICAgIGAke25pY2tuYW1lfSBpcyBhbHJlYWR5IGV4aXN0IG5pY2tuYW1lIWAsXG4gICAgXCJyZ2JhKDQ0LCA0NCwgNDQsIDAuNSlcIlxuICApO1xufTtcbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _socketController = _interopRequireDefault(require("../../src/socketController"));

var _sockets = require("./sockets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var canvas = document.getElementById("jsCanvas");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var ctx = canvas.getContext("2d");
var INITIAL_COLOR = "#2c2c2c";
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
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", function (event) {
    return event.preventDefault();
  });
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
  var _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? null : _ref3$color;
  var currentColor = ctx.fillStyle;
  if (color !== null) ctx.fillStyle = color;
  fill();
  ctx.fillStyle = currentColor;
};

exports.handleFilled = handleFilled;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb2xvcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW9kZSIsImN0eCIsImdldENvbnRleHQiLCJJTklUSUFMX0NPTE9SIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5lV2lkdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwicGFpbnRpbmciLCJmaWxsaW5nIiwic3RhcnRQYWludGluZyIsImUiLCJiZWdpblBhdGgiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwieCIsIm9mZnNldFgiLCJ5Iiwib2Zmc2V0WSIsInN0b3BQYWludGluZyIsInN0cm9rZVBhdGgiLCJsaW5lVG8iLCJzdHJva2UiLCJvbk1vdXNlTW92ZSIsImNvbG9yIiwiaGFuZGxlQ29sb3JDbGljayIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb2RlQ2xpY2siLCJpbm5lclRleHQiLCJmaWxsIiwiaGFuZGxlQ2FudmFzQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQmVnYW5QYXRoIiwibW92ZVRvIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJjdXJyZW50Q29sb3IiLCJoYW5kbGVGaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBZjtBQUNBLElBQU1DLElBQUksR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFFQSxJQUFNSSxHQUFH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c0NvbnRlbnQiOlsiaW1wb3J0IHNvY2tldENvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL3NyYy9zb2NrZXRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjb2xvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianNDb2xvclwiKTtcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxubGV0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjtcblxuY2FudmFzLndpZHRoID0gNDUwO1xuY2FudmFzLmhlaWdodCA9IDQ1MDtcblxuY3R4LmxpbmVXaWR0aCA9IDIuNTtcbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5jdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG5jdHguZmlsbFN0eWxlID0gSU5JVElBTF9DT0xPUjtcblxubGV0IHBhaW50aW5nID0gZmFsc2U7XG5sZXQgZmlsbGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzdGFydFBhaW50aW5nKGUpIHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZIH0pO1xuICBwYWludGluZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHN0b3BQYWludGluZygpIHtcbiAgcGFpbnRpbmcgPSBmYWxzZTtcbn1cblxuY29uc3Qgc3Ryb2tlUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5saW5lVG8oeCwgeSk7XG4gIGN0eC5zdHJva2UoKTtcbn07XG5cbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcbiAgaWYgKCFmaWxsaW5nKSB7XG4gICAgY29uc3QgeCA9IGUub2Zmc2V0WDtcbiAgICBjb25zdCB5ID0gZS5vZmZzZXRZO1xuICAgIGlmIChwYWludGluZykge1xuICAgICAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zdHJva2VQYXRoLCB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGNvbG9yOiBjdHguc3Ryb2tlU3R5bGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ29sb3JDbGljaygpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGhpcztcbiAgY29uc3QgY29sb3IgPSB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImNvbnRyb2xzX19jb2xvci0tY2xpY2tcIik7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJjb250cm9sc19fY29sb3ItLWNsaWNrXCIpO1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb2RlQ2xpY2soKSB7XG4gIGlmIChmaWxsaW5nKSB7XG4gICAgZmlsbGluZyA9IGZhbHNlO1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJGaWxsXCI7XG4gIH0gZWxzZSB7XG4gICAgZmlsbGluZyA9IHRydWU7XG4gICAgbW9kZS5pbm5lclRleHQgPSBcIlBhaW50XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbCgpIHtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNhbnZhc0NsaWNrKCkge1xuICBpZiAoZmlsbGluZykge1xuICAgIGZpbGwoKTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuZmlsbCwgeyBjb2xvcjogY3R4LmZpbGxTdHlsZSB9KTtcbiAgfVxufVxuXG5pZiAoY2FudmFzKSB7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbn1cblxuZm9yIChjb25zdCBjb2xvciBvZiBjb2xvcnMpIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDb2xvckNsaWNrKTtcblxuaWYgKG1vZGUpIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHgsIHkpO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHksIGNvbG9yID0gbnVsbCB9KSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDb2xvciA9IGN0eC5zdHJva2VTdHlsZTtcbiAgaWYgKGNvbG9yICE9PSBudWxsKSBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudENvbG9yO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVGaWxsZWQgPSAoeyBjb2xvciA9IG51bGwgfSkgPT4ge1xuICBjb25zdCBjdXJyZW50Q29sb3IgPSBjdHguZmlsbFN0eWxlO1xuICBpZiAoY29sb3IgIT09IG51bGwpIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgZmlsbCgpO1xuICBjdHguZmlsbFN0eWxlID0gY3VycmVudENvbG9yO1xufTtcbiJdfQ==
},{"../../src/socketController":9,"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePlayerUpdate = void 0;

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return console.log(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiaGFuZGxlUGxheWVyVXBkYXRlIiwic29ja2V0cyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLENBQWpCO0FBQUEsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGFuZGxlUGxheWVyVXBkYXRlID0gKHsgc29ja2V0cyB9KSA9PiBjb25zb2xlLmxvZyhzb2NrZXRzKTtcbiJdfQ==
},{}],7:[function(require,module,exports){
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
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01zZyIsImJlZ2FuUGF0aCIsImhhbmRsZUJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJmaWxsZWQiLCJoYW5kbGVGaWxsZWQiLCJwbGF5ZXJVcGRhdGUiLCJoYW5kbGVQbGF5ZXJVcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBYTtBQUN0QyxnQkFBbUJDLE1BQW5CO0FBQUEsTUFBUUMsTUFBUixXQUFRQSxNQUFSO0FBQ0FMLEVBQUFBLE1BQU0sR0FBR0csT0FBVDtBQUNBSCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDRSxPQUFqQixFQUEwQkMsNEJBQTFCO0FBQ0FSLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNJLFlBQWpCLEVBQStCQyxpQ0FBL0I7QUFDQVYsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ00sTUFBakIsRUFBeUJDLGtCQUF6QjtBQUNBWixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDUSxTQUFqQixFQUE0QkMsc0JBQTVCO0FBQ0FkLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNVLFdBQWpCLEVBQThCQyx3QkFBOUI7QUFDQWhCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNZLE1BQWpCLEVBQXlCQyxtQkFBekI7QUFDQWxCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNjLFlBQWpCLEVBQStCQywyQkFBL0I7QUFDRCxDQVZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3TXNnIH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgaGFuZGxlRGlzY29ubmVjdGVkLCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVGaWxsZWQsIGhhbmRsZVN0cm9rZWRQYXRoIH0gZnJvbSBcIi4vcGFpbnRcIjtcbmltcG9ydCB7IGhhbmRsZVBsYXllclVwZGF0ZSB9IGZyb20gXCIuL3BsYXllcnNcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XG4gIHNvY2tldCA9IGFTb2NrZXQ7XG4gIHNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG4gIHNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0ZWQpO1xuICBzb2NrZXQub24oZXZlbnRzLm5ld01zZywgaGFuZGxlTmV3TXNnKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5iZWdhblBhdGgsIGhhbmRsZUJlZ2FuUGF0aCk7XG4gIHNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5maWxsZWQsIGhhbmRsZUZpbGxlZCk7XG4gIHNvY2tldC5vbihldmVudHMucGxheWVyVXBkYXRlLCBoYW5kbGVQbGF5ZXJVcGRhdGUpO1xufTtcbiJdfQ==
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
  playerUpdate: "playerUpdate"
};
var _default = events;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6WyJldmVudHMiLCJzZXROaWNrbmFtZSIsIm5ld1VzZXIiLCJsb2dnZWRJbiIsInVuYXV0aGVudGljYXRlZCIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0ZWQiLCJzZW5kTXNnIiwibmV3TXNnIiwiYmVnaW5QYXRoIiwic3Ryb2tlUGF0aCIsImJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiZmlsbCIsImZpbGxlZCIsInBsYXllclVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLEVBQUFBLFdBQVcsRUFBRSxhQURBO0FBRWJDLEVBQUFBLE9BQU8sRUFBRSxTQUZJO0FBR2JDLEVBQUFBLFFBQVEsRUFBRSxVQUhHO0FBSWJDLEVBQUFBLGVBQWUsRUFBRSxpQkFKSjtBQUtiQyxFQUFBQSxVQUFVLEVBQUUsWUFMQztBQU1iQyxFQUFBQSxZQUFZLEVBQUUsY0FORDtBQU9iQyxFQUFBQSxPQUFPLEVBQUUsU0FQSTtBQVFiQyxFQUFBQSxNQUFNLEVBQUUsUUFSSztBQVNiQyxFQUFBQSxTQUFTLEVBQUUsV0FURTtBQVViQyxFQUFBQSxVQUFVLEVBQUUsWUFWQztBQVdiQyxFQUFBQSxTQUFTLEVBQUUsV0FYRTtBQVliQyxFQUFBQSxXQUFXLEVBQUUsYUFaQTtBQWFiQyxFQUFBQSxJQUFJLEVBQUUsTUFiTztBQWNiQyxFQUFBQSxNQUFNLEVBQUUsUUFkSztBQWViQyxFQUFBQSxZQUFZLEVBQUU7QUFmRCxDQUFmO2VBa0JlZixNIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXZlbnRzID0ge1xuICBzZXROaWNrbmFtZTogXCJzZXROaWNrbmFtZVwiLFxuICBuZXdVc2VyOiBcIm5ld1VzZXJcIixcbiAgbG9nZ2VkSW46IFwibG9nZ2VkSW5cIixcbiAgdW5hdXRoZW50aWNhdGVkOiBcInVuYXV0aGVudGljYXRlZFwiLFxuICBkaXNjb25uZWN0OiBcImRpc2Nvbm5lY3RcIixcbiAgZGlzY29ubmVjdGVkOiBcImRpc2Nvbm5lY3RlZFwiLFxuICBzZW5kTXNnOiBcInNlbmRNc2dcIixcbiAgbmV3TXNnOiBcIm5ld01zZ1wiLFxuICBiZWdpblBhdGg6IFwiYmVnaW5QYXRoXCIsXG4gIHN0cm9rZVBhdGg6IFwic3Ryb2tlUGF0aFwiLFxuICBiZWdhblBhdGg6IFwiYmVnYW5QYXRoXCIsXG4gIHN0cm9rZWRQYXRoOiBcInN0cm9rZWRQYXRoXCIsXG4gIGZpbGw6IFwiZmlsbFwiLFxuICBmaWxsZWQ6IFwiZmlsbGVkXCIsXG4gIHBsYXllclVwZGF0ZTogXCJwbGF5ZXJVcGRhdGVcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcbiJdfQ==
},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = _interopRequireDefault(require("./events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sockets = [];
var nicknames = [];

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
    } else {
      socket.emit(_events["default"].unauthenticated);
    }
  });
  socket.on(_events["default"].disconnect, function () {
    if (socket.nickname) {
      broadcast(_events["default"].disconnected, {
        nickname: socket.nickname
      });
      sockets.splice(sockets.findIndex(function (aSocket) {
        return aSocket.id == socket.id;
      }), 1); // splice는 start를 string으로 찾으면 그 string이 포함되어 있는 첫 번째 것으로 해줌

      nicknames.splice(nicknames.findIndex(function (nickname) {
        return nickname == socket.nickname;
      }), 1);
      sendPlayerUpdate();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic29ja2V0cyIsIm5pY2tuYW1lcyIsInNvY2tldENvbnRyb2xsZXIiLCJzb2NrZXQiLCJpbyIsImJyb2FkY2FzdCIsImV2ZW50IiwiZGF0YSIsImVtaXQiLCJzdXBlckJyb2FkY2FzdCIsInNlbmRQbGF5ZXJVcGRhdGUiLCJldmVudHMiLCJwbGF5ZXJVcGRhdGUiLCJvbiIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJpZCIsInBvaW50cyIsImxvZ2dlZEluIiwibmV3VXNlciIsInVuYXV0aGVudGljYXRlZCIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0ZWQiLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJhU29ja2V0Iiwic2VuZE1zZyIsIm1lc3NhZ2UiLCJuZXdNc2ciLCJiZWdpblBhdGgiLCJ4IiwieSIsImJlZ2FuUGF0aCIsInN0cm9rZVBhdGgiLCJjb2xvciIsInN0cm9rZWRQYXRoIiwiZmlsbCIsImZpbGxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBSUEsT0FBTyxHQUFHLEVBQWQ7QUFDQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxNQUFELEVBQVNDLEVBQVQsRUFBZ0I7QUFDdkMsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSO0FBQUEsV0FBaUJKLE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQkcsSUFBakIsQ0FBc0JGLEtBQXRCLEVBQTZCQyxJQUE3QixDQUFqQjtBQUFBLEdBQWxCOztBQUNBLE1BQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0gsS0FBRCxFQUFRQyxJQUFSO0FBQUEsV0FBaUJILEVBQUUsQ0FBQ0ksSUFBSCxDQUFRRixLQUFSLEVBQWVDLElBQWYsQ0FBakI7QUFBQSxHQUF2Qjs7QUFDQSxNQUFNRyxn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QUFTQSxLQUFUO0FBQUEsV0FDM0IvQixTQUFTLENBQUNNLG1CQUFPMEIsV0FBUixFQUFxQjtBQUFFTCxNQUFBQSxDQUFDLEVBQURBLENBQUY7QUFBS0MsTUFBQUEsQ0FBQyxFQUFEQSxDQUFMO0FBQVFHLE1BQUFBLEtBQUssRUFBTEE7QUFBUixLQUFyQixDQURrQjtBQUFBLEdBQTdCO0FBSUFqQyxFQUFBQSxNQUFNLENBQUNVLEVBQVAsQ0FBVUYsbUJBQU8yQixJQUFqQixFQUF1QixpQkFBZTtBQUFBLFFBQVpGLEtBQVksU0FBWkEsS0FBWTtBQUNwQy9CLElBQUFBLFNBQVMsQ0FBQ00sbUJBQU80QixNQUFSLEVBQWdCO0FBQUVILE1BQUFBLEtBQUssRUFBTEE7QUFBRixLQUFoQixDQUFUO0FBQ0QsR0FGRDtBQUdELENBbEREOztlQW9EZWxDLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcblxubGV0IHNvY2tldHMgPSBbXTtcbmxldCBuaWNrbmFtZXMgPSBbXTtcblxuY29uc3Qgc29ja2V0Q29udHJvbGxlciA9IChzb2NrZXQsIGlvKSA9PiB7XG4gIGNvbnN0IGJyb2FkY2FzdCA9IChldmVudCwgZGF0YSkgPT4gc29ja2V0LmJyb2FkY2FzdC5lbWl0KGV2ZW50LCBkYXRhKTtcbiAgY29uc3Qgc3VwZXJCcm9hZGNhc3QgPSAoZXZlbnQsIGRhdGEpID0+IGlvLmVtaXQoZXZlbnQsIGRhdGEpO1xuICBjb25zdCBzZW5kUGxheWVyVXBkYXRlID0gKCkgPT5cbiAgICBzdXBlckJyb2FkY2FzdChldmVudHMucGxheWVyVXBkYXRlLCB7IHNvY2tldHMgfSk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5zZXROaWNrbmFtZSwgKHsgbmlja25hbWUgfSkgPT4ge1xuICAgIGlmICghbmlja25hbWVzLmluY2x1ZGVzKG5pY2tuYW1lKSkge1xuICAgICAgc29ja2V0Lm5pY2tuYW1lID0gbmlja25hbWU7XG4gICAgICBuaWNrbmFtZXMucHVzaChuaWNrbmFtZSk7XG4gICAgICBzb2NrZXRzLnB1c2goeyBpZDogc29ja2V0LmlkLCBwb2ludHM6IDAsIG5pY2tuYW1lOiBuaWNrbmFtZSB9KTtcbiAgICAgIHNvY2tldC5lbWl0KGV2ZW50cy5sb2dnZWRJbik7XG4gICAgICBicm9hZGNhc3QoZXZlbnRzLm5ld1VzZXIsIHsgbmlja25hbWUgfSk7XG4gICAgICBzZW5kUGxheWVyVXBkYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvY2tldC5lbWl0KGV2ZW50cy51bmF1dGhlbnRpY2F0ZWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0LCAoKSA9PiB7XG4gICAgaWYgKHNvY2tldC5uaWNrbmFtZSkge1xuICAgICAgYnJvYWRjYXN0KGV2ZW50cy5kaXNjb25uZWN0ZWQsIHsgbmlja25hbWU6IHNvY2tldC5uaWNrbmFtZSB9KTtcbiAgICAgIHNvY2tldHMuc3BsaWNlKFxuICAgICAgICBzb2NrZXRzLmZpbmRJbmRleCgoYVNvY2tldCkgPT4gYVNvY2tldC5pZCA9PSBzb2NrZXQuaWQpLFxuICAgICAgICAxXG4gICAgICApO1xuICAgICAgLy8gc3BsaWNl64qUIHN0YXJ066W8IHN0cmluZ+ycvOuhnCDssL7snLzrqbQg6re4IHN0cmluZ+ydtCDtj6ztlajrkJjslrQg7J6I64qUIOyyqyDrsojsp7gg6rKD7Jy866GcIO2VtOykjFxuICAgICAgbmlja25hbWVzLnNwbGljZShcbiAgICAgICAgbmlja25hbWVzLmZpbmRJbmRleCgobmlja25hbWUpID0+IG5pY2tuYW1lID09IHNvY2tldC5uaWNrbmFtZSksXG4gICAgICAgIDFcbiAgICAgICk7XG4gICAgICBzZW5kUGxheWVyVXBkYXRlKCk7XG4gICAgfVxuICB9KTtcblxuICBzb2NrZXQub24oZXZlbnRzLnNlbmRNc2csICh7IG1lc3NhZ2UgfSkgPT4ge1xuICAgIGJyb2FkY2FzdChldmVudHMubmV3TXNnLCB7IG1lc3NhZ2UsIG5pY2tuYW1lOiBzb2NrZXQubmlja25hbWUgfSk7XG4gIH0pO1xuXG4gIHNvY2tldC5vbihldmVudHMuYmVnaW5QYXRoLCAoeyB4LCB5IH0pID0+XG4gICAgYnJvYWRjYXN0KGV2ZW50cy5iZWdhblBhdGgsIHsgeCwgeSB9KVxuICApO1xuXG4gIHNvY2tldC5vbihldmVudHMuc3Ryb2tlUGF0aCwgKHsgeCwgeSwgY29sb3IgfSkgPT5cbiAgICBicm9hZGNhc3QoZXZlbnRzLnN0cm9rZWRQYXRoLCB7IHgsIHksIGNvbG9yIH0pXG4gICk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5maWxsLCAoeyBjb2xvciB9KSA9PiB7XG4gICAgYnJvYWRjYXN0KGV2ZW50cy5maWxsZWQsIHsgY29sb3IgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc29ja2V0Q29udHJvbGxlcjtcbiJdfQ==
},{"./events":8}]},{},[2])