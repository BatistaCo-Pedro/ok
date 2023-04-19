let img;

function preload() {
  img = loadImage('../images/city.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
}

function draw() {
  // Select a random section of the image
  let x1 = floor(random(img.width));
  let y1 = floor(random(img.height));
  let x2 = floor(random(img.width));
  let y2 = floor(random(img.height));
  
  // Copy the section into a temporary image
  let tempImg = createImage(abs(x2 - x1), abs(y2 - y1));
  tempImg.copy(img, x1, y1, abs(x2 - x1), abs(y2 - y1), 0, 0, abs(x2 - x1), abs(y2 - y1));
  
  // Apply a glitch effect to the temporary image
  for (let i = 0; i < 10; i++) {
    let x = floor(random(tempImg.width));
    let y = floor(random(tempImg.height));
    let w = floor(random(tempImg.width - x));
    let h = floor(random(tempImg.height - y));
    let sx = floor(random(-10, 10));
    let sy = floor(random(-10, 10));
    tempImg.copy(tempImg, x, y, w, h, x + sx, y + sy, w, h);
  }
  
  // Copy the glitched section back into the original image
  img.copy(tempImg, 0, 0, tempImg.width, tempImg.height, x1, y1, tempImg.width, tempImg.height);
  
  // Draw the glitched image
  image(img, 0, 0);
}