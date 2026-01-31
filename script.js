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
];

const container = document.getElementById("div-container");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupInfo = document.getElementById("popup-info");

let currentIndex = 0;

function renderGallery() {
  container.innerHTML = "";

  let html = "";
  for (let index = 0; index < images.length; index++) {
    html += `
      <img 
        src="${images[index]}" 
        alt="${images[index].split("/").pop()}" 
        data-index="${index}"
      >
    `;
  }
  container.innerHTML = html;

  addImageClickEvents();
}

function addImageClickEvents() {
  const imgs = document.querySelectorAll("#div-container img");

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      openPopup(index);
    });
  }
}

function openPopup(index) {
  currentIndex = index;
  localStorage.setItem("galleryIndex", currentIndex);

  popupImg.src = images[index];
  popupInfo.innerHTML = `
    <p>Bild ${index + 1} von ${images.length}</p>
  `;
  popup.classList.remove("hidden");
}

function prevImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Loop nach hinten
  }

  openPopup(currentIndex);
}

function nextImage() {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0; // Loop nach vorne
  }

  openPopup(currentIndex);
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

document.getElementById("popup-close").addEventListener("click", closePopup);
document.getElementById("popup").addEventListener("click", (e) => {
  if (e.target.id === "popup") closePopup();
});

document.getElementById("prev-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  prevImage();
});

document.getElementById("next-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  nextImage();
});

renderGallery();

const savedIndex = localStorage.getItem("galleryIndex");

if (savedIndex !== null && images[savedIndex]) {
  currentIndex = Number(savedIndex);
}
