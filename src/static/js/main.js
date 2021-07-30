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

var appendMsg = function appendMsg(text, nickname, color, underlined) {
  var li = document.createElement("li");
  var author = document.createElement("span");
  var msgText = document.createElement("span");
  var underline = document.createElement("div");

  if (underlined) {
    console.log(underlined);
    underline.style.backgroundColor = color;
    underline.classList.add("underline");
    li.appendChild(underline);
  }

  author.innerText = "".concat(nickname, ": ");
  author.style.color = color;
  msgText.innerText = text;
  li.appendChild(author);
  li.appendChild(msgText);
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
};

var handleNewMsg = function handleNewMsg(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname,
      color = _ref.color,
      underlined = _ref.underlined;
  return appendMsg(message, nickname, color, underlined);
};

exports.handleNewMsg = handleNewMsg;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}

var disableChat = function disableChat() {
  chatInput.disabled = true;
  chatInput.style.cursor = "not-allowed";
};

exports.disableChat = disableChat;

var enableChat = function enableChat() {
  chatInput.disabled = false;
  chatInput.style.cursor = "text";
};

exports.enableChat = enableChat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImNoYXRJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRNc2ciLCJ0ZXh0Iiwibmlja25hbWUiLCJjb2xvciIsInVuZGVybGluZWQiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJhdXRob3IiLCJtc2dUZXh0IiwidW5kZXJsaW5lIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJpbm5lclRleHQiLCJzY3JvbGwiLCJzY3JvbGxIZWlnaHQiLCJoYW5kbGVTZW5kTXNnIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwibWVzc2FnZSIsImhhbmRsZU5ld01zZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNhYmxlQ2hhdCIsImRpc2FibGVkIiwiY3Vyc29yIiwiZW5hYmxlQ2hhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEI7QUFDQSxJQUFNRSxTQUFTLEdBQUdELE9BQU8sQ0FBQ0UsYUFBUixDQUFzQixPQUF0QixDQUFsQjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLFFBQVAsRUFBaUJDLEtBQWpCLEVBQXdCQyxVQUF4QixFQUF1QztBQUN2RCxNQUFNQyxFQUFFLEdBQUdWLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0EsTUFBTUMsTUFBTSxHQUFHWixRQUFRLENBQUNXLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZjtBQUNBLE1BQU1FLE9BQU8sR0FBR2IsUUFBUSxDQUFDVyxhQUFULENBQXVCLE1BQXZCLENBQWhCO0FBQ0EsTUFBTUcsU0FBUyxHQUFHZCxRQUFRLENBQUNXLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7O0FBQ0EsTUFBSUYsVUFBSixFQUFnQjtBQUNkTSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsVUFBWjtBQUNBSyxJQUFBQSxTQUFTLENBQUNHLEtBQVYsQ0FBZ0JDLGVBQWhCLEdBQWtDVixLQUFsQztBQUNBTSxJQUFBQSxTQUFTLENBQUNLLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFdBQXhCO0FBQ0FWLElBQUFBLEVBQUUsQ0FBQ1csV0FBSCxDQUFlUCxTQUFmO0FBQ0Q7O0FBQ0RGLEVBQUFBLE1BQU0sQ0FBQ1UsU0FBUCxhQUFzQmYsUUFBdEI7QUFDQUssRUFBQUEsTUFBTSxDQUFDSyxLQUFQLENBQWFULEtBQWIsR0FBcUJBLEtBQXJCO0FBQ0FLLEVBQUFBLE9BQU8sQ0FBQ1MsU0FBUixHQUFvQmhCLElBQXBCO0FBQ0FJLEVBQUFBLEVBQUUsQ0FBQ1csV0FBSCxDQUFlVCxNQUFmO0FBQ0FGLEVBQUFBLEVBQUUsQ0FBQ1csV0FBSCxDQUFlUixPQUFmO0FBQ0FkLEVBQUFBLFFBQVEsQ0FBQ3NCLFdBQVQsQ0FBcUJYLEVBQXJCO0FBQ0FYLEVBQUFBLFFBQVEsQ0FBQ3dCLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUJ4QixRQUFRLENBQUN5QixZQUE1QjtBQUNELENBbEJEOztBQW9CQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUMzQkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBUUMsS0FBUixHQUFrQnpCLFNBQWxCLENBQVF5QixLQUFSO0FBQ0EsNEJBQVlDLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjN0IsT0FBL0IsRUFBd0M7QUFBRThCLElBQUFBLE9BQU8sRUFBRUo7QUFBWCxHQUF4QztBQUNBekIsRUFBQUEsU0FBUyxDQUFDeUIsS0FBVixHQUFrQixFQUFsQjtBQUNELENBTEQ7O0FBT08sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHRCxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZekIsUUFBWixRQUFZQSxRQUFaO0FBQUEsTUFBc0JDLEtBQXRCLFFBQXNCQSxLQUF0QjtBQUFBLE1BQTZCQyxVQUE3QixRQUE2QkEsVUFBN0I7QUFBQSxTQUMxQkosU0FBUyxDQUFDMkIsT0FBRCxFQUFVekIsUUFBVixFQUFvQkMsS0FBcEIsRUFBMkJDLFVBQTNCLENBRGlCO0FBQUEsQ0FBckI7Ozs7QUFHUCxJQUFJUCxPQUFKLEVBQWE7QUFDWEEsRUFBQUEsT0FBTyxDQUFDZ0MsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNULGFBQW5DO0FBQ0Q7O0FBRU0sSUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUMvQmhDLEVBQUFBLFNBQVMsQ0FBQ2lDLFFBQVYsR0FBcUIsSUFBckI7QUFDQWpDLEVBQUFBLFNBQVMsQ0FBQ2MsS0FBVixDQUFnQm9CLE1BQWhCLEdBQXlCLGFBQXpCO0FBQ0QsQ0FITTs7OztBQUlBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDOUJuQyxFQUFBQSxTQUFTLENBQUNpQyxRQUFWLEdBQXFCLEtBQXJCO0FBQ0FqQyxFQUFBQSxTQUFTLENBQUNjLEtBQVYsQ0FBZ0JvQixNQUFoQixHQUF5QixNQUF6QjtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xuY29uc3QgY2hhdElucHV0ID0gc2VuZE1zZy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5cbmNvbnN0IGFwcGVuZE1zZyA9ICh0ZXh0LCBuaWNrbmFtZSwgY29sb3IsIHVuZGVybGluZWQpID0+IHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBtc2dUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHVuZGVybGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlmICh1bmRlcmxpbmVkKSB7XG4gICAgY29uc29sZS5sb2codW5kZXJsaW5lZCk7XG4gICAgdW5kZXJsaW5lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIHVuZGVybGluZS5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xuICAgIGxpLmFwcGVuZENoaWxkKHVuZGVybGluZSk7XG4gIH1cbiAgYXV0aG9yLmlubmVyVGV4dCA9IGAke25pY2tuYW1lfTogYDtcbiAgYXV0aG9yLnN0eWxlLmNvbG9yID0gY29sb3I7XG4gIG1zZ1RleHQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgbGkuYXBwZW5kQ2hpbGQoYXV0aG9yKTtcbiAgbGkuYXBwZW5kQ2hpbGQobXNnVGV4dCk7XG4gIG1lc3NhZ2VzLmFwcGVuZENoaWxkKGxpKTtcbiAgbWVzc2FnZXMuc2Nyb2xsKDAsIG1lc3NhZ2VzLnNjcm9sbEhlaWdodCk7XG59O1xuXG5jb25zdCBoYW5kbGVTZW5kTXNnID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBjaGF0SW5wdXQ7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xuICBjaGF0SW5wdXQudmFsdWUgPSBcIlwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01zZyA9ICh7IG1lc3NhZ2UsIG5pY2tuYW1lLCBjb2xvciwgdW5kZXJsaW5lZCB9KSA9PlxuICBhcHBlbmRNc2cobWVzc2FnZSwgbmlja25hbWUsIGNvbG9yLCB1bmRlcmxpbmVkKTtcblxuaWYgKHNlbmRNc2cpIHtcbiAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xufVxuXG5leHBvcnQgY29uc3QgZGlzYWJsZUNoYXQgPSAoKSA9PiB7XG4gIGNoYXRJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gIGNoYXRJbnB1dC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG59O1xuZXhwb3J0IGNvbnN0IGVuYWJsZUNoYXQgPSAoKSA9PiB7XG4gIGNoYXRJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICBjaGF0SW5wdXQuc3R5bGUuY3Vyc29yID0gXCJ0ZXh0XCI7XG59O1xuIl19
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./paint");

