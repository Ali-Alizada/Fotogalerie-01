const images = [
  "imgs/1.jpg",
  "imgs/10.jpg",
  "imgs/11.jpg",
  "imgs/12.jpg",
  "imgs/13.jpg",
  "imgs/14.jpg",
  "imgs/15.jpg",
  "imgs/16.jpg",
  "imgs/17.jpg",
  "imgs/18.jpg",
  "imgs/19.jpg",
  "imgs/2.jpg",
  "imgs/20.jpg",
  "imgs/3.jpg",
  "imgs/4.jpg",
  "imgs/5.jpg",
  "imgs/6.jpg",
  "imgs/7.jpg",
  "imgs/8.jpg",
  "imgs/9.jpg"
];


function render() {
  const container = document.getElementById("div-container");
  container.innerHTML = ""; // Container leeren

  // Bilder direkt als HTML einsetzen
  for (let i = 0; i < images.length; i++) {
    container.innerHTML += `<img src="${images[i]}" alt="${images[i].split("/").pop()}">`;
  }
}

// Bilder rendern
render();