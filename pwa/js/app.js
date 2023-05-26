// Check if the app is running locally
if (window.location.hostname === 'localhost') {
  // Set the start URL for local development
  var serviceWorker = '/saqib59.github.io/pwa/serviceWorker-local.js';
  document.querySelector('link[rel="manifest"]').setAttribute('href', 'manifest-local.json');
} else {
  // Set the start URL for live server
  var serviceWorker = '/pwa/serviceWorker.js';
  document.querySelector('link[rel="manifest"]').setAttribute('href', 'manifest.json');
}
const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "pwa/images/coffee1.jpg"
  },
  {
    name: "Voluptatem",
    image: "pwa/images/coffee2.jpg"
  },
  {
    name: "Explicabo",
    image: "pwa/images/coffee3.jpg"
  },
  {
    name: "Rchitecto",
    image: "pwa/images/coffee4.jpg"
  },
  {
    name: " Beatae",
    image: "pwa/images/coffee5.jpg"
  },
  {
    name: " Vitae",
    image: "pwa/images/coffee6.jpg"
  },
  {
    name: "Inventore",
    image: "pwa/images/coffee7.jpg"
  },
  {
    name: "Veritatis",
    image: "pwa/images/coffee8.jpg"
  },
  {
    name: "Accusantium",
    image: "pwa/images/coffee9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register(serviceWorker)
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
