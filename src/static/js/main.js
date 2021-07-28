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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMzg5MTYzMjEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG5pbXBvcnQgXCIuL3BsYXllcnNcIjtcbiJdfQ==
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
exports.handleGameEnded = exports.handleLeaderNotif = exports.handleGameStarted = exports.handlePlayerUpdate = void 0;

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
  setNotifs("You are the leader, paint: ".concat(word));
};

exports.handleLeaderNotif = handleLeaderNotif;

var handleGameEnded = function handleGameEnded(_ref3) {
  var word = _ref3.word;
  setNotifs("Game ended.");
  (0, _paint.saveAnchor)(word);
  (0, _paint.disableCanvas)();
  (0, _paint.hideCanvasControls)();
  (0, _paint.resetCanvas)();
};

exports.handleGameEnded = handleGameEnded;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibm90aWZzIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJwbGF5ZXIiLCJwbGF5ZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsIm5pY2tuYW1lIiwicG9pbnRzIiwiYXBwZW5kQ2hpbGQiLCJzZXROb3RpZnMiLCJ0ZXh0IiwiaGFuZGxlUGxheWVyVXBkYXRlIiwic29ja2V0cyIsImhhbmRsZUdhbWVTdGFydGVkIiwiaGFuZGxlTGVhZGVyTm90aWYiLCJ3b3JkIiwiaGFuZGxlR2FtZUVuZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBU0EsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZDtBQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7O0FBRUEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFhO0FBQzlCTCxFQUFBQSxLQUFLLENBQUNNLFNBQU4sR0FBa0IsRUFBbEI7O0FBRDhCLDZDQUVURCxPQUZTO0FBQUE7O0FBQUE7QUFFOUIsd0RBQThCO0FBQUEsVUFBbkJFLE1BQW1CO0FBQzVCLFVBQU1DLGFBQWEsR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLE1BQXZCLENBQXRCO0FBQ0FELE1BQUFBLGFBQWEsQ0FBQ0UsU0FBZCxhQUE2QkgsTUFBTSxDQUFDSSxRQUFwQyxlQUFpREosTUFBTSxDQUFDSyxNQUF4RDtBQUNBWixNQUFBQSxLQUFLLENBQUNhLFdBQU4sQ0FBa0JMLGFBQWxCO0FBQ0Q7QUFONkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU8vQixDQVBEOztBQVNBLElBQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUMxQlosRUFBQUEsTUFBTSxDQUFDTyxTQUFQLEdBQW1CSyxJQUFuQjtBQUNELENBRkQ7O0FBSU8sSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQWlCYixVQUFVLENBQUNhLE9BQUQsQ0FBM0I7QUFBQSxDQUEzQjs7OztBQUNBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNyQztBQUNBO0FBQ0FKLEVBQUFBLFNBQVMsQ0FBQyxFQUFELENBQVQ7QUFDRCxDQUpNOzs7O0FBS0EsSUFBTUssaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixRQUFjO0FBQUEsTUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQzdDO0FBQ0E7QUFDQU4sRUFBQUEsU0FBUyxzQ0FBK0JNLElBQS9CLEVBQVQ7QUFDRCxDQUpNOzs7O0FBS0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixRQUFjO0FBQUEsTUFBWEQsSUFBVyxTQUFYQSxJQUFXO0FBQzNDTixFQUFBQSxTQUFTLENBQUMsYUFBRCxDQUFUO0FBQ0EseUJBQVdNLElBQVg7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQU5NIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZGlzYWJsZUNhbnZhcyxcbiAgZW5hYmxlQ2FudmFzLFxuICBoaWRlQ2FudmFzQ29udHJvbHMsXG4gIHJlc2V0Q2FudmFzLFxuICBzYXZlQW5jaG9yLFxuICBzaG93Q2FudmFzQ29udHJvbHMsXG59IGZyb20gXCIuL3BhaW50XCI7XG5cbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1BCb2FyZFwiKTtcbmNvbnN0IG5vdGlmcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNOb3RpZnNcIik7XG5cbmNvbnN0IGFkZFBsYXllcnMgPSAocGxheWVycykgPT4ge1xuICBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGNvbnN0IHBsYXllciBvZiBwbGF5ZXJzKSB7XG4gICAgY29uc3QgcGxheWVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHBsYXllckVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7cGxheWVyLm5pY2tuYW1lfTogJHtwbGF5ZXIucG9pbnRzfWA7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyRWxlbWVudCk7XG4gIH1cbn07XG5cbmNvbnN0IHNldE5vdGlmcyA9ICh0ZXh0KSA9PiB7XG4gIG5vdGlmcy5pbm5lclRleHQgPSB0ZXh0O1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVBsYXllclVwZGF0ZSA9ICh7IHNvY2tldHMgfSkgPT4gYWRkUGxheWVycyhzb2NrZXRzKTtcbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lU3RhcnRlZCA9ICgpID0+IHtcbiAgZGlzYWJsZUNhbnZhcygpO1xuICBoaWRlQ2FudmFzQ29udHJvbHMoKTtcbiAgc2V0Tm90aWZzKFwiXCIpO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVMZWFkZXJOb3RpZiA9ICh7IHdvcmQgfSkgPT4ge1xuICBlbmFibGVDYW52YXMoKTtcbiAgc2hvd0NhbnZhc0NvbnRyb2xzKCk7XG4gIHNldE5vdGlmcyhgWW91IGFyZSB0aGUgbGVhZGVyLCBwYWludDogJHt3b3JkfWApO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lRW5kZWQgPSAoeyB3b3JkIH0pID0+IHtcbiAgc2V0Tm90aWZzKFwiR2FtZSBlbmRlZC5cIik7XG4gIHNhdmVBbmNob3Iod29yZCk7XG4gIGRpc2FibGVDYW52YXMoKTtcbiAgaGlkZUNhbnZhc0NvbnRyb2xzKCk7XG4gIHJlc2V0Q2FudmFzKCk7XG59O1xuIl19
},{"./paint":5}],7:[function(require,module,exports){
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
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01zZyIsImJlZ2FuUGF0aCIsImhhbmRsZUJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJmaWxsZWQiLCJoYW5kbGVGaWxsZWQiLCJwbGF5ZXJVcGRhdGUiLCJoYW5kbGVQbGF5ZXJVcGRhdGUiLCJnYW1lU3RhcnRlZCIsImhhbmRsZUdhbWVTdGFydGVkIiwibGVhZGVyTm90aWYiLCJoYW5kbGVMZWFkZXJOb3RpZiIsImdhbWVFbmRlZCIsImhhbmRsZUdhbWVFbmRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQU9BLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFhO0FBQ3RDLGdCQUFtQkMsTUFBbkI7QUFBQSxNQUFRQyxNQUFSLFdBQVFBLE1BQVI7QUFDQUwsRUFBQUEsTUFBTSxHQUFHRyxPQUFUO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNFLE9BQWpCLEVBQTBCQyw0QkFBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0ksWUFBakIsRUFBK0JDLGlDQUEvQjtBQUNBVixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDTSxNQUFqQixFQUF5QkMsa0JBQXpCO0FBQ0FaLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNRLFNBQWpCLEVBQTRCQyxzQkFBNUI7QUFDQWQsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1UsV0FBakIsRUFBOEJDLHdCQUE5QjtBQUNBaEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1ksTUFBakIsRUFBeUJDLG1CQUF6QjtBQUNBbEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2MsWUFBakIsRUFBK0JDLDJCQUEvQjtBQUNBcEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2dCLFdBQWpCLEVBQThCQywwQkFBOUI7QUFDQXRCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNrQixXQUFqQixFQUE4QkMsMEJBQTlCO0FBQ0F4QixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDb0IsU0FBakIsRUFBNEJDLHdCQUE1QjtBQUNELENBYk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdNc2cgfSBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQgeyBoYW5kbGVEaXNjb25uZWN0ZWQsIGhhbmRsZU5ld1VzZXIgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyBoYW5kbGVCZWdhblBhdGgsIGhhbmRsZUZpbGxlZCwgaGFuZGxlU3Ryb2tlZFBhdGggfSBmcm9tIFwiLi9wYWludFwiO1xuaW1wb3J0IHtcbiAgaGFuZGxlR2FtZUVuZGVkLFxuICBoYW5kbGVHYW1lU3RhcnRlZCxcbiAgaGFuZGxlTGVhZGVyTm90aWYsXG4gIGhhbmRsZVBsYXllclVwZGF0ZSxcbn0gZnJvbSBcIi4vcGxheWVyc1wiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgc29ja2V0ID0gYVNvY2tldDtcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XG4gIHNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNc2cpO1xuICBzb2NrZXQub24oZXZlbnRzLmJlZ2FuUGF0aCwgaGFuZGxlQmVnYW5QYXRoKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5zdHJva2VkUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGgpO1xuICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5wbGF5ZXJVcGRhdGUsIGhhbmRsZVBsYXllclVwZGF0ZSk7XG4gIHNvY2tldC5vbihldmVudHMuZ2FtZVN0YXJ0ZWQsIGhhbmRsZUdhbWVTdGFydGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5sZWFkZXJOb3RpZiwgaGFuZGxlTGVhZGVyTm90aWYpO1xuICBzb2NrZXQub24oZXZlbnRzLmdhbWVFbmRlZCwgaGFuZGxlR2FtZUVuZGVkKTtcbn07XG4iXX0=
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
  gameEnded: "gameEnded"
};
var _default = events;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6WyJldmVudHMiLCJzZXROaWNrbmFtZSIsIm5ld1VzZXIiLCJsb2dnZWRJbiIsInVuYXV0aGVudGljYXRlZCIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0ZWQiLCJzZW5kTXNnIiwibmV3TXNnIiwiYmVnaW5QYXRoIiwic3Ryb2tlUGF0aCIsImJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiZmlsbCIsImZpbGxlZCIsInBsYXllclVwZGF0ZSIsImdhbWVTdGFydGVkIiwibGVhZGVyTm90aWYiLCJnYW1lRW5kZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxXQUFXLEVBQUUsYUFEQTtBQUViQyxFQUFBQSxPQUFPLEVBQUUsU0FGSTtBQUdiQyxFQUFBQSxRQUFRLEVBQUUsVUFIRztBQUliQyxFQUFBQSxlQUFlLEVBQUUsaUJBSko7QUFLYkMsRUFBQUEsVUFBVSxFQUFFLFlBTEM7QUFNYkMsRUFBQUEsWUFBWSxFQUFFLGNBTkQ7QUFPYkMsRUFBQUEsT0FBTyxFQUFFLFNBUEk7QUFRYkMsRUFBQUEsTUFBTSxFQUFFLFFBUks7QUFTYkMsRUFBQUEsU0FBUyxFQUFFLFdBVEU7QUFVYkMsRUFBQUEsVUFBVSxFQUFFLFlBVkM7QUFXYkMsRUFBQUEsU0FBUyxFQUFFLFdBWEU7QUFZYkMsRUFBQUEsV0FBVyxFQUFFLGFBWkE7QUFhYkMsRUFBQUEsSUFBSSxFQUFFLE1BYk87QUFjYkMsRUFBQUEsTUFBTSxFQUFFLFFBZEs7QUFlYkMsRUFBQUEsWUFBWSxFQUFFLGNBZkQ7QUFnQmJDLEVBQUFBLFdBQVcsRUFBRSxhQWhCQTtBQWlCYkMsRUFBQUEsV0FBVyxFQUFFLGFBakJBO0FBa0JiQyxFQUFBQSxTQUFTLEVBQUU7QUFsQkUsQ0FBZjtlQXFCZWxCLE0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBldmVudHMgPSB7XG4gIHNldE5pY2tuYW1lOiBcInNldE5pY2tuYW1lXCIsXG4gIG5ld1VzZXI6IFwibmV3VXNlclwiLFxuICBsb2dnZWRJbjogXCJsb2dnZWRJblwiLFxuICB1bmF1dGhlbnRpY2F0ZWQ6IFwidW5hdXRoZW50aWNhdGVkXCIsXG4gIGRpc2Nvbm5lY3Q6IFwiZGlzY29ubmVjdFwiLFxuICBkaXNjb25uZWN0ZWQ6IFwiZGlzY29ubmVjdGVkXCIsXG4gIHNlbmRNc2c6IFwic2VuZE1zZ1wiLFxuICBuZXdNc2c6IFwibmV3TXNnXCIsXG4gIGJlZ2luUGF0aDogXCJiZWdpblBhdGhcIixcbiAgc3Ryb2tlUGF0aDogXCJzdHJva2VQYXRoXCIsXG4gIGJlZ2FuUGF0aDogXCJiZWdhblBhdGhcIixcbiAgc3Ryb2tlZFBhdGg6IFwic3Ryb2tlZFBhdGhcIixcbiAgZmlsbDogXCJmaWxsXCIsXG4gIGZpbGxlZDogXCJmaWxsZWRcIixcbiAgcGxheWVyVXBkYXRlOiBcInBsYXllclVwZGF0ZVwiLFxuICBnYW1lU3RhcnRlZDogXCJnYW1lU3RhcnRlZFwiLFxuICBsZWFkZXJOb3RpZjogXCJsZWFkZXJOb3RpZlwiLFxuICBnYW1lRW5kZWQ6IFwiZ2FtZUVuZGVkXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG4iXX0=
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
      setTimeout(function () {
        superBroadcast(_events["default"].gameStarted);
        io.to(leader.id).emit(_events["default"].leaderNotif, {
          word: word
        });
      }, 2000);
    }
  };

  var endGame = function endGame() {
    inProgress = false;
    superBroadcast(_events["default"].gameEnded, {
      word: word
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic29ja2V0cyIsIm5pY2tuYW1lcyIsImluUHJvZ3Jlc3MiLCJ3b3JkIiwibGVhZGVyIiwiY2hvb3NlTGVhZGVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic29ja2V0Q29udHJvbGxlciIsInNvY2tldCIsImlvIiwiYnJvYWRjYXN0IiwiZXZlbnQiLCJkYXRhIiwiZW1pdCIsInN1cGVyQnJvYWRjYXN0Iiwic2VuZFBsYXllclVwZGF0ZSIsImV2ZW50cyIsInBsYXllclVwZGF0ZSIsInN0YXJ0R2FtZSIsInNldFRpbWVvdXQiLCJnYW1lU3RhcnRlZCIsInRvIiwiaWQiLCJsZWFkZXJOb3RpZiIsImVuZEdhbWUiLCJnYW1lRW5kZWQiLCJvbiIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJwb2ludHMiLCJsb2dnZWRJbiIsIm5ld1VzZXIiLCJ1bmF1dGhlbnRpY2F0ZWQiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGVkIiwiZmlsdGVyIiwiYVNvY2tldCIsInNlbmRNc2ciLCJtZXNzYWdlIiwibmV3TXNnIiwiYmVnaW5QYXRoIiwieCIsInkiLCJiZWdhblBhdGgiLCJzdHJva2VQYXRoIiwiY29sb3IiLCJzdHJva2VkUGF0aCIsImZpbGwiLCJmaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQUlBLE9BQU8sR0FBRyxFQUFkO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLEtBQWpCO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxJQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQU1MLE9BQU8sQ0FBQ00sSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlIsT0FBTyxDQUFDUyxN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QUFDLEVBQURBLENBQUY7QUFBS0MsTUFBQUEsQ0FBQyxFQUFEQTtBQUFMLEtBQW5CLENBRGlCO0FBQUEsR0FBNUI7QUFJQXBDLEVBQUFBLE1BQU0sQ0FBQ2tCLEVBQVAsQ0FBVVYsbUJBQU84QixVQUFqQixFQUE2QjtBQUFBLFFBQUdILENBQUgsU0FBR0EsQ0FBSDtBQUFBLFFBQU1DLENBQU4sU0FBTUEsQ0FBTjtBQUFBLFFBQVNHLEtBQVQsU0FBU0EsS0FBVDtBQUFBLFdBQzNCckMsU0FBUyxDQUFDTSxtQkFBT2dDLFdBQVIsRUFBcUI7QUFBRUwsTUFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLE1BQUFBLENBQUMsRUFBREEsQ0FBTDtBQUFRRyxNQUFBQSxLQUFLLEVBQUxBO0FBQVIsS0FBckIsQ0FEa0I7QUFBQSxHQUE3QjtBQUlBdkMsRUFBQUEsTUFBTSxDQUFDa0IsRUFBUCxDQUFVVixtQkFBT2lDLElBQWpCLEVBQXVCLGlCQUFlO0FBQUEsUUFBWkYsS0FBWSxTQUFaQSxLQUFZO0FBQ3BDckMsSUFBQUEsU0FBUyxDQUFDTSxtQkFBT2tDLE1BQVIsRUFBZ0I7QUFBRUgsTUFBQUEsS0FBSyxFQUFMQTtBQUFGLEtBQWhCLENBQVQ7QUFDRCxHQUZEO0FBR0QsQ0FoRUQ7O2VBa0VleEMsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHsgY2hvb3NlV29yZCB9IGZyb20gXCIuL3dvcmRzXCI7XG5cbmxldCBzb2NrZXRzID0gW107XG5sZXQgbmlja25hbWVzID0gW107XG5sZXQgaW5Qcm9ncmVzcyA9IGZhbHNlO1xubGV0IHdvcmQgPSBudWxsO1xubGV0IGxlYWRlciA9IG51bGw7XG5cbmNvbnN0IGNob29zZUxlYWRlciA9ICgpID0+IHNvY2tldHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc29ja2V0cy5sZW5ndGgpXTtcblxuY29uc3Qgc29ja2V0Q29udHJvbGxlciA9IChzb2NrZXQsIGlvKSA9PiB7XG4gIGNvbnN0IGJyb2FkY2FzdCA9IChldmVudCwgZGF0YSkgPT4gc29ja2V0LmJyb2FkY2FzdC5lbWl0KGV2ZW50LCBkYXRhKTtcbiAgY29uc3Qgc3VwZXJCcm9hZGNhc3QgPSAoZXZlbnQsIGRhdGEpID0+IGlvLmVtaXQoZXZlbnQsIGRhdGEpO1xuICBjb25zdCBzZW5kUGxheWVyVXBkYXRlID0gKCkgPT5cbiAgICBzdXBlckJyb2FkY2FzdChldmVudHMucGxheWVyVXBkYXRlLCB7IHNvY2tldHMgfSk7XG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBpZiAoaW5Qcm9ncmVzcyA9PSBmYWxzZSkge1xuICAgICAgaW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICBsZWFkZXIgPSBjaG9vc2VMZWFkZXIoKTtcbiAgICAgIHdvcmQgPSBjaG9vc2VXb3JkKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3VwZXJCcm9hZGNhc3QoZXZlbnRzLmdhbWVTdGFydGVkKTtcbiAgICAgICAgaW8udG8obGVhZGVyLmlkKS5lbWl0KGV2ZW50cy5sZWFkZXJOb3RpZiwgeyB3b3JkIH0pO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICAgIGluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICBzdXBlckJyb2FkY2FzdChldmVudHMuZ2FtZUVuZGVkLCB7IHdvcmQgfSk7XG4gIH07XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5zZXROaWNrbmFtZSwgKHsgbmlja25hbWUgfSkgPT4ge1xuICAgIGlmICghbmlja25hbWVzLmluY2x1ZGVzKG5pY2tuYW1lKSkge1xuICAgICAgc29ja2V0Lm5pY2tuYW1lID0gbmlja25hbWU7XG4gICAgICBuaWNrbmFtZXMucHVzaChuaWNrbmFtZSk7XG4gICAgICBzb2NrZXRzLnB1c2goeyBpZDogc29ja2V0LmlkLCBwb2ludHM6IDAsIG5pY2tuYW1lOiBuaWNrbmFtZSB9KTtcbiAgICAgIHNvY2tldC5lbWl0KGV2ZW50cy5sb2dnZWRJbik7XG4gICAgICBicm9hZGNhc3QoZXZlbnRzLm5ld1VzZXIsIHsgbmlja25hbWUgfSk7XG4gICAgICBzZW5kUGxheWVyVXBkYXRlKCk7XG4gICAgICBpZiAoc29ja2V0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzb2NrZXQuZW1pdChldmVudHMudW5hdXRoZW50aWNhdGVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdCwgKCkgPT4ge1xuICAgIGJyb2FkY2FzdChldmVudHMuZGlzY29ubmVjdGVkLCB7IG5pY2tuYW1lOiBzb2NrZXQubmlja25hbWUgfSk7XG4gICAgc29ja2V0cyA9IHNvY2tldHMuZmlsdGVyKChhU29ja2V0KSA9PiBhU29ja2V0LmlkICE9IHNvY2tldC5pZCk7XG4gICAgbmlja25hbWVzID0gbmlja25hbWVzLmZpbHRlcigobmlja25hbWUpID0+IG5pY2tuYW1lICE9IHNvY2tldC5uaWNrbmFtZSk7XG4gICAgaWYgKHNvY2tldHMubGVuZ3RoID09IDEpIHtcbiAgICAgIGVuZEdhbWUoKTtcbiAgICB9IGVsc2UgaWYgKGxlYWRlcikge1xuICAgICAgaWYgKHNvY2tldC5pZCA9PSBsZWFkZXIuaWQpIGVuZEdhbWUoKTtcbiAgICB9XG4gICAgc2VuZFBsYXllclVwZGF0ZSgpO1xuICB9KTtcblxuICBzb2NrZXQub24oZXZlbnRzLnNlbmRNc2csICh7IG1lc3NhZ2UgfSkgPT4ge1xuICAgIGJyb2FkY2FzdChldmVudHMubmV3TXNnLCB7IG1lc3NhZ2UsIG5pY2tuYW1lOiBzb2NrZXQubmlja25hbWUgfSk7XG4gIH0pO1xuXG4gIHNvY2tldC5vbihldmVudHMuYmVnaW5QYXRoLCAoeyB4LCB5IH0pID0+XG4gICAgYnJvYWRjYXN0KGV2ZW50cy5iZWdhblBhdGgsIHsgeCwgeSB9KVxuICApO1xuXG4gIHNvY2tldC5vbihldmVudHMuc3Ryb2tlUGF0aCwgKHsgeCwgeSwgY29sb3IgfSkgPT5cbiAgICBicm9hZGNhc3QoZXZlbnRzLnN0cm9rZWRQYXRoLCB7IHgsIHksIGNvbG9yIH0pXG4gICk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5maWxsLCAoeyBjb2xvciB9KSA9PiB7XG4gICAgYnJvYWRjYXN0KGV2ZW50cy5maWxsZWQsIHsgY29sb3IgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc29ja2V0Q29udHJvbGxlcjtcbiJdfQ==
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