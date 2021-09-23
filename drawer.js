const canvasTag = document.querySelector("canvas");

canvasTag.width = window.innerWidth * 2;
canvasTag.height = window.innerHeight * 2;

canvasTag.style.width = window.innerWidth + "px";
canvasTag.style.height = window.innerHeight + "px";

const context = canvasTag.getContext("2d");
context.scale(2, 3);

let aimX = null;
let aimY = null;
let currentX = null;
let currentY = null;

let i = 0;
const images = [
  "QmZ3PQ3ismBjHPYbWzZQhpbz4fEfJzTNF14E8AZNu1qhBC.png",
  "QmZdByZp6iGLiBij2hDwGi7tybG2uCESWM4vmHA61MCERs.png",
  "QmZDoJAVNx5Br2HUQGqzNEF9bSRdkBgy95ZmJtW6bVwBoJ.png",
  "QmZJZocJsj3aB8naSdV5i5c8UiWB6EY1DHjxfxdQxvmQxg.png",
  "QmTEYzxRnF1SGDfQjt189qGh9kXn7bQvqNwrBTgVZ9CLGE.png",
  "QmWbdZWLgHMmVnjBQvJRWnoDJQR2QMAyM8zjDqq4MZKhnF.png",
  "QmZVbG2BME5T27QTAP9SJ1wJqXtDcNy9J9YY7ujLPxUJrL.png"
].map(src => {
  const image = document.createElement("img");
  image.src = src;
  return image;
});

document.addEventListener("mousemove", function() {
  aimX = event.pageX;
  aimY = event.pageY;
  if (currentX === null) {
    currentX = event.pageX;
    currentY = event.pageY;
  }
});

canvasTag.addEventListener("click", function() {
  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
});

const draw = function() {
  if (currentX) {
    if (images[i].complete) {
      context.drawImage(images[i], currentX - 70, currentY - 70, 140, 140);
    }

    currentX = currentX + (aimX - currentX) * 0.03;
    currentY = currentY + (aimY - currentY) * 0.03;
  }

  requestAnimationFrame(draw);
};

draw();
