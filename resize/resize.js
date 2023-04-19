let img;
let imgWidth = 300;
let imgHeight = 200;

function preload() {
  img = loadImage("../images/city.jpg");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);
  image(img, 0, 0, imgWidth, imgHeight);
}

function mouseDragged() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    imgWidth += mouseX - pmouseX;
    imgHeight += mouseY - pmouseY;
  }
}