var myVideo = document.getElementById("myVid");
var playRange = document.getElementById("vidRange");
var volRange = document.getElementById("volRange");
var speedRange = document.getElementById("speedRange");
var playBtn = document.getElementById("play");
var stopBtn = document.getElementById("stop");
var muteBtn = document.getElementById("mute");
var aa = document.getElementById("aa");
var a = document.getElementById("a");
var bb = document.getElementById("bb");
var b = document.getElementById("b");
let isMute = true;
myVideo.addEventListener("timeupdate", function () {
  playRange.value = myVideo.currentTime;
});
playBtn.addEventListener("click", function () {
  myVideo.play();
  playRange.value = myVideo.currentTime;
});
stopBtn.addEventListener("click", function () {
  myVideo.pause();
});
playRange.addEventListener("input", function () {
  myVideo.currentTime = playRange.value;
});
aa.addEventListener("click", function () {
  myVideo.currentTime = 0;
});
a.addEventListener("click", function () {
  myVideo.currentTime -= 3;
});
bb.addEventListener("click", function () {
  myVideo.currentTime += 1;
});
b.addEventListener("click", function () {
  myVideo.currentTime = 300;
});
muteBtn.addEventListener("click", function () {
    if (myVideo.muted) {
        myVideo.muted = false;
        muteBtn.value = "mute";
        isMute = false;
      } else {
        myVideo.muted = true;
        muteBtn.value = "unmute";
        isMute = true;
      }

    }
    
});
speedRange.addEventListener("input", function () {
  myVideo.playbackRate = speedRange.value;
  console.log(speedRange.value);
});
volRange.addEventListener("input", function () {
  myVideo.volume = volRange.value;
});
playRange.value = myVideo.currentTime;
