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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMzg3NGUyNzguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG5pbXBvcnQgXCIuL3BsYXllcnNcIjtcbiJdfQ==
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
exports.showCanvasControls = exports.hideCanvasControls = exports.enableCanvas = exports.disableCanvas = exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

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
  return controls.style.display = "block";
};

exports.showCanvasControls = showCanvasControls;

if (canvas) {
  enableCanvas();
  canvas.addEventListener("contextmenu", function (event) {
    return event.preventDefault();
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cm9scyIsImNvbG9ycyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtb2RlIiwiY3R4IiwiZ2V0Q29udGV4dCIsIklOSVRJQUxfQ09MT1IiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVXaWR0aCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJwYWludGluZyIsImZpbGxpbmciLCJzdGFydFBhaW50aW5nIiwiZSIsImJlZ2luUGF0aCIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJ4Iiwib2Zmc2V0WCIsInkiLCJvZmZzZXRZIiwic3RvcFBhaW50aW5nIiwic3Ryb2tlUGF0aCIsImxpbmVUbyIsInN0cm9rZSIsIm9uTW91c2VNb3ZlIiwiY29sb3IiLCJoYW5kbGVDb2xvckNsaWNrIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vZGVDbGljayIsImlubmVyVGV4dCIsImZpbGwiLCJoYW5kbGVDYW52YXNDbGljayIsImhhbmRsZUJlZ2FuUGF0aCIsIm1vdmVUbyIsImhhbmRsZVN0cm9rZWRQYXRoIiwiY3VycmVudENvbG9yIiwiaGFuZGxlRmlsbGVkIiwiZGlzYWJsZUNhbnZhcyIsImVuYWJsZUNhbnZhcyIsImhpZGVDYW52YXNDb250cm9scyIsImRpc3BsYXkiLCJzaG93Q2FudmFzQ29udHJvbHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUND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Q0E1QixFQUFBQSxNQUFNLENBQUMwQyxtQkFBUCxDQUEyQixPQUEzQixFQUFvQ0ksaUJBQXBDO0FBQ0QsQ0FOTTs7OztBQVFBLElBQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDaENyRCxFQUFBQSxNQUFNLENBQUN3QyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ1IsV0FBckM7QUFDQWhDLEVBQUFBLE1BQU0sQ0FBQ3dDLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDdEIsYUFBckM7QUFDQWxCLEVBQUFBLE1BQU0sQ0FBQ3dDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DWixZQUFuQztBQUNBNUIsRUFBQUEsTUFBTSxDQUFDd0MsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0NaLFlBQXRDO0FBQ0E1QixFQUFBQSxNQUFNLENBQUN3QyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ00saUJBQWpDO0FBQ0QsQ0FOTTs7OztBQVFBLElBQU1RLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFPbkQsUUFBUSxDQUFDaUMsS0FBVCxDQUFlbUIsT0FBZixHQUF5QixNQUFoQztBQUFBLENBQTNCOzs7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLFNBQU9yRCxRQUFRLENBQUNpQyxLQUFULENBQWVtQixPQUFmLEdBQXlCLE9BQWhDO0FBQUEsQ0FBM0I7Ozs7QUFFUCxJQUFJdkQsTUFBSixFQUFZO0FBQ1ZxRCxFQUFBQSxZQUFZO0FBQ1pyRCxFQUFBQSxNQUFNLENBQUN3QyxnQkFBUCxDQUF3QixhQUF4QixFQUF1QyxVQUFDaUIsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsY0FBTixFQUFYO0FBQUEsR0FBdkM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb2NrZXRDb250cm9sbGVyIGZyb20gXCIuLi8uLi9zcmMvc29ja2V0Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzQ2FudmFzXCIpO1xuY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzQ29udHJvbHNcIik7XG5jb25zdCBjb2xvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianNDb2xvclwiKTtcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxubGV0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjtcblxuY2FudmFzLndpZHRoID0gNDUwO1xuY2FudmFzLmhlaWdodCA9IDQ1MDtcblxuY3R4LmxpbmVXaWR0aCA9IDIuNTtcbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5jdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG5jdHguZmlsbFN0eWxlID0gSU5JVElBTF9DT0xPUjtcblxubGV0IHBhaW50aW5nID0gZmFsc2U7XG5sZXQgZmlsbGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzdGFydFBhaW50aW5nKGUpIHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZIH0pO1xuICBwYWludGluZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHN0b3BQYWludGluZygpIHtcbiAgcGFpbnRpbmcgPSBmYWxzZTtcbn1cblxuY29uc3Qgc3Ryb2tlUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5saW5lVG8oeCwgeSk7XG4gIGN0eC5zdHJva2UoKTtcbn07XG5cbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcbiAgaWYgKCFmaWxsaW5nKSB7XG4gICAgY29uc3QgeCA9IGUub2Zmc2V0WDtcbiAgICBjb25zdCB5ID0gZS5vZmZzZXRZO1xuICAgIGlmIChwYWludGluZykge1xuICAgICAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zdHJva2VQYXRoLCB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGNvbG9yOiBjdHguc3Ryb2tlU3R5bGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ29sb3JDbGljaygpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGhpcztcbiAgY29uc3QgY29sb3IgPSB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImNvbnRyb2xzX19jb2xvci0tY2xpY2tcIik7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJjb250cm9sc19fY29sb3ItLWNsaWNrXCIpO1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb2RlQ2xpY2soKSB7XG4gIGlmIChmaWxsaW5nKSB7XG4gICAgZmlsbGluZyA9IGZhbHNlO1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJGaWxsXCI7XG4gIH0gZWxzZSB7XG4gICAgZmlsbGluZyA9IHRydWU7XG4gICAgbW9kZS5pbm5lclRleHQgPSBcIlBhaW50XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbCgpIHtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNhbnZhc0NsaWNrKCkge1xuICBpZiAoZmlsbGluZykge1xuICAgIGZpbGwoKTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuZmlsbCwgeyBjb2xvcjogY3R4LmZpbGxTdHlsZSB9KTtcbiAgfVxufVxuXG5mb3IgKGNvbnN0IGNvbG9yIG9mIGNvbG9ycykgY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNvbG9yQ2xpY2spO1xuXG5pZiAobW9kZSkgbW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTW9kZUNsaWNrKTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUJlZ2FuUGF0aCA9ICh7IHgsIHkgfSkgPT4ge1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oeCwgeSk7XG59O1xuZXhwb3J0IGNvbnN0IGhhbmRsZVN0cm9rZWRQYXRoID0gKHsgeCwgeSwgY29sb3IgPSBudWxsIH0pID0+IHtcbiAgY29uc3QgY3VycmVudENvbG9yID0gY3R4LnN0cm9rZVN0eWxlO1xuICBpZiAoY29sb3IgIT09IG51bGwpIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICBzdHJva2VQYXRoKHgsIHkpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjdXJyZW50Q29sb3I7XG59O1xuZXhwb3J0IGNvbnN0IGhhbmRsZUZpbGxlZCA9ICh7IGNvbG9yID0gbnVsbCB9KSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRDb2xvciA9IGN0eC5maWxsU3R5bGU7XG4gIGlmIChjb2xvciAhPT0gbnVsbCkgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBmaWxsKCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjdXJyZW50Q29sb3I7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZUNhbnZhcyA9ICgpID0+IHtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmFibGVDYW52YXMgPSAoKSA9PiB7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XG59O1xuXG5leHBvcnQgY29uc3QgaGlkZUNhbnZhc0NvbnRyb2xzID0gKCkgPT4gKGNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93Q2FudmFzQ29udHJvbHMgPSAoKSA9PiAoY29udHJvbHMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIik7XG5cbmlmIChjYW52YXMpIHtcbiAgZW5hYmxlQ2FudmFzKCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbn1cbiJdfQ==
},{"../../src/socketController":9,"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleLeaderNotif = exports.handleGameStarted = exports.handlePlayerUpdate = void 0;

var _paint = require("./paint");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var board = document.getElementById("jsPBoard");

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

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;

var handleGameStarted = function handleGameStarted() {
  (0, _paint.disableCanvas)();
  (0, _paint.hideCanvasControls)();
};

exports.handleGameStarted = handleGameStarted;

var handleLeaderNotif = function handleLeaderNotif(_ref2) {
  var word = _ref2.word;
  (0, _paint.enableCanvas)();
  (0, _paint.showCanvasControls)();
};

exports.handleLeaderNotif = handleLeaderNotif;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJwbGF5ZXIiLCJwbGF5ZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsIm5pY2tuYW1lIiwicG9pbnRzIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVQbGF5ZXJVcGRhdGUiLCJzb2NrZXRzIiwiaGFuZGxlR2FtZVN0YXJ0ZWQiLCJoYW5kbGVMZWFkZXJOb3RpZiIsIndvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFPQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFkOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBYTtBQUM5QkosRUFBQUEsS0FBSyxDQUFDSyxTQUFOLEdBQWtCLEVBQWxCOztBQUQ4Qiw2Q0FFVEQsT0FGUztBQUFBOztBQUFBO0FBRTlCLHdEQUE4QjtBQUFBLFVBQW5CRSxNQUFtQjtBQUM1QixVQUFNQyxhQUFhLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixNQUF2QixDQUF0QjtBQUNBRCxNQUFBQSxhQUFhLENBQUNFLFNBQWQsYUFBNkJILE1BQU0sQ0FBQ0ksUUFBcEMsZUFBaURKLE1BQU0sQ0FBQ0ssTUFBeEQ7QUFDQVgsTUFBQUEsS0FBSyxDQUFDWSxXQUFOLENBQWtCTCxhQUFsQjtBQUNEO0FBTjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPL0IsQ0FQRDs7QUFTTyxJQUFNTSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUJYLFVBQVUsQ0FBQ1csT0FBRCxDQUEzQjtBQUFBLENBQTNCOzs7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ3JDO0FBQ0E7QUFDRCxDQUhNOzs7O0FBSUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixRQUFjO0FBQUEsTUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQzdDO0FBQ0E7QUFDRCxDQUhNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZGlzYWJsZUNhbnZhcyxcbiAgZW5hYmxlQ2FudmFzLFxuICBoaWRlQ2FudmFzQ29udHJvbHMsXG4gIHNob3dDYW52YXNDb250cm9scyxcbn0gZnJvbSBcIi4vcGFpbnRcIjtcblxuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUEJvYXJkXCIpO1xuXG5jb25zdCBhZGRQbGF5ZXJzID0gKHBsYXllcnMpID0+IHtcbiAgYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xuICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwbGF5ZXJFbGVtZW50LmlubmVyVGV4dCA9IGAke3BsYXllci5uaWNrbmFtZX06ICR7cGxheWVyLnBvaW50c31gO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKHBsYXllckVsZW1lbnQpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlUGxheWVyVXBkYXRlID0gKHsgc29ja2V0cyB9KSA9PiBhZGRQbGF5ZXJzKHNvY2tldHMpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVTdGFydGVkID0gKCkgPT4ge1xuICBkaXNhYmxlQ2FudmFzKCk7XG4gIGhpZGVDYW52YXNDb250cm9scygpO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVMZWFkZXJOb3RpZiA9ICh7IHdvcmQgfSkgPT4ge1xuICBlbmFibGVDYW52YXMoKTtcbiAgc2hvd0NhbnZhc0NvbnRyb2xzKCk7XG59O1xuIl19
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
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01zZyIsImJlZ2FuUGF0aCIsImhhbmRsZUJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJmaWxsZWQiLCJoYW5kbGVGaWxsZWQiLCJwbGF5ZXJVcGRhdGUiLCJoYW5kbGVQbGF5ZXJVcGRhdGUiLCJnYW1lU3RhcnRlZCIsImhhbmRsZUdhbWVTdGFydGVkIiwibGVhZGVyTm90aWYiLCJoYW5kbGVMZWFkZXJOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQU1BLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFhO0FBQ3RDLGdCQUFtQkMsTUFBbkI7QUFBQSxNQUFRQyxNQUFSLFdBQVFBLE1BQVI7QUFDQUwsRUFBQUEsTUFBTSxHQUFHRyxPQUFUO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNFLE9BQWpCLEVBQTBCQyw0QkFBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0ksWUFBakIsRUFBK0JDLGlDQUEvQjtBQUNBVixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDTSxNQUFqQixFQUF5QkMsa0JBQXpCO0FBQ0FaLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNRLFNBQWpCLEVBQTRCQyxzQkFBNUI7QUFDQWQsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1UsV0FBakIsRUFBOEJDLHdCQUE5QjtBQUNBaEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1ksTUFBakIsRUFBeUJDLG1CQUF6QjtBQUNBbEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2MsWUFBakIsRUFBK0JDLDJCQUEvQjtBQUNBcEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2dCLFdBQWpCLEVBQThCQywwQkFBOUI7QUFDQXRCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNrQixXQUFqQixFQUE4QkMsMEJBQTlCO0FBQ0QsQ0FaTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5ld01zZyB9IGZyb20gXCIuL2NoYXRcIjtcbmltcG9ydCB7IGhhbmRsZURpc2Nvbm5lY3RlZCwgaGFuZGxlTmV3VXNlciB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IGhhbmRsZUJlZ2FuUGF0aCwgaGFuZGxlRmlsbGVkLCBoYW5kbGVTdHJva2VkUGF0aCB9IGZyb20gXCIuL3BhaW50XCI7XG5pbXBvcnQge1xuICBoYW5kbGVHYW1lU3RhcnRlZCxcbiAgaGFuZGxlTGVhZGVyTm90aWYsXG4gIGhhbmRsZVBsYXllclVwZGF0ZSxcbn0gZnJvbSBcIi4vcGxheWVyc1wiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgc29ja2V0ID0gYVNvY2tldDtcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XG4gIHNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNc2cpO1xuICBzb2NrZXQub24oZXZlbnRzLmJlZ2FuUGF0aCwgaGFuZGxlQmVnYW5QYXRoKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5zdHJva2VkUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGgpO1xuICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5wbGF5ZXJVcGRhdGUsIGhhbmRsZVBsYXllclVwZGF0ZSk7XG4gIHNvY2tldC5vbihldmVudHMuZ2FtZVN0YXJ0ZWQsIGhhbmRsZUdhbWVTdGFydGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5sZWFkZXJOb3RpZiwgaGFuZGxlTGVhZGVyTm90aWYpO1xufTtcbiJdfQ==
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
  leaderNotif: "leaderNotif"
};
var _default = events;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6WyJldmVudHMiLCJzZXROaWNrbmFtZSIsIm5ld1VzZXIiLCJsb2dnZWRJbiIsInVuYXV0aGVudGljYXRlZCIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0ZWQiLCJzZW5kTXNnIiwibmV3TXNnIiwiYmVnaW5QYXRoIiwic3Ryb2tlUGF0aCIsImJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiZmlsbCIsImZpbGxlZCIsInBsYXllclVwZGF0ZSIsImdhbWVTdGFydGVkIiwibGVhZGVyTm90aWYiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxXQUFXLEVBQUUsYUFEQTtBQUViQyxFQUFBQSxPQUFPLEVBQUUsU0FGSTtBQUdiQyxFQUFBQSxRQUFRLEVBQUUsVUFIRztBQUliQyxFQUFBQSxlQUFlLEVBQUUsaUJBSko7QUFLYkMsRUFBQUEsVUFBVSxFQUFFLFlBTEM7QUFNYkMsRUFBQUEsWUFBWSxFQUFFLGNBTkQ7QUFPYkMsRUFBQUEsT0FBTyxFQUFFLFNBUEk7QUFRYkMsRUFBQUEsTUFBTSxFQUFFLFFBUks7QUFTYkMsRUFBQUEsU0FBUyxFQUFFLFdBVEU7QUFVYkMsRUFBQUEsVUFBVSxFQUFFLFlBVkM7QUFXYkMsRUFBQUEsU0FBUyxFQUFFLFdBWEU7QUFZYkMsRUFBQUEsV0FBVyxFQUFFLGFBWkE7QUFhYkMsRUFBQUEsSUFBSSxFQUFFLE1BYk87QUFjYkMsRUFBQUEsTUFBTSxFQUFFLFFBZEs7QUFlYkMsRUFBQUEsWUFBWSxFQUFFLGNBZkQ7QUFnQmJDLEVBQUFBLFdBQVcsRUFBRSxhQWhCQTtBQWlCYkMsRUFBQUEsV0FBVyxFQUFFO0FBakJBLENBQWY7ZUFvQmVqQixNIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXZlbnRzID0ge1xuICBzZXROaWNrbmFtZTogXCJzZXROaWNrbmFtZVwiLFxuICBuZXdVc2VyOiBcIm5ld1VzZXJcIixcbiAgbG9nZ2VkSW46IFwibG9nZ2VkSW5cIixcbiAgdW5hdXRoZW50aWNhdGVkOiBcInVuYXV0aGVudGljYXRlZFwiLFxuICBkaXNjb25uZWN0OiBcImRpc2Nvbm5lY3RcIixcbiAgZGlzY29ubmVjdGVkOiBcImRpc2Nvbm5lY3RlZFwiLFxuICBzZW5kTXNnOiBcInNlbmRNc2dcIixcbiAgbmV3TXNnOiBcIm5ld01zZ1wiLFxuICBiZWdpblBhdGg6IFwiYmVnaW5QYXRoXCIsXG4gIHN0cm9rZVBhdGg6IFwic3Ryb2tlUGF0aFwiLFxuICBiZWdhblBhdGg6IFwiYmVnYW5QYXRoXCIsXG4gIHN0cm9rZWRQYXRoOiBcInN0cm9rZWRQYXRoXCIsXG4gIGZpbGw6IFwiZmlsbFwiLFxuICBmaWxsZWQ6IFwiZmlsbGVkXCIsXG4gIHBsYXllclVwZGF0ZTogXCJwbGF5ZXJVcGRhdGVcIixcbiAgZ2FtZVN0YXJ0ZWQ6IFwiZ2FtZVN0YXJ0ZWRcIixcbiAgbGVhZGVyTm90aWY6IFwibGVhZGVyTm90aWZcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcbiJdfQ==
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
      var leader = chooseLeader();
      word = (0, _words.chooseWord)();
      superBroadcast(_events["default"].gameStarted);
      io.to(leader.id).emit(_events["default"].leaderNotif, {
        word: word
      });
    }
  };

  var endGame = function endGame() {
    return inProgress = false;
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
      setTimeout(function () {
        return sendPlayerUpdate();
      }, 2000);

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
    if (sockets.length == 1) endGame;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic29ja2V0cyIsIm5pY2tuYW1lcyIsImluUHJvZ3Jlc3MiLCJ3b3JkIiwiY2hvb3NlTGVhZGVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic29ja2V0Q29udHJvbGxlciIsInNvY2tldCIsImlvIiwiYnJvYWRjYXN0IiwiZXZlbnQiLCJkYXRhIiwiZW1pdCIsInN1cGVyQnJvYWRjYXN0Iiwic2VuZFBsYXllclVwZGF0ZSIsImV2ZW50cyIsInBsYXllclVwZGF0ZSIsInN0YXJ0R2FtZSIsImxlYWRlciIsImdhbWVTdGFydGVkIiwidG8iLCJpZCIsImxlYWRlck5vdGlmIiwiZW5kR2FtZSIsIm9uIiwic2V0Tmlja25hbWUiLCJuaWNrbmFtZSIsImluY2x1ZGVzIiwicHVzaCIsInBvaW50cyIsImxvZ2dlZEluIiwibmV3VXNlciIsInNldFRpbWVvdXQiLCJ1bmF1dGhlbnRpY2F0ZWQiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGVkIiwiZmlsdGVyIiwiYVNvY2tldCIsInNlbmRNc2ciLCJtZXNzYWdlIiwibmV3TXNnIiwiYmVnaW5QYXRoIiwieCIsInkiLCJiZWdhblBhdGgiLCJzdHJva2VQYXRoIiwiY29sb3IiLCJzdHJva2VkUGF0aCIsImZpbGwiLCJmaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQUlBLE9BQU8sR0FBRyxFQUFkO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLEtBQWpCO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLElBQVg7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFNSixPQUFPLENBQUNLLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JQLE9BQU8sQ0FBQ1EsTUFBbkMsQ0FBRCxDQUFiO0FBQUEsQ0FBckI7O0FBRUEsSUFBTUMs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QUFxQjtBQUFFTCxNQUFBQSxDQUFDLEVBQURBLENBQUY7QUFBS0MsTUFBQUEsQ0FBQyxFQUFEQSxDQUFMO0FBQVFHLE1BQUFBLEtBQUssRUFBTEE7QUFBUixLQUFyQixDQURrQjtBQUFBLEdBQTdCO0FBSUF2QyxFQUFBQSxNQUFNLENBQUNpQixFQUFQLENBQVVULG1CQUFPaUMsSUFBakIsRUFBdUIsaUJBQWU7QUFBQSxRQUFaRixLQUFZLFNBQVpBLEtBQVk7QUFDcENyQyxJQUFBQSxTQUFTLENBQUNNLG1CQUFPa0MsTUFBUixFQUFnQjtBQUFFSCxNQUFBQSxLQUFLLEVBQUxBO0FBQUYsS0FBaEIsQ0FBVDtBQUNELEdBRkQ7QUFHRCxDQXZERDs7ZUF5RGV4QyxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgeyBjaG9vc2VXb3JkIH0gZnJvbSBcIi4vd29yZHNcIjtcblxubGV0IHNvY2tldHMgPSBbXTtcbmxldCBuaWNrbmFtZXMgPSBbXTtcbmxldCBpblByb2dyZXNzID0gZmFsc2U7XG5sZXQgd29yZCA9IG51bGw7XG5cbmNvbnN0IGNob29zZUxlYWRlciA9ICgpID0+IHNvY2tldHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc29ja2V0cy5sZW5ndGgpXTtcblxuY29uc3Qgc29ja2V0Q29udHJvbGxlciA9IChzb2NrZXQsIGlvKSA9PiB7XG4gIGNvbnN0IGJyb2FkY2FzdCA9IChldmVudCwgZGF0YSkgPT4gc29ja2V0LmJyb2FkY2FzdC5lbWl0KGV2ZW50LCBkYXRhKTtcbiAgY29uc3Qgc3VwZXJCcm9hZGNhc3QgPSAoZXZlbnQsIGRhdGEpID0+IGlvLmVtaXQoZXZlbnQsIGRhdGEpO1xuICBjb25zdCBzZW5kUGxheWVyVXBkYXRlID0gKCkgPT5cbiAgICBzdXBlckJyb2FkY2FzdChldmVudHMucGxheWVyVXBkYXRlLCB7IHNvY2tldHMgfSk7XG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBpZiAoaW5Qcm9ncmVzcyA9PSBmYWxzZSkge1xuICAgICAgaW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICBjb25zdCBsZWFkZXIgPSBjaG9vc2VMZWFkZXIoKTtcbiAgICAgIHdvcmQgPSBjaG9vc2VXb3JkKCk7XG4gICAgICBzdXBlckJyb2FkY2FzdChldmVudHMuZ2FtZVN0YXJ0ZWQpO1xuICAgICAgaW8udG8obGVhZGVyLmlkKS5lbWl0KGV2ZW50cy5sZWFkZXJOb3RpZiwgeyB3b3JkIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZW5kR2FtZSA9ICgpID0+IChpblByb2dyZXNzID0gZmFsc2UpO1xuXG4gIHNvY2tldC5vbihldmVudHMuc2V0Tmlja25hbWUsICh7IG5pY2tuYW1lIH0pID0+IHtcbiAgICBpZiAoIW5pY2tuYW1lcy5pbmNsdWRlcyhuaWNrbmFtZSkpIHtcbiAgICAgIHNvY2tldC5uaWNrbmFtZSA9IG5pY2tuYW1lO1xuICAgICAgbmlja25hbWVzLnB1c2gobmlja25hbWUpO1xuICAgICAgc29ja2V0cy5wdXNoKHsgaWQ6IHNvY2tldC5pZCwgcG9pbnRzOiAwLCBuaWNrbmFtZTogbmlja25hbWUgfSk7XG4gICAgICBzb2NrZXQuZW1pdChldmVudHMubG9nZ2VkSW4pO1xuICAgICAgYnJvYWRjYXN0KGV2ZW50cy5uZXdVc2VyLCB7IG5pY2tuYW1lIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZW5kUGxheWVyVXBkYXRlKCksIDIwMDApO1xuICAgICAgaWYgKHNvY2tldHMubGVuZ3RoID4gMSkge1xuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc29ja2V0LmVtaXQoZXZlbnRzLnVuYXV0aGVudGljYXRlZCk7XG4gICAgfVxuICB9KTtcblxuICBzb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3QsICgpID0+IHtcbiAgICBicm9hZGNhc3QoZXZlbnRzLmRpc2Nvbm5lY3RlZCwgeyBuaWNrbmFtZTogc29ja2V0Lm5pY2tuYW1lIH0pO1xuICAgIHNvY2tldHMgPSBzb2NrZXRzLmZpbHRlcigoYVNvY2tldCkgPT4gYVNvY2tldC5pZCAhPSBzb2NrZXQuaWQpO1xuICAgIG5pY2tuYW1lcyA9IG5pY2tuYW1lcy5maWx0ZXIoKG5pY2tuYW1lKSA9PiBuaWNrbmFtZSAhPSBzb2NrZXQubmlja25hbWUpO1xuICAgIGlmIChzb2NrZXRzLmxlbmd0aCA9PSAxKSBlbmRHYW1lO1xuICAgIHNlbmRQbGF5ZXJVcGRhdGUoKTtcbiAgfSk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5zZW5kTXNnLCAoeyBtZXNzYWdlIH0pID0+IHtcbiAgICBicm9hZGNhc3QoZXZlbnRzLm5ld01zZywgeyBtZXNzYWdlLCBuaWNrbmFtZTogc29ja2V0Lm5pY2tuYW1lIH0pO1xuICB9KTtcblxuICBzb2NrZXQub24oZXZlbnRzLmJlZ2luUGF0aCwgKHsgeCwgeSB9KSA9PlxuICAgIGJyb2FkY2FzdChldmVudHMuYmVnYW5QYXRoLCB7IHgsIHkgfSlcbiAgKTtcblxuICBzb2NrZXQub24oZXZlbnRzLnN0cm9rZVBhdGgsICh7IHgsIHksIGNvbG9yIH0pID0+XG4gICAgYnJvYWRjYXN0KGV2ZW50cy5zdHJva2VkUGF0aCwgeyB4LCB5LCBjb2xvciB9KVxuICApO1xuXG4gIHNvY2tldC5vbihldmVudHMuZmlsbCwgKHsgY29sb3IgfSkgPT4ge1xuICAgIGJyb2FkY2FzdChldmVudHMuZmlsbGVkLCB7IGNvbG9yIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNvY2tldENvbnRyb2xsZXI7XG4iXX0=
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