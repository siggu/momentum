const images = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement('img');

image.src = `img/${chosenImage}`;

document.body.appendChild(image);
