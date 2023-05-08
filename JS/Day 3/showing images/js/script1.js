let currentImageIndex = 0;
let sliderShow;

const images = [
  "../images/image1.jpg",
  "../images/image2.jpg",
  "../images/image3.jpg",
  "../images/image4.jpg",
  "../images/image5.jpg",
];

const imageContainer = document.getElementById("image-container");
const sliderBtn = document.getElementById("slider-btn");
const stopBtn = document.getElementById("stop-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

function showCurrentImage() {
  for (let i = 0; i < images.length; i++) {
    if (i === currentImageIndex) {
      imageContainer.innerHTML = `<img src="${images[i]}">`;
    }
  }
}

function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = images.length;
    prevBtn.disabled = false;
    nextBtn.disabled = true;
    sliderBtn.disabled = false;
    stopBtn.disabled = false;
  }
 
  showCurrentImage();
}

function showPrevImage() {
  currentImageIndex--;
  nextBtn.disabled = false;
  sliderBtn.disabled = false;
  stopBtn.disabled = false;
  if (currentImageIndex < 0) {
    currentImageIndex = 0;
    prevBtn.disabled = true;
  }
  
  showCurrentImage();
}

function start() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showCurrentImage();
}

function startSliderShow() {
  sliderShow = setInterval(start, 1000);
  sliderBtn.disabled = true;
  stopBtn.disabled = false;
  prevBtn.disabled = false;
  nextBtn.disabled = false;
}

function stopSliderShow() {
  clearInterval(sliderShow);
  stopBtn.disabled = true;
  sliderBtn.disabled = false;
 
}

showCurrentImage();
