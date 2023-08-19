const images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement('img');

image.src = `img/${chosenImage}`;

document.body.appendChild(image);
