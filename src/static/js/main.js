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
},{"./sockets":6}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfN2E5ZjBmYmEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG4iXX0=
},{"./chat":1,"./login":3,"./paint":5,"./sockets":6}],3:[function(require,module,exports){
"use strict";

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
  (0, _sockets.initSockets)(socket);
  body.className = LOGGED_IN;
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
  localStorage.setItem(NICKNAME, value);
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwiTklDS05BTUUiLCJMT0dHRURfT1VUIiwiTE9HR0VEX0lOIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9nSW4iLCJzb2NrZXQiLCJpbyIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJzZXROaWNrbmFtZSIsImNsYXNzTmFtZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDRCxJQUF0QjtBQUNBLElBQU1FLFNBQVMsR0FBR0QsUUFBUSxDQUFDRSxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQUEsSUFDRUMsU0FBUyxHQUFHLFVBRGQ7QUFHQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsUUFBckIsQ0FBakI7O0FBRUEsSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0gsUUFBRCxFQUFjO0FBQzFCLE1BQU1JLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxXQUExQixFQUF1QztBQUFFVCxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBdkM7QUFDQSw0QkFBWUksTUFBWjtBQUNBWCxFQUFBQSxJQUFJLENBQUNpQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNELENBTEQ7O0FBT0EsSUFBSUMsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCUCxFQUFBQSxJQUFJLENBQUNpQixTQUFMLEdBQWlCWixVQUFqQjtBQUNELENBRkQsTUFFTztBQUNMSyxFQUFBQSxLQUFLLENBQUNILFFBQUQsQ0FBTDtBQUNEOztBQUVELElBQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQzVCQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxLQUFLLEdBQUduQixTQUFTLENBQUNvQixhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFDQSxNQUFRQyxLQUFSLEdBQWtCRixLQUFsQixDQUFRRSxLQUFSO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQWYsRUFBQUEsWUFBWSxDQUFDZ0IsT0FBYixDQUFxQnBCLFFBQXJCLEVBQStCbUIsS0FBL0I7QUFDQWIsRUFBQUEsS0FBSyxDQUFDYSxLQUFELENBQUw7QUFDRCxDQVBEOztBQVNBLElBQUlyQixTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDdUIsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNQLGdCQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFNvY2tldHMgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xuXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiLFxuICBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5cbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xuXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xuICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XG4gIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgbmlja25hbWUgfSk7XG4gIGluaXRTb2NrZXRzKHNvY2tldCk7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xufVxuXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xufSBlbHNlIHtcbiAgbG9nSW4obmlja25hbWUpO1xufVxuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xuICBsb2dJbih2YWx1ZSk7XG59XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
},{"./sockets":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwiZmlyZU5vdGlmaWNhdGlvbiIsInRleHQiLCJjb2xvciIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwiaGFuZGxlTmV3VXNlciIsIm5pY2tuYW1lIiwiaGFuZGxlRGlzY29ubmVjdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0QsSUFBdEI7O0FBRUEsSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDeEMsTUFBTUMsWUFBWSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFDQUQsRUFBQUEsWUFBWSxDQUFDRSxTQUFiLEdBQXlCSixJQUF6QjtBQUNBRSxFQUFBQSxZQUFZLENBQUNHLEtBQWIsQ0FBbUJDLGVBQW5CLEdBQXFDTCxLQUFyQztBQUNBQyxFQUFBQSxZQUFZLENBQUNLLFNBQWIsR0FBeUIsY0FBekI7QUFDQVYsRUFBQUEsSUFBSSxDQUFDVyxXQUFMLENBQWlCTixZQUFqQjtBQUNELENBTkQ7O0FBUU8sSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM3Q1gsRUFBQUEsZ0JBQWdCLFdBQUlXLFFBQUosb0JBQTZCLHlCQUE3QixDQUFoQjtBQUNELENBRk07Ozs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLFFBQWtCO0FBQUEsTUFBZkQsUUFBZSxTQUFmQSxRQUFlO0FBQ2xEWCxFQUFBQSxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsd0JBQTNCLENBQWhCO0FBQ0QsQ0FGTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG5jb25zdCBmaXJlTm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xuICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3VXNlciA9ICh7IG5pY2tuYW1lIH0pID0+IHtcbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBqb2luZWQhYCwgXCJyZ2JhKDc2LCAyMTcsIDEwMCwgMC41KVwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVEaXNjb25uZWN0ZWQgPSAoeyBuaWNrbmFtZSB9KSA9PiB7XG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3QgbGVmdCFgLCBcInJnYmEoMjU1LCA1OSwgNDgsIDAuNSlcIilcbn07Il19
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

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
        y: y
      });
    } else {}
  }
}

