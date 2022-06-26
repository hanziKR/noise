"use strict";

function setup() {
  const size = 300;
  createCanvas(size, size);
  pixelDensity(1);
}

let timer = 0;

function draw() {
  loadPixels();

  timer += random(0.01, 0.03);
  noiseDetail(8);
  const noiseSize = 300;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let i = (x + y * width) * 4;

      const R = (x) => (-45 / 255) * x + 255;
      const G = (x) => (28 / 255) * x + 208;
      const B = (x) => (45 / 255) * x + 208;

      let brightness = noise(x / noiseSize - timer, y / noiseSize + timer) * 255;
      let r = R(brightness);
      let g = G(brightness);
      let b = B(brightness);
      let a = 255;

      pixels[i + 0] = r;
      pixels[i + 1] = g;
      pixels[i + 2] = b;
      pixels[i + 3] = a;
    }
    updatePixels();
  }
}