require("./players");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDdmODIzYjEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG5pbXBvcnQgXCIuL3BsYXllcnNcIjtcbiJdfQ==
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
exports.resetCanvas = exports.showCanvasControls = exports.hideCanvasControls = exports.enableCanvas = exports.disableCanvas = exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cm9scyIsImNvbG9ycyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtb2RlIiwiY3R4IiwiZ2V0Q29udGV4dCIsIklOSVRJQUxfQ09MT1IiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVXaWR0aCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJwYWludGluZyIsImZpbGxpbmciLCJzdGFydFBhaW50aW5nIiwiZSIsImJlZ2luUGF0aCIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJ4Iiwib2Zmc2V0WCIsInkiLCJvZmZzZXRZIiwic3RvcFBhaW50aW5nIiwic3Ryb2tlUGF0aCIsImxpbmVUbyIsInN0cm9rZSIsIm9uTW91c2VNb3ZlIiwiY29sb3IiLCJoYW5kbGVDb2xvckNsaWNrIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vZGVDbGljayIsImlubmVyVGV4dCIsImZpbGwiLCJjdXJyZW50Q29sb3IiLCJoYW5kbGVDYW52YXNDbGljayIsImhhbmRsZUJlZ2FuUGF0aCIsIm1vdmVUbyIsImhhbmRsZVN0cm9rZWRQYXRoIiwiaGFuZGxlRmlsbGVkIiwiZGlzYWJsZUNhbnZhcyIsImVuYWJsZUNhbnZhcyIsImhpZGVDYW52YXNDb250cm9scyIsImRpc3BsYXkiLCJzaG93Q2FudmFzQ29udHJvbHMiLCJyZXNldENhbnZhcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxJQUFNQyxRQUFRLEdB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dHJvbGxlciBmcm9tIFwiLi4vLi4vc3JjL3NvY2tldENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcbmNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NvbnRyb2xzXCIpO1xuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XG5jb25zdCBtb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01vZGVcIik7XG5cbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmxldCBJTklUSUFMX0NPTE9SID0gXCIjMmMyYzJjXCI7XG5cbmNhbnZhcy53aWR0aCA9IDQ1MDtcbmNhbnZhcy5oZWlnaHQgPSA0NTA7XG5cbmN0eC5saW5lV2lkdGggPSAyLjU7XG5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5jdHguc3Ryb2tlU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuY3R4LmZpbGxTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG5cbmxldCBwYWludGluZyA9IGZhbHNlO1xubGV0IGZpbGxpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gc3RhcnRQYWludGluZyhlKSB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmJlZ2luUGF0aCwgeyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9KTtcbiAgcGFpbnRpbmcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBzdG9wUGFpbnRpbmcoKSB7XG4gIHBhaW50aW5nID0gZmFsc2U7XG59XG5cbmNvbnN0IHN0cm9rZVBhdGggPSAoeCwgeSkgPT4ge1xuICBjdHgubGluZVRvKHgsIHkpO1xuICBjdHguc3Ryb2tlKCk7XG59O1xuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShlKSB7XG4gIGlmICghZmlsbGluZykge1xuICAgIGNvbnN0IHggPSBlLm9mZnNldFg7XG4gICAgY29uc3QgeSA9IGUub2Zmc2V0WTtcbiAgICBpZiAocGFpbnRpbmcpIHtcbiAgICAgIHN0cm9rZVBhdGgoeCwgeSk7XG4gICAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwge1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBjb2xvcjogY3R4LnN0cm9rZVN0eWxlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNvbG9yQ2xpY2soKSB7XG4gIGNvbnN0IHRhcmdldCA9IHRoaXM7XG4gIGNvbnN0IGNvbG9yID0gdGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJjb250cm9sc19fY29sb3ItLWNsaWNrXCIpO1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgKCkgPT4ge1xuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiY29udHJvbHNfX2NvbG9yLS1jbGlja1wiKTtcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW9kZUNsaWNrKCkge1xuICBpZiAoZmlsbGluZykge1xuICAgIGZpbGxpbmcgPSBmYWxzZTtcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiRmlsbFwiO1xuICB9IGVsc2Uge1xuICAgIGZpbGxpbmcgPSB0cnVlO1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJQYWludFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbGwoY29sb3IgPSBudWxsKSB7XG4gIGNvbnN0IGN1cnJlbnRDb2xvciA9IGN0eC5maWxsU3R5bGU7XG4gIGlmIChjb2xvciAhPT0gbnVsbCkgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3R4LmZpbGxTdHlsZSA9IGN1cnJlbnRDb2xvcjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2FudmFzQ2xpY2soKSB7XG4gIGlmIChmaWxsaW5nKSB7XG4gICAgZmlsbCgpO1xuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5maWxsLCB7IGNvbG9yOiBjdHguZmlsbFN0eWxlIH0pO1xuICB9XG59XG5cbmZvciAoY29uc3QgY29sb3Igb2YgY29sb3JzKSBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ29sb3JDbGljayk7XG5cbmlmIChtb2RlKSBtb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVNb2RlQ2xpY2spO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQmVnYW5QYXRoID0gKHsgeCwgeSB9KSA9PiB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4LCB5KTtcbn07XG5leHBvcnQgY29uc3QgaGFuZGxlU3Ryb2tlZFBhdGggPSAoeyB4LCB5LCBjb2xvciA9IG51bGwgfSkgPT4ge1xuICBjb25zdCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XG4gIGlmIChjb2xvciAhPT0gbnVsbCkgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIHN0cm9rZVBhdGgoeCwgeSk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGN1cnJlbnRDb2xvcjtcbn07XG5leHBvcnQgY29uc3QgaGFuZGxlRmlsbGVkID0gKHsgY29sb3IgfSkgPT4gZmlsbChjb2xvcik7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlQ2FudmFzID0gKCkgPT4ge1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2FudmFzQ2xpY2spO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuYWJsZUNhbnZhcyA9ICgpID0+IHtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoaWRlQ2FudmFzQ29udHJvbHMgPSAoKSA9PiAoY29udHJvbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKTtcblxuZXhwb3J0IGNvbnN0IHNob3dDYW52YXNDb250cm9scyA9ICgpID0+IChjb250cm9scy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIpO1xuXG5leHBvcnQgY29uc3QgcmVzZXRDYW52YXMgPSAoKSA9PiBmaWxsKFwiI2ZmZlwiKTtcblxuaWYgKGNhbnZhcykge1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG4gIGhpZGVDYW52YXNDb250cm9scygpO1xufVxuIl19
},{"../../src/socketController":9,"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleTimeUpdate = exports.handleGameStarting = exports.handleGameEnded = exports.handleLeaderNotif = exports.handleGameStarted = exports.handlePlayerUpdate = void 0;

var _chat = require("./chat");

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
      var playerElement = document.createElement("div");
      var nickname = document.createElement("span");
      var points = document.createElement("span");
      nickname.innerText = "".concat(player.nickname, ": ");
      nickname.style.color = player.color;
      points.innerText = player.points;
      playerElement.appendChild(nickname);
      playerElement.appendChild(points);
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

var handleShowLeader = function handleShowLeader(leaderNickname, show, leaderColor) {
  var playerElements = board.querySelectorAll("div");

  var _iterator2 = _createForOfIteratorHelper(playerElements),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var playerelement = _step2.value;
      var nickname = playerelement.childNodes[0];

      if (nickname.innerText.slice(0, -2) === leaderNickname) {
        console.dir(nickname);

        if (show) {
          playerelement.style.backgroundColor = leaderColor;
          nickname.style.color = "white";
          playerelement.style.color = "white";
        } else {
          playerelement.style.backgroundColor = "white";
          nickname.style.color = leaderColor;
          playerelement.style.color = "black";
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var players = _ref.players;
  return addPlayers(players);
};

exports.handlePlayerUpdate = handlePlayerUpdate;

var handleGameStarted = function handleGameStarted(_ref2) {
  var leaderNickname = _ref2.leaderNickname,
      show = _ref2.show,
      leaderColor = _ref2.leaderColor;
  (0, _paint.disableCanvas)();
  (0, _paint.hideCanvasControls)();
  setNotifs("");
  handleShowLeader(leaderNickname, show, leaderColor);
};

exports.handleGameStarted = handleGameStarted;

var handleLeaderNotif = function handleLeaderNotif(_ref3) {
  var word = _ref3.word;
  (0, _paint.enableCanvas)();
  (0, _paint.showCanvasControls)();
  (0, _chat.disableChat)();
  setNotifs("You are the leader, paint: ".concat(word));
};

exports.handleLeaderNotif = handleLeaderNotif;

var handleGameEnded = function handleGameEnded(_ref4) {
  var leaderNickname = _ref4.leaderNickname,
      show = _ref4.show,
      leaderColor = _ref4.leaderColor;
  setNotifs("Game ended.");
  (0, _paint.disableCanvas)();
  (0, _paint.hideCanvasControls)();
  (0, _paint.resetCanvas)();
  (0, _chat.enableChat)();
  handleShowLeader(leaderNickname, show, leaderColor);
};

exports.handleGameEnded = handleGameEnded;

var handleGameStarting = function handleGameStarting() {
  return setNotifs("Game will start soon");
};

exports.handleGameStarting = handleGameStarting;

var handleTimeUpdate = function handleTimeUpdate(_ref5) {
  var timeleft = _ref5.timeleft;
  return setNotifs("Time left: ".concat(timeleft));
};

exports.handleTimeUpdate = handleTimeUpdate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibm90aWZzIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJwbGF5ZXIiLCJwbGF5ZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5pY2tuYW1lIiwicG9pbnRzIiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJjb2xvciIsImFwcGVuZENoaWxkIiwic2V0Tm90aWZzIiwidGV4dCIsImhhbmRsZVNob3dMZWFkZXIiLCJsZWFkZXJOaWNrbmFtZSIsInNob3ciLCJsZWFkZXJDb2xvciIsInBsYXllckVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInBsYXllcmVsZW1lbnQiLCJjaGlsZE5vZGVzIiwic2xpY2UiLCJjb25zb2xlIiwiZGlyIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlUGxheWVyVXBkYXRlIiwiaGFuZGxlR2FtZVN0YXJ0ZWQiLCJoYW5kbGVMZWFkZXJOb3RpZiIsIndvcmQiLCJoYW5kbGVHYW1lRW5kZWQiLCJoYW5kbGVHYW1lU3RhcnRpbmciLCJoYW5kbGVUaW1lVXBkYXRlIiwidGltZWxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFRQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjs7QUFFQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFDOUJMLEVBQUFBLEtBQUssQ0FBQ00sU0FBTixHQUFrQixFQUFsQjs7QUFEOEIsNkNBRVRELE9BRlM7QUFBQTs7QUFBQTtBQUU5Qix3REFBOEI7QUFBQSxVQUFuQkUsTUFBbUI7QUFDNUIsVUFBTUMsYUFBYSxHQUFHUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdEI7QUFDQSxVQUFNQyxRQUFRLEdBQUdULFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixNQUF2QixDQUFqQjtBQUNBLFVBQU1FLE1BQU0sR0FBR1YsUUFBUSxDQUFDUSxhQUFULENBQXVCLE1BQXZCLENBQWY7QUFDQUMsTUFBQUEsUUFBUSxDQUFDRSxTQUFULGFBQXdCTCxNQUFNLENBQUNHLFFBQS9CO0FBQ0FBLE1BQUFBLFFBQVEsQ0FBQ0csS0FBVCxDQUFlQyxLQUFmLEdBQXVCUCxNQUFNLENBQUNPLEtBQTlCO0FBQ0FILE1BQUFBLE1BQU0sQ0FBQ0MsU0FBUCxHQUFtQkwsTUFBTSxDQUFDSSxNQUExQjtBQUNBSCxNQUFBQSxhQUFhLENBQUNPLFdBQWQsQ0FBMEJMLFFBQTFCO0FBQ0FGLE1BQUFBLGFBQWEsQ0FBQ08sV0FBZCxDQUEwQkosTUFBMUI7QUFDQVgsTUFBQUEsS0FBSyxDQUFDZSxXQUFOLENBQWtCUCxhQUFsQjtBQUNEO0FBWjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhL0IsQ0FiRDs7QUFlQSxJQUFNUSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDMUJkLEVBQUFBLE1BQU0sQ0FBQ1MsU0FBUCxHQUFtQkssSUFBbkI7QUFDRCxDQUZEOztBQUlBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsY0FBRCxFQUFpQkMsSUFBakIsRUFBdUJDLFdBQXZCLEVBQXVDO0FBQzlELE1BQU1DLGNBQWMsR0FBR3RCLEtBQUssQ0FBQ3VCLGdCQUFOLENBQXVCLEtBQXZCLENBQXZCOztBQUQ4RCw4Q0FFbENELGNBRmtDO0FBQUE7O0FBQUE7QUFFOUQsMkRBQTRDO0FBQUEsVUFBakNFLGFBQWlDO0FBQzFDLFVBQU1kLFFBQVEsR0FBR2MsYUFBYSxDQUFDQyxVQUFkLENBQXlCLENBQXpCLENBQWpCOztBQUNBLFVBQUlmLFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQmMsS0FBbkIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBQyxDQUE3QixNQUFvQ1AsY0FBeEMsRUFBd0Q7QUFDdERRLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbEIsUUFBWjs7QUFDQSxZQUFJVSxJQUFKLEVBQVU7QUFDUkksVUFBQUEsYUFBYSxDQUFDWCxLQUFkLENBQW9CZ0IsZUFBcEIsR0FBc0NSLFdBQXRDO0FBQ0FYLFVBQUFBLFFBQVEsQ0FBQ0csS0FBVCxDQUFlQyxLQUFmLEdBQXVCLE9BQXZCO0FBQ0FVLFVBQUFBLGFBQWEsQ0FBQ1gsS0FBZCxDQUFvQkMsS0FBcEIsR0FBNEIsT0FBNUI7QUFDRCxTQUpELE1BSU87QUFDTFUsVUFBQUEsYUFBYSxDQUFDWCxLQUFkLENBQW9CZ0IsZUFBcEIsR0FBc0MsT0FBdEM7QUFDQW5CLFVBQUFBLFFBQVEsQ0FBQ0csS0FBVCxDQUFlQyxLQUFmLEdBQXVCTyxXQUF2QjtBQUNBRyxVQUFBQSxhQUFhLENBQUNYLEtBQWQsQ0FBb0JDLEtBQXBCLEdBQTRCLE9BQTVCO0FBQ0Q7QUFDRjtBQUNGO0FBaEI2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUIvRCxDQWpCRDs7QUFtQk8sSUFBTWdCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFHekIsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUJELFVBQVUsQ0FBQ0MsT0FBRCxDQUEzQjtBQUFBLENBQTNCOzs7O0FBQ0EsSUFBTTBCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsUUFBMkM7QUFBQSxNQUF4Q1osY0FBd0MsU0FBeENBLGNBQXdDO0FBQUEsTUFBeEJDLElBQXdCLFNBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxXQUFrQixTQUFsQkEsV0FBa0I7QUFDMUU7QUFDQTtBQUNBTCxFQUFBQSxTQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0FFLEVBQUFBLGdCQUFnQixDQUFDQyxjQUFELEVBQWlCQyxJQUFqQixFQUF1QkMsV0FBdkIsQ0FBaEI7QUFDRCxDQUxNOzs7O0FBTUEsSUFBTVcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixRQUFjO0FBQUEsTUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBakIsRUFBQUEsU0FBUyxzQ0FBK0JpQixJQUEvQixFQUFUO0FBQ0QsQ0FMTTs7OztBQU1BLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBMkM7QUFBQSxNQUF4Q2YsY0FBd0MsU0FBeENBLGNBQXdDO0FBQUEsTUFBeEJDLElBQXdCLFNBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxXQUFrQixTQUFsQkEsV0FBa0I7QUFDeEVMLEVBQUFBLFNBQVMsQ0FBQyxhQUFELENBQVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBRSxFQUFBQSxnQkFBZ0IsQ0FBQ0MsY0FBRCxFQUFpQkMsSUFBakIsRUFBdUJDLFdBQXZCLENBQWhCO0FBQ0QsQ0FQTTs7OztBQVFBLElBQU1jLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFNbkIsU0FBUyxDQUFDLHNCQUFELENBQWY7QUFBQSxDQUEzQjs7OztBQUNBLElBQU1vQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FDOUJyQixTQUFTLHNCQUFlcUIsUUFBZixFQURxQjtBQUFBLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlzYWJsZUNoYXQsIGVuYWJsZUNoYXQgfSBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQge1xuICBkaXNhYmxlQ2FudmFzLFxuICBlbmFibGVDYW52YXMsXG4gIGhpZGVDYW52YXNDb250cm9scyxcbiAgcmVzZXRDYW52YXMsXG4gIHNob3dDYW52YXNDb250cm9scyxcbn0gZnJvbSBcIi4vcGFpbnRcIjtcblxuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUEJvYXJkXCIpO1xuY29uc3Qgbm90aWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmc1wiKTtcblxuY29uc3QgYWRkUGxheWVycyA9IChwbGF5ZXJzKSA9PiB7XG4gIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAoY29uc3QgcGxheWVyIG9mIHBsYXllcnMpIHtcbiAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuaWNrbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHBvaW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG5pY2tuYW1lLmlubmVyVGV4dCA9IGAke3BsYXllci5uaWNrbmFtZX06IGA7XG4gICAgbmlja25hbWUuc3R5bGUuY29sb3IgPSBwbGF5ZXIuY29sb3I7XG4gICAgcG9pbnRzLmlubmVyVGV4dCA9IHBsYXllci5wb2ludHM7XG4gICAgcGxheWVyRWxlbWVudC5hcHBlbmRDaGlsZChuaWNrbmFtZSk7XG4gICAgcGxheWVyRWxlbWVudC5hcHBlbmRDaGlsZChwb2ludHMpO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKHBsYXllckVsZW1lbnQpO1xuICB9XG59O1xuXG5jb25zdCBzZXROb3RpZnMgPSAodGV4dCkgPT4ge1xuICBub3RpZnMuaW5uZXJUZXh0ID0gdGV4dDtcbn07XG5cbmNvbnN0IGhhbmRsZVNob3dMZWFkZXIgPSAobGVhZGVyTmlja25hbWUsIHNob3csIGxlYWRlckNvbG9yKSA9PiB7XG4gIGNvbnN0IHBsYXllckVsZW1lbnRzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgZm9yIChjb25zdCBwbGF5ZXJlbGVtZW50IG9mIHBsYXllckVsZW1lbnRzKSB7XG4gICAgY29uc3Qgbmlja25hbWUgPSBwbGF5ZXJlbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgaWYgKG5pY2tuYW1lLmlubmVyVGV4dC5zbGljZSgwLCAtMikgPT09IGxlYWRlck5pY2tuYW1lKSB7XG4gICAgICBjb25zb2xlLmRpcihuaWNrbmFtZSk7XG4gICAgICBpZiAoc2hvdykge1xuICAgICAgICBwbGF5ZXJlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGxlYWRlckNvbG9yO1xuICAgICAgICBuaWNrbmFtZS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgcGxheWVyZWxlbWVudC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllcmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBuaWNrbmFtZS5zdHlsZS5jb2xvciA9IGxlYWRlckNvbG9yO1xuICAgICAgICBwbGF5ZXJlbGVtZW50LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVBsYXllclVwZGF0ZSA9ICh7IHBsYXllcnMgfSkgPT4gYWRkUGxheWVycyhwbGF5ZXJzKTtcbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lU3RhcnRlZCA9ICh7IGxlYWRlck5pY2tuYW1lLCBzaG93LCBsZWFkZXJDb2xvciB9KSA9PiB7XG4gIGRpc2FibGVDYW52YXMoKTtcbiAgaGlkZUNhbnZhc0NvbnRyb2xzKCk7XG4gIHNldE5vdGlmcyhcIlwiKTtcbiAgaGFuZGxlU2hvd0xlYWRlcihsZWFkZXJOaWNrbmFtZSwgc2hvdywgbGVhZGVyQ29sb3IpO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVMZWFkZXJOb3RpZiA9ICh7IHdvcmQgfSkgPT4ge1xuICBlbmFibGVDYW52YXMoKTtcbiAgc2hvd0NhbnZhc0NvbnRyb2xzKCk7XG4gIGRpc2FibGVDaGF0KCk7XG4gIHNldE5vdGlmcyhgWW91IGFyZSB0aGUgbGVhZGVyLCBwYWludDogJHt3b3JkfWApO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lRW5kZWQgPSAoeyBsZWFkZXJOaWNrbmFtZSwgc2hvdywgbGVhZGVyQ29sb3IgfSkgPT4ge1xuICBzZXROb3RpZnMoXCJHYW1lIGVuZGVkLlwiKTtcbiAgZGlzYWJsZUNhbnZhcygpO1xuICBoaWRlQ2FudmFzQ29udHJvbHMoKTtcbiAgcmVzZXRDYW52YXMoKTtcbiAgZW5hYmxlQ2hhdCgpO1xuICBoYW5kbGVTaG93TGVhZGVyKGxlYWRlck5pY2tuYW1lLCBzaG93LCBsZWFkZXJDb2xvcik7XG59O1xuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVTdGFydGluZyA9ICgpID0+IHNldE5vdGlmcyhcIkdhbWUgd2lsbCBzdGFydCBzb29uXCIpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZVRpbWVVcGRhdGUgPSAoeyB0aW1lbGVmdCB9KSA9PlxuICBzZXROb3RpZnMoYFRpbWUgbGVmdDogJHt0aW1lbGVmdH1gKTtcbiJdfQ==
},{"./chat":1,"./paint":5}],7:[function(require,module,exports){
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
  socket.on(events.timeUpdate, _players.handleTimeUpdate);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01zZyIsImJlZ2FuUGF0aCIsImhhbmRsZUJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJmaWxsZWQiLCJoYW5kbGVGaWxsZWQiLCJwbGF5ZXJVcGRhdGUiLCJoYW5kbGVQbGF5ZXJVcGRhdGUiLCJnYW1lU3RhcnRlZCIsImhhbmRsZUdhbWVTdGFydGVkIiwibGVhZGVyTm90aWYiLCJoYW5kbGVMZWFkZXJOb3RpZiIsImdhbWVFbmRlZCIsImhhbmRsZUdhbWVFbmRlZCIsImdhbWVTdGFydGluZyIsImhhbmRsZUdhbWVTdGFydGluZyIsInRpbWVVcGRhdGUiLCJoYW5kbGVUaW1lVXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBU0EsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFDdEMsZ0JBQW1CQyxNQUFuQjtBQUFBLE1BQVFDLE1BQVIsV0FBUUEsTUFBUjtBQUNBTCxFQUFBQSxNQUFNLEdBQUdHLE9BQVQ7QUFDQUgsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0UsT0FBakIsRUFBMEJDLDRCQUExQjtBQUNBUixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDSSxZQUFqQixFQUErQkMsaUNBQS9CO0FBQ0FWLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNNLE1BQWpCLEVBQXlCQyxrQkFBekI7QUFDQVosRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1EsU0FBakIsRUFBNEJDLHNCQUE1QjtBQUNBZCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDVSxXQUFqQixFQUE4QkMsd0JBQTlCO0FBQ0FoQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDWSxNQUFqQixFQUF5QkMsbUJBQXpCO0FBQ0FsQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDYyxZQUFqQixFQUErQkMsMkJBQS9CO0FBQ0FwQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDZ0IsV0FBakIsRUFBOEJDLDBCQUE5QjtBQUNBdEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2tCLFdBQWpCLEVBQThCQywwQkFBOUI7QUFDQXhCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNvQixTQUFqQixFQUE0QkMsd0JBQTVCO0FBQ0ExQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDc0IsWUFBakIsRUFBK0JDLDJCQUEvQjtBQUNBNUIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ3dCLFVBQWpCLEVBQTZCQyx5QkFBN0I7QUFDRCxDQWZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3TXNnIH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgaGFuZGxlRGlzY29ubmVjdGVkLCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVGaWxsZWQsIGhhbmRsZVN0cm9rZWRQYXRoIH0gZnJvbSBcIi4vcGFpbnRcIjtcbmltcG9ydCB7XG4gIGhhbmRsZUdhbWVFbmRlZCxcbiAgaGFuZGxlR2FtZVN0YXJ0ZWQsXG4gIGhhbmRsZUdhbWVTdGFydGluZyxcbiAgaGFuZGxlTGVhZGVyTm90aWYsXG4gIGhhbmRsZVBsYXllclVwZGF0ZSxcbiAgaGFuZGxlVGltZVVwZGF0ZSxcbn0gZnJvbSBcIi4vcGxheWVyc1wiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgc29ja2V0ID0gYVNvY2tldDtcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XG4gIHNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNc2cpO1xuICBzb2NrZXQub24oZXZlbnRzLmJlZ2FuUGF0aCwgaGFuZGxlQmVnYW5QYXRoKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5zdHJva2VkUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGgpO1xuICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5wbGF5ZXJVcGRhdGUsIGhhbmRsZVBsYXllclVwZGF0ZSk7XG4gIHNvY2tldC5vbihldmVudHMuZ2FtZVN0YXJ0ZWQsIGhhbmRsZUdhbWVTdGFydGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5sZWFkZXJOb3RpZiwgaGFuZGxlTGVhZGVyTm90aWYpO1xuICBzb2NrZXQub24oZXZlbnRzLmdhbWVFbmRlZCwgaGFuZGxlR2FtZUVuZGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5nYW1lU3RhcnRpbmcsIGhhbmRsZUdhbWVTdGFydGluZyk7XG4gIHNvY2tldC5vbihldmVudHMudGltZVVwZGF0ZSwgaGFuZGxlVGltZVVwZGF0ZSk7XG59O1xuIl19
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
  gameStarting: "gameStarting",
  timeUpdate: "timeUpdate"
};
var _default = events;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6WyJldmVudHMiLCJzZXROaWNrbmFtZSIsIm5ld1VzZXIiLCJsb2dnZWRJbiIsInVuYXV0aGVudGljYXRlZCIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0ZWQiLCJzZW5kTXNnIiwibmV3TXNnIiwiYmVnaW5QYXRoIiwic3Ryb2tlUGF0aCIsImJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiZmlsbCIsImZpbGxlZCIsInBsYXllclVwZGF0ZSIsImdhbWVTdGFydGVkIiwibGVhZGVyTm90aWYiLCJnYW1lRW5kZWQiLCJnYW1lU3RhcnRpbmciLCJ0aW1lVXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsV0FBVyxFQUFFLGFBREE7QUFFYkMsRUFBQUEsT0FBTyxFQUFFLFNBRkk7QUFHYkMsRUFBQUEsUUFBUSxFQUFFLFVBSEc7QUFJYkMsRUFBQUEsZUFBZSxFQUFFLGlCQUpKO0FBS2JDLEVBQUFBLFVBQVUsRUFBRSxZQUxDO0FBTWJDLEVBQUFBLFlBQVksRUFBRSxjQU5EO0FBT2JDLEVBQUFBLE9BQU8sRUFBRSxTQVBJO0FBUWJDLEVBQUFBLE1BQU0sRUFBRSxRQVJLO0FBU2JDLEVBQUFBLFNBQVMsRUFBRSxXQVRFO0FBVWJDLEVBQUFBLFVBQVUsRUFBRSxZQVZDO0FBV2JDLEVBQUFBLFNBQVMsRUFBRSxXQVhFO0FBWWJDLEVBQUFBLFdBQVcsRUFBRSxhQVpBO0FBYWJDLEVBQUFBLElBQUksRUFBRSxNQWJPO0FBY2JDLEVBQUFBLE1BQU0sRUFBRSxRQWRLO0FBZWJDLEVBQUFBLFlBQVksRUFBRSxjQWZEO0FBZ0JiQyxFQUFBQSxXQUFXLEVBQUUsYUFoQkE7QUFpQmJDLEVBQUFBLFdBQVcsRUFBRSxhQWpCQTtBQWtCYkMsRUFBQUEsU0FBUyxFQUFFLFdBbEJFO0FBbUJiQyxFQUFBQSxZQUFZLEVBQUUsY0FuQkQ7QUFvQmJDLEVBQUFBLFVBQVUsRUFBRTtBQXBCQyxDQUFmO2VBdUJlcEIsTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV2ZW50cyA9IHtcbiAgc2V0Tmlja25hbWU6IFwic2V0Tmlja25hbWVcIixcbiAgbmV3VXNlcjogXCJuZXdVc2VyXCIsXG4gIGxvZ2dlZEluOiBcImxvZ2dlZEluXCIsXG4gIHVuYXV0aGVudGljYXRlZDogXCJ1bmF1dGhlbnRpY2F0ZWRcIixcbiAgZGlzY29ubmVjdDogXCJkaXNjb25uZWN0XCIsXG4gIGRpc2Nvbm5lY3RlZDogXCJkaXNjb25uZWN0ZWRcIixcbiAgc2VuZE1zZzogXCJzZW5kTXNnXCIsXG4gIG5ld01zZzogXCJuZXdNc2dcIixcbiAgYmVnaW5QYXRoOiBcImJlZ2luUGF0aFwiLFxuICBzdHJva2VQYXRoOiBcInN0cm9rZVBhdGhcIixcbiAgYmVnYW5QYXRoOiBcImJlZ2FuUGF0aFwiLFxuICBzdHJva2VkUGF0aDogXCJzdHJva2VkUGF0aFwiLFxuICBmaWxsOiBcImZpbGxcIixcbiAgZmlsbGVkOiBcImZpbGxlZFwiLFxuICBwbGF5ZXJVcGRhdGU6IFwicGxheWVyVXBkYXRlXCIsXG4gIGdhbWVTdGFydGVkOiBcImdhbWVTdGFydGVkXCIsXG4gIGxlYWRlck5vdGlmOiBcImxlYWRlck5vdGlmXCIsXG4gIGdhbWVFbmRlZDogXCJnYW1lRW5kZWRcIixcbiAgZ2FtZVN0YXJ0aW5nOiBcImdhbWVTdGFydGluZ1wiLFxuICB0aW1lVXBkYXRlOiBcInRpbWVVcGRhdGVcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcbiJdfQ==
},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = _interopRequireDefault(require("./events"));

var _words = require("./words");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialColors = ["rgb(255, 59, 48)", "rgb(255, 149, 0)", "rgb(255, 204, 0)", "rgb(76, 217, 100)", "rgb(90, 200, 250)", "rgb(0, 122, 255)", "rgb(131, 86, 214)"];
var players = [];
var sockets = [];
var nicknames = [];
var inProgress = false;
var word = null;
var leader = null;
var timeleft = 0;
var interval = null;
var colors = initialColors;

var chooseLeader = function chooseLeader() {
  return players[Math.floor(Math.random() * players.length)];
};

var genRGB = function genRGB() {
  return Math.ceil(Math.random() * 200);
};

var getRGB = function getRGB() {
  return "rgb(".concat(genRGB(), ", ").concat(genRGB(), ", ").concat(genRGB(), ")");
};

var chooseColor = function chooseColor() {
  var color = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];

  if (color === undefined) {
    color = getRGB();
  }

  return color;
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
      players: players
    });
  };

  var handleTimeleft = function handleTimeleft() {
    io.to("not leader").emit(_events["default"].timeUpdate, {
      timeleft: timeleft
    });
    timeleft -= 1;
  };

  var startGame = function startGame() {
    if (inProgress === false && players.length > 1) {
      inProgress = true;
      leader = chooseLeader();
      word = (0, _words.chooseWord)();

      if (leader) {
        sockets.forEach(function (aSocket) {
          if (aSocket.id !== leader.id) aSocket.join("not leader");
        });
      }

      superBroadcast(_events["default"].gameStarting);
      setTimeout(function () {
        if (leader) {
          superBroadcast(_events["default"].gameStarted, {
            leaderNickname: leader.nickname,
            show: true,
            leaderColor: leader.color
          });
        }

        io.to(leader.id).emit(_events["default"].leaderNotif, {
          word: word
        });
        timeleft = 40;
        handleTimeleft();

        if (interval === null) {
          interval = setInterval(function () {
            if (timeleft === 0) endGame();
            handleTimeleft();
          }, 1000);
        }
      }, 5000);
    }
  };

  var endGame = function endGame() {
    inProgress = false;

    if (leader) {
      sockets.forEach(function (aSocket) {
        if (aSocket.id !== leader.id) aSocket.leave("not leader");
      });
      superBroadcast(_events["default"].gameEnded, {
        leaderNickname: leader.nickname,
        show: false,
        leaderColor: leader.color
      });
    }

    if (interval !== null) {
      clearInterval(interval);
      interval = null;
    }

    setTimeout(function () {
      return startGame();
    }, 2000);
  };

  var addPoint = function addPoint(id) {
    players = players.map(function (player) {
      if (player.id === id) {
        player.points += 10;
      }

      return player;
    });
    sendPlayerUpdate();
    endGame();
  };

  socket.on(_events["default"].setNickname, function (_ref) {
    var nickname = _ref.nickname;

    if (!nicknames.includes(nickname)) {
      var playerColor = chooseColor();
      socket.nickname = nickname;
      socket.color = playerColor;
      nicknames.push(nickname);
      players.push({
        id: socket.id,
        points: 0,
        nickname: nickname,
        color: playerColor
      });
      sockets.push(socket);
      socket.emit(_events["default"].loggedIn);
      broadcast(_events["default"].newUser, {
        nickname: nickname
      });
      sendPlayerUpdate();
      startGame();
    } else {
      socket.emit(_events["default"].unauthenticated);
    }
  });
  socket.on(_events["default"].disconnect, function () {
    broadcast(_events["default"].disconnected, {
      nickname: socket.nickname
    });
    players = players.filter(function (player) {
      return player.id != socket.id;
    });
    sockets = sockets.filter(function (aSocket) {
      return aSocket.id != socket.id;
    });
    nicknames = nicknames.filter(function (nickname) {
      return nickname != socket.nickname;
    });

    if (!colors.includes(socket.color)) {
      colors.push(socket.color);
    }

    if (colors.length > 7) colors = initialColors;

    if (players.length == 1) {
      endGame();
    } else if (leader) {
      if (socket.id == leader.id) endGame();
    }

    sendPlayerUpdate();
  });
  socket.on(_events["default"].sendMsg, function (_ref2) {
    var message = _ref2.message;
    superBroadcast(_events["default"].newMsg, {
      message: message,
      nickname: socket.nickname,
      color: socket.color,
      underlined: message === word ? true : false
    });

    if (message === word) {
      superBroadcast(_events["default"].newMsg, {
        message: "Winner is: ".concat(socket.nickname, ",\nword was: ").concat(word),
        nickname: "Bot",
        color: "#2c2c2c",
        underlined: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbENvbG9ycyIsInBsYXllcnMiLCJzb2NrZXRzIiwibmlja25hbWVzIiwiaW5Qcm9ncmVzcyIsIndvcmQiLCJsZWFkZXIiLCJ0aW1lbGVmdCIsImludGVydmFsIiwiY29sb3JzIiwiY2hvb3NlTGVhZGVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZ2VuUkdCIiwiY2VpbCIsImdldFJHQiIsImNob29zZUNvbG9yIiwiY29sb3IiLCJzcGxpY2UiLCJ1bmRlZmluZWQiLCJzb2NrZXRDb250cm9sbGVyIiwic29ja2V0IiwiaW8iLCJicm9hZGNhc3QiLCJldmVudCIsImRhdGEiLCJlbWl0Iiwic3VwZXJCcm9hZGNhc3QiLCJzZW5kUGxheWVyVXBkYXRlIiwiZXZlbnRzIiwicGxheWVyVXBkYXRlIiwiaGFuZGxlVGltZWxlZnQiLCJ0byIsInRpbWVVcGRhdGUiLCJzdGFydEdhbWUiLCJmb3JFYWNoIiwiYVNvY2tldCIsImlkIiwiam9pbiIsImdhbWVTdGFydGluZyIsInNldFRpbWVvdXQiLCJnYW1lU3RhcnRlZCIsImxlYWRlck5pY2tuYW1lIiwibmlja25hbWUiLCJzaG93IiwibGVhZGVyQ29sb3IiLCJsZWFkZXJOb3RpZiIsInNldEludGVydmFsIiwiZW5kR2FtZSIsImxlYXZlIiwiZ2FtZUVuZGVkIiwiY2xlYXJJbnRlcnZhbCIsImFkZFBvaW50IiwibWFwIiwicGxheWVyIiwicG9pbnRzIiwib24iLCJzZXROaWNrbmFtZSIsImluY2x1ZGVzIiwicGxheWVyQ29sb3IiLCJwdXNoIiwibG9nZ2VkSW4iLCJuZXdVc2VyIiwidW5hdXRoZW50aWNhdGVkIiwiZGlzY29ubmVjdCIsImRpc2Nvbm5lY3RlZCIsImZpbHRlciIsInNlbmRNc2ciLCJtZXNzYWdlIiwibmV3TXNnIiwidW5kZXJsaW5lZCIsImJlZ2luUGF0aCIsIngiLCJ5IiwiYmVnYW5QYXRoIiwic3Ryb2tlUGF0aCIs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QSxLQUFUO0FBQUEsV0FDM0JNLFNBQVMsQ0FBQ00sbUJBQU8rQyxXQUFSLEVBQXFCO0FBQUVKLE1BQUFBLENBQUMsRUFBREEsQ0FBRjtBQUFLQyxNQUFBQSxDQUFDLEVBQURBLENBQUw7QUFBUXhELE1BQUFBLEtBQUssRUFBTEE7QUFBUixLQUFyQixDQURrQjtBQUFBLEdBQTdCO0FBSUFJLEVBQUFBLE1BQU0sQ0FBQ21DLEVBQVAsQ0FBVTNCLG1CQUFPZ0QsSUFBakIsRUFBdUIsaUJBQWU7QUFBQSxRQUFaNUQsS0FBWSxTQUFaQSxLQUFZO0FBQ3BDTSxJQUFBQSxTQUFTLENBQUNNLG1CQUFPaUQsTUFBUixFQUFnQjtBQUFFN0QsTUFBQUEsS0FBSyxFQUFMQTtBQUFGLEtBQWhCLENBQVQ7QUFDRCxHQUZEO0FBR0QsQ0F6SUQ7O2VBMkllRyxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBldmVudHMgZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgeyBjaG9vc2VXb3JkIH0gZnJvbSBcIi4vd29yZHNcIjtcblxuY29uc3QgaW5pdGlhbENvbG9ycyA9IFtcbiAgXCJyZ2IoMjU1LCA1OSwgNDgpXCIsXG4gIFwicmdiKDI1NSwgMTQ5LCAwKVwiLFxuICBcInJnYigyNTUsIDIwNCwgMClcIixcbiAgXCJyZ2IoNzYsIDIxNywgMTAwKVwiLFxuICBcInJnYig5MCwgMjAwLCAyNTApXCIsXG4gIFwicmdiKDAsIDEyMiwgMjU1KVwiLFxuICBcInJnYigxMzEsIDg2LCAyMTQpXCIsXG5dO1xubGV0IHBsYXllcnMgPSBbXTtcbmxldCBzb2NrZXRzID0gW107XG5sZXQgbmlja25hbWVzID0gW107XG5sZXQgaW5Qcm9ncmVzcyA9IGZhbHNlO1xubGV0IHdvcmQgPSBudWxsO1xubGV0IGxlYWRlciA9IG51bGw7XG5sZXQgdGltZWxlZnQgPSAwO1xubGV0IGludGVydmFsID0gbnVsbDtcbmxldCBjb2xvcnMgPSBpbml0aWFsQ29sb3JzO1xuXG5jb25zdCBjaG9vc2VMZWFkZXIgPSAoKSA9PiBwbGF5ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYXllcnMubGVuZ3RoKV07XG5cbmNvbnN0IGdlblJHQiA9ICgpID0+IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMjAwKTtcblxuY29uc3QgZ2V0UkdCID0gKCkgPT4gYHJnYigke2dlblJHQigpfSwgJHtnZW5SR0IoKX0sICR7Z2VuUkdCKCl9KWA7XG5cbmNvbnN0IGNob29zZUNvbG9yID0gKCkgPT4ge1xuICBsZXQgY29sb3IgPSBjb2xvcnMuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpLCAxKVswXTtcbiAgaWYgKGNvbG9yID09PSB1bmRlZmluZWQpIHtcbiAgICBjb2xvciA9IGdldFJHQigpO1xuICB9XG4gIHJldHVybiBjb2xvcjtcbn07XG5cbmNvbnN0IHNvY2tldENvbnRyb2xsZXIgPSAoc29ja2V0LCBpbykgPT4ge1xuICBjb25zdCBicm9hZGNhc3QgPSAoZXZlbnQsIGRhdGEpID0+IHNvY2tldC5icm9hZGNhc3QuZW1pdChldmVudCwgZGF0YSk7XG4gIGNvbnN0IHN1cGVyQnJvYWRjYXN0ID0gKGV2ZW50LCBkYXRhKSA9PiBpby5lbWl0KGV2ZW50LCBkYXRhKTtcbiAgY29uc3Qgc2VuZFBsYXllclVwZGF0ZSA9ICgpID0+XG4gICAgc3VwZXJCcm9hZGNhc3QoZXZlbnRzLnBsYXllclVwZGF0ZSwgeyBwbGF5ZXJzIH0pO1xuICBjb25zdCBoYW5kbGVUaW1lbGVmdCA9ICgpID0+IHtcbiAgICBpby50byhcIm5vdCBsZWFkZXJcIikuZW1pdChldmVudHMudGltZVVwZGF0ZSwgeyB0aW1lbGVmdCB9KTtcbiAgICB0aW1lbGVmdCAtPSAxO1xuICB9O1xuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgaWYgKGluUHJvZ3Jlc3MgPT09IGZhbHNlICYmIHBsYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgaW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICBsZWFkZXIgPSBjaG9vc2VMZWFkZXIoKTtcbiAgICAgIHdvcmQgPSBjaG9vc2VXb3JkKCk7XG4gICAgICBpZiAobGVhZGVyKSB7XG4gICAgICAgIHNvY2tldHMuZm9yRWFjaCgoYVNvY2tldCkgPT4ge1xuICAgICAgICAgIGlmIChhU29ja2V0LmlkICE9PSBsZWFkZXIuaWQpIGFTb2NrZXQuam9pbihcIm5vdCBsZWFkZXJcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc3VwZXJCcm9hZGNhc3QoZXZlbnRzLmdhbWVTdGFydGluZyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGxlYWRlcikge1xuICAgICAgICAgIHN1cGVyQnJvYWRjYXN0KGV2ZW50cy5nYW1lU3RhcnRlZCwge1xuICAgICAgICAgICAgbGVhZGVyTmlja25hbWU6IGxlYWRlci5uaWNrbmFtZSxcbiAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICBsZWFkZXJDb2xvcjogbGVhZGVyLmNvbG9yLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlvLnRvKGxlYWRlci5pZCkuZW1pdChldmVudHMubGVhZGVyTm90aWYsIHsgd29yZCB9KTtcbiAgICAgICAgdGltZWxlZnQgPSA0MDtcbiAgICAgICAgaGFuZGxlVGltZWxlZnQoKTtcbiAgICAgICAgaWYgKGludGVydmFsID09PSBudWxsKSB7XG4gICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGltZWxlZnQgPT09IDApIGVuZEdhbWUoKTtcbiAgICAgICAgICAgIGhhbmRsZVRpbWVsZWZ0KCk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgICBpblByb2dyZXNzID0gZmFsc2U7XG4gICAgaWYgKGxlYWRlcikge1xuICAgICAgc29ja2V0cy5mb3JFYWNoKChhU29ja2V0KSA9PiB7XG4gICAgICAgIGlmIChhU29ja2V0LmlkICE9PSBsZWFkZXIuaWQpIGFTb2NrZXQubGVhdmUoXCJub3QgbGVhZGVyXCIpO1xuICAgICAgfSk7XG4gICAgICBzdXBlckJyb2FkY2FzdChldmVudHMuZ2FtZUVuZGVkLCB7XG4gICAgICAgIGxlYWRlck5pY2tuYW1lOiBsZWFkZXIubmlja25hbWUsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBsZWFkZXJDb2xvcjogbGVhZGVyLmNvbG9yLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICBpbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4gc3RhcnRHYW1lKCksIDIwMDApO1xuICB9O1xuICBjb25zdCBhZGRQb2ludCA9IChpZCkgPT4ge1xuICAgIHBsYXllcnMgPSBwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiB7XG4gICAgICBpZiAocGxheWVyLmlkID09PSBpZCkge1xuICAgICAgICBwbGF5ZXIucG9pbnRzICs9IDEwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9KTtcbiAgICBzZW5kUGxheWVyVXBkYXRlKCk7XG4gICAgZW5kR2FtZSgpO1xuICB9O1xuXG4gIHNvY2tldC5vbihldmVudHMuc2V0Tmlja25hbWUsICh7IG5pY2tuYW1lIH0pID0+IHtcbiAgICBpZiAoIW5pY2tuYW1lcy5pbmNsdWRlcyhuaWNrbmFtZSkpIHtcbiAgICAgIGNvbnN0IHBsYXllckNvbG9yID0gY2hvb3NlQ29sb3IoKTtcbiAgICAgIHNvY2tldC5uaWNrbmFtZSA9IG5pY2tuYW1lO1xuICAgICAgc29ja2V0LmNvbG9yID0gcGxheWVyQ29sb3I7XG4gICAgICBuaWNrbmFtZXMucHVzaChuaWNrbmFtZSk7XG4gICAgICBwbGF5ZXJzLnB1c2goe1xuICAgICAgICBpZDogc29ja2V0LmlkLFxuICAgICAgICBwb2ludHM6IDAsXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcbiAgICAgICAgY29sb3I6IHBsYXllckNvbG9yLFxuICAgICAgfSk7XG4gICAgICBzb2NrZXRzLnB1c2goc29ja2V0KTtcbiAgICAgIHNvY2tldC5lbWl0KGV2ZW50cy5sb2dnZWRJbik7XG4gICAgICBicm9hZGNhc3QoZXZlbnRzLm5ld1VzZXIsIHsgbmlja25hbWUgfSk7XG4gICAgICBzZW5kUGxheWVyVXBkYXRlKCk7XG4gICAgICBzdGFydEdhbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc29ja2V0LmVtaXQoZXZlbnRzLnVuYXV0aGVudGljYXRlZCk7XG4gICAgfVxuICB9KTtcblxuICBzb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3QsICgpID0+IHtcbiAgICBicm9hZGNhc3QoZXZlbnRzLmRpc2Nvbm5lY3RlZCwgeyBuaWNrbmFtZTogc29ja2V0Lm5pY2tuYW1lIH0pO1xuICAgIHBsYXllcnMgPSBwbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIuaWQgIT0gc29ja2V0LmlkKTtcbiAgICBzb2NrZXRzID0gc29ja2V0cy5maWx0ZXIoKGFTb2NrZXQpID0+IGFTb2NrZXQuaWQgIT0gc29ja2V0LmlkKTtcbiAgICBuaWNrbmFtZXMgPSBuaWNrbmFtZXMuZmlsdGVyKChuaWNrbmFtZSkgPT4gbmlja25hbWUgIT0gc29ja2V0Lm5pY2tuYW1lKTtcbiAgICBpZiAoIWNvbG9ycy5pbmNsdWRlcyhzb2NrZXQuY29sb3IpKSB7XG4gICAgICBjb2xvcnMucHVzaChzb2NrZXQuY29sb3IpO1xuICAgIH1cbiAgICBpZiAoY29sb3JzLmxlbmd0aCA+IDcpIGNvbG9ycyA9IGluaXRpYWxDb2xvcnM7XG4gICAgaWYgKHBsYXllcnMubGVuZ3RoID09IDEpIHtcbiAgICAgIGVuZEdhbWUoKTtcbiAgICB9IGVsc2UgaWYgKGxlYWRlcikge1xuICAgICAgaWYgKHNvY2tldC5pZCA9PSBsZWFkZXIuaWQpIGVuZEdhbWUoKTtcbiAgICB9XG4gICAgc2VuZFBsYXllclVwZGF0ZSgpO1xuICB9KTtcblxuICBzb2NrZXQub24oZXZlbnRzLnNlbmRNc2csICh7IG1lc3NhZ2UgfSkgPT4ge1xuICAgIHN1cGVyQnJvYWRjYXN0KGV2ZW50cy5uZXdNc2csIHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuaWNrbmFtZTogc29ja2V0Lm5pY2tuYW1lLFxuICAgICAgY29sb3I6IHNvY2tldC5jb2xvcixcbiAgICAgIHVuZGVybGluZWQ6IG1lc3NhZ2UgPT09IHdvcmQgPyB0cnVlIDogZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKG1lc3NhZ2UgPT09IHdvcmQpIHtcbiAgICAgIHN1cGVyQnJvYWRjYXN0KGV2ZW50cy5uZXdNc2csIHtcbiAgICAgICAgbWVzc2FnZTogYFdpbm5lciBpczogJHtzb2NrZXQubmlja25hbWV9LFxcbndvcmQgd2FzOiAke3dvcmR9YCxcbiAgICAgICAgbmlja25hbWU6IFwiQm90XCIsXG4gICAgICAgIGNvbG9yOiBcIiMyYzJjMmNcIixcbiAgICAgICAgdW5kZXJsaW5lZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIGFkZFBvaW50KHNvY2tldC5pZCk7XG4gICAgfVxuICB9KTtcblxuICBzb2NrZXQub24oZXZlbnRzLmJlZ2luUGF0aCwgKHsgeCwgeSB9KSA9PlxuICAgIGJyb2FkY2FzdChldmVudHMuYmVnYW5QYXRoLCB7IHgsIHkgfSlcbiAgKTtcblxuICBzb2NrZXQub24oZXZlbnRzLnN0cm9rZVBhdGgsICh7IHgsIHksIGNvbG9yIH0pID0+XG4gICAgYnJvYWRjYXN0KGV2ZW50cy5zdHJva2VkUGF0aCwgeyB4LCB5LCBjb2xvciB9KVxuICApO1xuXG4gIHNvY2tldC5vbihldmVudHMuZmlsbCwgKHsgY29sb3IgfSkgPT4ge1xuICAgIGJyb2FkY2FzdChldmVudHMuZmlsbGVkLCB7IGNvbG9yIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNvY2tldENvbnRyb2xsZXI7XG4iXX0=
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