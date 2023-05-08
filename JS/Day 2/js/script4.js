// Task 2.1.1

let childWindow;
let timerID;
let startY = 0;
let direction = 1;

function openChildWindow() {
  childWindow = window.open("child.html", "", "width=200,height=200");
  childWindow.focus();
}
function moveWindow() {
  startY = childWindow.screenY;
  timerID = setInterval(function () {
    let currentY = childWindow.screenY;
    let maxY = window.screen.availHeight - childWindow.outerHeight;
      if (currentY + 100 >= maxY) {
          direction = -1;
      } else if (currentY <= startY) {
          direction = 1;
      }
    childWindow.moveBy(100* direction, 100 * direction);
    childWindow.focus();
  }, 1000);
}
function stopWindow() {
  clearInterval(timerID);
  childWindow.focus();
}
