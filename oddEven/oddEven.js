let imgA, imgB, newImg;

function preload() {
  imgA = loadImage("../images/city.jpg");
  imgB = loadImage("../images/idk.jpg");
}

function setup() {
  createCanvas(500, 400);
  newImg = createImage(imgA.width, imgA.height);
  newImg.loadPixels();

  for (let y = 0; y < imgA.height; y++) {
    for (let x = 0; x < imgA.width; x++) {
      let index = (x + y * imgA.width) * 4;
      if (x % 2 === 0) {
        newImg.pixels[index] = imgA.pixels[index];
        newImg.pixels[index + 1] = imgA.pixels[index + 1];
        newImg.pixels[index + 2] = imgA.pixels[index + 2];
        newImg.pixels[index + 3] = imgA.pixels[index + 3];
      } else {
        newImg.pixels[index] = imgB.pixels[index];
        newImg.pixels[index + 1] = imgB.pixels[index + 1];
        newImg.pixels[index + 2] = imgB.pixels[index + 2];
        newImg.pixels[index + 3] = imgB.pixels[index + 3];
      }
    }
  }

  newImg.updatePixels();
}

function draw() {
  background(220);
  image(newImg, 0, 0);
}