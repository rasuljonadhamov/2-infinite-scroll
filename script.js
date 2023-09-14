const imageContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

let imageArray = [];
let readys = false;
let imagesLoaded = 0;
let totalImages = 0;

// API key
const count = 30;
const apiKey = "-sPZTA4dwYXyQ8f0kPKPBduZf2jJtMp6mIg_KH4JEcs";
// const apiKey = "WMl6aKPKoo1QRu2zJIcxDCpdkC7sSeF6VxMW-4vrPF0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// IS image loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    loader.hidden = true;
    readys = true;
  }
}

// Display image on tje page
function displayImage() {
  imagesLoaded = 0;

  totalImages = imageArray.length;
  console.log("Toatal Images ", totalImages);
  imageArray.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // Create img for phote
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    img.addEventListener("load", imageLoaded);

    // Append both
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

async function getImage() {
  try {
    const response = await fetch(apiUrl);
    imageArray = await response.json();
    displayImage();
  } catch (err) {
    // Err
    console.log(err);
  }
}

// Window scroll

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    readys
  ) {
    readys = false;
    getImage();
  }
});

// On Load
getImage();
