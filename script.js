// API key
const count = 10;
const apiKey = "WMl6aKPKoo1QRu2zJIcxDCpdkC7sSeF6VxMW-4vrPF0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getImage() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
}

// On Load
getImage();
