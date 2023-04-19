let img;
let sorted;

function preload(){
  img = loadImage("../images/idk.jpg");
}

function setup() {
  createCanvas(600, 600);

  sorted = img.get();
  sorted.loadPixels();
  
  // Sort the pixels based on their RGB values
  for (let i = 0; i < sorted.pixels.length; i+=4) {
    for (let j = i; j < sorted.pixels.length; j+=4) {
      let aRed = sorted.pixels[i];
      let aGreen = sorted.pixels[i+1];
      let aBlue = sorted.pixels[i+2];
      let bRed = sorted.pixels[j];
      let bGreen = sorted.pixels[j+1];
      let bBlue = sorted.pixels[j+2];

      let aBrightness = (aRed + aGreen + aBlue) / 3;
      let bBrightness = (bRed + bGreen + bBlue) / 3;

      if (aBrightness > bBrightness) {
        // Swap the pixels
        let tempR = sorted.pixels[i];
        let tempG = sorted.pixels[i+1];
        let tempB = sorted.pixels[i+2];
        sorted.pixels[i] = sorted.pixels[j];
        sorted.pixels[i+1] = sorted.pixels[j+1];
        sorted.pixels[i+2] = sorted.pixels[j+2];
        sorted.pixels[j] = tempR;
        sorted.pixels[j+1] = tempG;
        sorted.pixels[j+2] = tempB;
      }
    }
  }
  
  sorted.updatePixels();
}

function draw() {
  background(255);
  image(sorted, 300, 0);
  image(img, 0, 0)
}
