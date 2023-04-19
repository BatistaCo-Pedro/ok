let img, cityImg;

function preload() {
    img = loadImage('images/tree.jpg');
    cityImg = loadImage('images/city.jpg')
}

function setup() {
    createCanvas(1000, 10000);

    pixelDensity(1);
}

function grayscale() {
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
      let r = pixels[i];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let gray = 0.21 * r + 0.72 * g + 0.07 * b; //luminosity formula
      pixels[i] = gray;
      pixels[i + 1] = gray;
      pixels[i + 2] = gray;
    }
    updatePixels();
}

function sepia() {
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
      let r = pixels[i + 0];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];
      pixels[i + 0] = 255 - r;
      pixels[i + 1] = 255 - g;
      pixels[i + 2] = 255 - b;
      pixels[i + 3] = a;
    }
    updatePixels();
  }

function draw() {
    image(img, 0, 0);
    grayscale();

    image(cityImg, 0, 500)
    sepia();
}
  