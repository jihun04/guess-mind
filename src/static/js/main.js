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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMWY0YTU1NDEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG4iXX0=
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
},{"../../src/socketController":8,"./sockets":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var _paint = require("./paint");

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
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01zZyIsImJlZ2FuUGF0aCIsImhhbmRsZUJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJmaWxsZWQiLCJoYW5kbGVGaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBYTtBQUN0QyxnQkFBbUJDLE1BQW5CO0FBQUEsTUFBUUMsTUFBUixXQUFRQSxNQUFSO0FBQ0FMLEVBQUFBLE1BQU0sR0FBR0csT0FBVDtBQUNBSCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDRSxPQUFqQixFQUEwQkMsNEJBQTFCO0FBQ0FSLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNJLFlBQWpCLEVBQStCQyxpQ0FBL0I7QUFDQVYsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ00sTUFBakIsRUFBeUJDLGtCQUF6QjtBQUNBWixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDUSxTQUFqQixFQUE0QkMsc0JBQTVCO0FBQ0FkLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNVLFdBQWpCLEVBQThCQyx3QkFBOUI7QUFDQWhCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNZLE1BQWpCLEVBQXlCQyxtQkFBekI7QUFDRCxDQVRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3TXNnIH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgaGFuZGxlRGlzY29ubmVjdGVkLCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVGaWxsZWQsIGhhbmRsZVN0cm9rZWRQYXRoIH0gZnJvbSBcIi4vcGFpbnRcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XG4gIHNvY2tldCA9IGFTb2NrZXQ7XG4gIHNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG4gIHNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0ZWQpO1xuICBzb2NrZXQub24oZXZlbnRzLm5ld01zZywgaGFuZGxlTmV3TXNnKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5iZWdhblBhdGgsIGhhbmRsZUJlZ2FuUGF0aCk7XG4gIHNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5maWxsZWQsIGhhbmRsZUZpbGxlZCk7XG59O1xuIl19
},{"./chat":1,"./notifications":4,"./paint":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var events = {
  setNickname: "setNickname",
  newUser: "newUser",
  disconnect: "disconnect",
  disconnected: "disconnected",
  sendMsg: "sendMsg",
  newMsg: "newMsg",
  beginPath: "beginPath",
  strokePath: "strokePath",
  beganPath: "beganPath",
  strokedPath: "strokedPath",
  fill: "fill",
  filled: "filled"
};
var _default = events;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6WyJldmVudHMiLCJzZXROaWNrbmFtZSIsIm5ld1VzZXIiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGVkIiwic2VuZE1zZyIsIm5ld01zZyIsImJlZ2luUGF0aCIsInN0cm9rZVBhdGgiLCJiZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImZpbGwiLCJmaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxXQUFXLEVBQUUsYUFEQTtBQUViQyxFQUFBQSxPQUFPLEVBQUUsU0FGSTtBQUdiQyxFQUFBQSxVQUFVLEVBQUUsWUFIQztBQUliQyxFQUFBQSxZQUFZLEVBQUUsY0FKRDtBQUtiQyxFQUFBQSxPQUFPLEVBQUUsU0FMSTtBQU1iQyxFQUFBQSxNQUFNLEVBQUUsUUFOSztBQU9iQyxFQUFBQSxTQUFTLEVBQUUsV0FQRTtBQVFiQyxFQUFBQSxVQUFVLEVBQUUsWUFSQztBQVNiQyxFQUFBQSxTQUFTLEVBQUUsV0FURTtBQVViQyxFQUFBQSxXQUFXLEVBQUUsYUFWQTtBQVdiQyxFQUFBQSxJQUFJLEVBQUUsTUFYTztBQVliQyxFQUFBQSxNQUFNLEVBQUU7QUFaSyxDQUFmO2VBZWVaLE0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBldmVudHMgPSB7XG4gIHNldE5pY2tuYW1lOiBcInNldE5pY2tuYW1lXCIsXG4gIG5ld1VzZXI6IFwibmV3VXNlclwiLFxuICBkaXNjb25uZWN0OiBcImRpc2Nvbm5lY3RcIixcbiAgZGlzY29ubmVjdGVkOiBcImRpc2Nvbm5lY3RlZFwiLFxuICBzZW5kTXNnOiBcInNlbmRNc2dcIixcbiAgbmV3TXNnOiBcIm5ld01zZ1wiLFxuICBiZWdpblBhdGg6IFwiYmVnaW5QYXRoXCIsXG4gIHN0cm9rZVBhdGg6IFwic3Ryb2tlUGF0aFwiLFxuICBiZWdhblBhdGg6IFwiYmVnYW5QYXRoXCIsXG4gIHN0cm9rZWRQYXRoOiBcInN0cm9rZWRQYXRoXCIsXG4gIGZpbGw6IFwiZmlsbFwiLFxuICBmaWxsZWQ6IFwiZmlsbGVkXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG4iXX0=
},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = _interopRequireDefault(require("./events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var socketController = function socketController(socket) {
  var broadcast = function broadcast(event, data) {
    return socket.broadcast.emit(event, data);
  };

  socket.on(_events["default"].setNickname, function (_ref) {
    var nickname = _ref.nickname;
    socket.nickname = nickname;
    broadcast(_events["default"].newUser, {
      nickname: nickname
    });
  });
  socket.on(_events["default"].disconnect, function () {
    if (socket.nickname) {
      broadcast(_events["default"].disconnected, {
        nickname: socket.nickname
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic29ja2V0Q29udHJvbGxlciIsInNvY2tldCIsImJyb2FkY2FzdCIsImV2ZW50IiwiZGF0YSIsImVtaXQiLCJvbiIsImV2ZW50cyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJuZXdVc2VyIiwiZGlzY29ubmVjdCIsImRpc2Nvbm5lY3RlZCIsInNlbmRNc2ciLCJtZXNzYWdlIiwibmV3TXNnIiwiYmVnaW5QYXRoIiwieCIsInkiLCJiZWdhblBhdGgiLCJzdHJva2VQYXRoIiwiY29sb3IiLCJzdHJva2VkUGF0aCIsImZpbGwiLCJmaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsTUFBRCxFQUFZO0FBQ25DLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBUUMsSUFBUjtBQUFBLFdBQWlCSCxNQUFNLENBQUNDLFNBQVAsQ0FBaUJHLElBQWpCLENBQXNCRixLQUF0QixFQUE2QkMsSUFBN0IsQ0FBakI7QUFBQSxHQUFsQjs7QUFFQUgsRUFBQUEsTUFBTSxDQUFDSyxFQUFQLENBQVVDLG1CQUFPQyxXQUFqQixFQUE4QixnQkFBa0I7QUFBQSxRQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDOUNSLElBQUFBLE1BQU0sQ0FBQ1EsUUFBUCxHQUFrQkEsUUFBbEI7QUFDQVAsSUFBQUEsU0FBUyxDQUFDSyxtQkFBT0csT0FBUixFQUFpQjtBQUFFRCxNQUFBQSxRQUFRLEVBQVJBO0FBQUYsS0FBakIsQ0FBVDtBQUNELEdBSEQ7QUFLQVIsRUFBQUEsTUFBTSxDQUFDSyxFQUFQLENBQVVDLG1CQUFPSSxVQUFqQixFQUE2QixZQUFNO0FBQ2pDLFFBQUlWLE1BQU0sQ0FBQ1EsUUFBWCxFQUFxQjtBQUNuQlAsTUFBQUEsU0FBUyxDQUFDSyxtQkFBT0ssWUFBUixFQUFzQjtBQUFFSCxRQUFBQSxRQUFRLEVBQUVSLE1BQU0sQ0FBQ1E7QUFBbkIsT0FBdEIsQ0FBVDtBQUNEO0FBQ0YsR0FKRDtBQU1BUixFQUFBQSxNQUFNLENBQUNLLEVBQVAsQ0FBVUMsbUJBQU9NLE9BQWpCLEVBQTBCLGlCQUFpQjtBQUFBLFFBQWRDLE9BQWMsU0FBZEEsT0FBYztBQUN6Q1osSUFBQUEsU0FBUyxDQUFDSyxtQkFBT1EsTUFBUixFQUFnQjtBQUFFRCxNQUFBQSxPQUFPLEVBQVBBLE9BQUY7QUFBV0wsTUFBQUEsUUFBUSxFQUFFUixNQUFNLENBQUNRO0FBQTVCLEtBQWhCLENBQVQ7QUFDRCxHQUZEO0FBSUFSLEVBQUFBLE1BQU0sQ0FBQ0ssRUFBUCxDQUFVQyxtQkFBT1MsU0FBakIsRUFBNEI7QUFBQSxRQUFHQyxDQUFILFNBQUdBLENBQUg7QUFBQSxRQUFNQyxDQUFOLFNBQU1BLENBQU47QUFBQSxXQUMxQmhCLFNBQVMsQ0FBQ0ssbUJBQU9ZLFNBQVIsRUFBbUI7QUFBRUYsTUFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLE1BQUFBLENBQUMsRUFBREE7QUFBTCxLQUFuQixDQURpQjtBQUFBLEdBQTVCO0FBSUFqQixFQUFBQSxNQUFNLENBQUNLLEVBQVAsQ0FBVUMsbUJBQU9hLFVBQWpCLEVBQTZCO0FBQUEsUUFBR0gsQ0FBSCxTQUFHQSxDQUFIO0FBQUEsUUFBTUMsQ0FBTixTQUFNQSxDQUFOO0FBQUEsUUFBU0csS0FBVCxTQUFTQSxLQUFUO0FBQUEsV0FDM0JuQixTQUFTLENBQUNLLG1CQUFPZSxXQUFSLEVBQXFCO0FBQUVMLE1BQUFBLENBQUMsRUFBREEsQ0FBRjtBQUFLQyxNQUFBQSxDQUFDLEVBQURBLENBQUw7QUFBUUcsTUFBQUEsS0FBSyxFQUFMQTtBQUFSLEtBQXJCLENBRGtCO0FBQUEsR0FBN0I7QUFJQXBCLEVBQUFBLE1BQU0sQ0FBQ0ssRUFBUCxDQUFVQyxtQkFBT2dCLElBQWpCLEVBQXVCLGlCQUFlO0FBQUEsUUFBWkYsS0FBWSxTQUFaQSxLQUFZO0FBQ3BDbkIsSUFBQUEsU0FBUyxDQUFDSyxtQkFBT2lCLE1BQVIsRUFBZ0I7QUFBRUgsTUFBQUEsS0FBSyxFQUFMQTtBQUFGLEtBQWhCLENBQVQ7QUFDRCxHQUZEO0FBR0QsQ0E3QkQ7O2VBK0JlckIsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuXG5jb25zdCBzb2NrZXRDb250cm9sbGVyID0gKHNvY2tldCkgPT4ge1xuICBjb25zdCBicm9hZGNhc3QgPSAoZXZlbnQsIGRhdGEpID0+IHNvY2tldC5icm9hZGNhc3QuZW1pdChldmVudCwgZGF0YSk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5zZXROaWNrbmFtZSwgKHsgbmlja25hbWUgfSkgPT4ge1xuICAgIHNvY2tldC5uaWNrbmFtZSA9IG5pY2tuYW1lO1xuICAgIGJyb2FkY2FzdChldmVudHMubmV3VXNlciwgeyBuaWNrbmFtZSB9KTtcbiAgfSk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0LCAoKSA9PiB7XG4gICAgaWYgKHNvY2tldC5uaWNrbmFtZSkge1xuICAgICAgYnJvYWRjYXN0KGV2ZW50cy5kaXNjb25uZWN0ZWQsIHsgbmlja25hbWU6IHNvY2tldC5uaWNrbmFtZSB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHNvY2tldC5vbihldmVudHMuc2VuZE1zZywgKHsgbWVzc2FnZSB9KSA9PiB7XG4gICAgYnJvYWRjYXN0KGV2ZW50cy5uZXdNc2csIHsgbWVzc2FnZSwgbmlja25hbWU6IHNvY2tldC5uaWNrbmFtZSB9KTtcbiAgfSk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5iZWdpblBhdGgsICh7IHgsIHkgfSkgPT5cbiAgICBicm9hZGNhc3QoZXZlbnRzLmJlZ2FuUGF0aCwgeyB4LCB5IH0pXG4gICk7XG5cbiAgc29ja2V0Lm9uKGV2ZW50cy5zdHJva2VQYXRoLCAoeyB4LCB5LCBjb2xvciB9KSA9PlxuICAgIGJyb2FkY2FzdChldmVudHMuc3Ryb2tlZFBhdGgsIHsgeCwgeSwgY29sb3IgfSlcbiAgKTtcblxuICBzb2NrZXQub24oZXZlbnRzLmZpbGwsICh7IGNvbG9yIH0pID0+IHtcbiAgICBicm9hZGNhc3QoZXZlbnRzLmZpbGxlZCwgeyBjb2xvciB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzb2NrZXRDb250cm9sbGVyO1xuIl19
},{"./events":7}]},{},[2])