function handleColorClick() {
  var _this = this;

  var color = this.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  (0, _sockets.getSocket)().emit(window.events.changeColor, {
    color: color
  });
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

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
      y = _ref2.y;
  return strokePath(x, y);
};

exports.handleStrokedPath = handleStrokedPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb2xvcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW9kZSIsImN0eCIsImdldENvbnRleHQiLCJJTklUSUFMX0NPTE9SIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5lV2lkdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwicGFpbnRpbmciLCJmaWxsaW5nIiwic3RhcnRQYWludGluZyIsImUiLCJiZWdpblBhdGgiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwieCIsIm9mZnNldFgiLCJ5Iiwib2Zmc2V0WSIsInN0b3BQYWludGluZyIsInN0cm9rZVBhdGgiLCJsaW5lVG8iLCJzdHJva2UiLCJvbk1vdXNlTW92ZSIsImhhbmRsZUNvbG9yQ2xpY2siLCJjb2xvciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhbmdlQ29sb3IiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vZGVDbGljayIsImlubmVyVGV4dCIsImhhbmRsZUNhbnZhc0NsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUJlZ2FuUGF0aCIsIm1vdmVUbyIsImhhbmRsZVN0cm9rZWRQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUVBLElBQU1JLEdBQUcsR0FBR04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLElB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LFFBQVJBLENBQVE7QUFDM0NuQixFQUFBQSxHQUFHLENBQUNhLFNBQUo7QUFDQWIsRUFBQUEsR0FBRyxDQUFDMkMsTUFBSixDQUFXMUIsQ0FBWCxFQUFjRSxDQUFkO0FBQ0QsQ0FITTs7OztBQUlBLElBQU15QixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBRzNCLENBQUgsU0FBR0EsQ0FBSDtBQUFBLE1BQU1FLENBQU4sU0FBTUEsQ0FBTjtBQUFBLFNBQWNHLFVBQVUsQ0FBQ0wsQ0FBRCxFQUFJRSxDQUFKLENBQXhCO0FBQUEsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjb2xvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianNDb2xvclwiKTtcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgSU5JVElBTF9DT0xPUiA9IFwiIzJjMmMyY1wiO1xuXG5jYW52YXMud2lkdGggPSA0NTA7XG5jYW52YXMuaGVpZ2h0ID0gNDUwO1xuXG5jdHgubGluZVdpZHRoID0gMi41O1xuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbmN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuY3R4LnN0cm9rZVN0eWxlID0gSU5JVElBTF9DT0xPUjtcbmN0eC5maWxsU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuXG5sZXQgcGFpbnRpbmcgPSBmYWxzZTtcbmxldCBmaWxsaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHN0YXJ0UGFpbnRpbmcoZSkge1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5iZWdpblBhdGgsIHsgeDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFkgfSk7XG4gIHBhaW50aW5nID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc3RvcFBhaW50aW5nKCkge1xuICBwYWludGluZyA9IGZhbHNlO1xufVxuXG5jb25zdCBzdHJva2VQYXRoID0gKHgsIHkpID0+IHtcbiAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgY3R4LnN0cm9rZSgpO1xufTtcblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoZSkge1xuICBpZiAoIWZpbGxpbmcpIHtcbiAgICBjb25zdCB4ID0gZS5vZmZzZXRYO1xuICAgIGNvbnN0IHkgPSBlLm9mZnNldFk7XG4gICAgaWYgKHBhaW50aW5nKSB7XG4gICAgICBzdHJva2VQYXRoKHgsIHkpO1xuICAgICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnN0cm9rZVBhdGgsIHsgeCwgeSB9KTtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDb2xvckNsaWNrKCkge1xuICBjb25zdCBjb2xvciA9IHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuY2hhbmdlQ29sb3IsIHsgY29sb3IgfSk7XG4gIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiY29udHJvbHNfX2NvbG9yLS1jbGlja1wiKTtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsICgpID0+IHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImNvbnRyb2xzX19jb2xvci0tY2xpY2tcIik7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vZGVDbGljaygpIHtcbiAgaWYgKGZpbGxpbmcpIHtcbiAgICBmaWxsaW5nID0gZmFsc2U7XG4gICAgbW9kZS5pbm5lclRleHQgPSBcIkZpbGxcIjtcbiAgfSBlbHNlIHtcbiAgICBmaWxsaW5nID0gdHJ1ZTtcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiUGFpbnRcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDYW52YXNDbGljaygpIHtcbiAgaWYgKGZpbGxpbmcpIHtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgfVxufVxuXG5pZiAoY2FudmFzKSB7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbn1cblxuZm9yIChjb25zdCBjb2xvciBvZiBjb2xvcnMpIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDb2xvckNsaWNrKTtcblxuaWYgKG1vZGUpIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHgsIHkpO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHkgfSkgPT4gc3Ryb2tlUGF0aCh4LCB5KTtcbiJdfQ==
},{"./sockets":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var _paint = require("./paint");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnected);
  aSocket.on(events.newMsg, _chat.handleNewMsg);
  aSocket.on(events.beganPath, _paint.handleBeganPath);
  aSocket.on(events.strokedPath, _paint.handleStrokedPath);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01zZyIsImJlZ2FuUGF0aCIsImhhbmRsZUJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE9BQUQ7QUFBQSxTQUFjSCxNQUFNLEdBQUdHLE9BQXZCO0FBQUEsQ0FBckI7Ozs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRCxPQUFELEVBQWE7QUFDdEMsZ0JBQW1CRSxNQUFuQjtBQUFBLE1BQVFDLE1BQVIsV0FBUUEsTUFBUjtBQUNBSixFQUFBQSxZQUFZLENBQUNDLE9BQUQsQ0FBWjtBQUNBQSxFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDRSxPQUFsQixFQUEyQkMsNEJBQTNCO0FBQ0FOLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNJLFlBQWxCLEVBQWdDQyxpQ0FBaEM7QUFDQVIsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ00sTUFBbEIsRUFBMEJDLGtCQUExQjtBQUNBVixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDUSxTQUFsQixFQUE2QkMsc0JBQTdCO0FBQ0FaLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNVLFdBQWxCLEVBQStCQyx3QkFBL0I7QUFDRCxDQVJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3TXNnIH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgaGFuZGxlRGlzY29ubmVjdGVkLCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVTdHJva2VkUGF0aCB9IGZyb20gXCIuL3BhaW50XCI7XG5cbmxldCBzb2NrZXQgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU29ja2V0ID0gKGFTb2NrZXQpID0+IChzb2NrZXQgPSBhU29ja2V0KTtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgdXBkYXRlU29ja2V0KGFTb2NrZXQpO1xuICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcbiAgYVNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0ZWQpO1xuICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01zZyk7XG4gIGFTb2NrZXQub24oZXZlbnRzLmJlZ2FuUGF0aCwgaGFuZGxlQmVnYW5QYXRoKTtcbiAgYVNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcbn07XG4iXX0=
},{"./chat":1,"./notifications":4,"./paint":5}]},{},[2])