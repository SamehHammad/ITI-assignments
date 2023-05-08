
// Task 2.1.2 

const speed = 100;
let i = 0;

const win = window.open("child.html", "", "width=300,height=200");
const message = "This is a typing message!";

function typeWriterr() {
  if (i < message.length) {
    win.document.write(message.charAt(i));
    i++;
    setTimeout(typeWriterr, speed);
  } else {
    // Close the window after 5 seconds
    setTimeout(() => {
      win.close();
    }, 5000);
  }
}

typeWriterr();
