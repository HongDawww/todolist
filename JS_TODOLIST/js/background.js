const images = ["0.jpg","1.jpg","2.jpg"];
const changeImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src =`../img/${changeImage}`;
document.body.appendChild(bgImage);

//prepend , append